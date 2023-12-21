import React, {Component} from 'react';
import styles from './player.module.scss';
import {Places} from './places';
import {shuffleArray, numberWithCommas/* , numberWithSpaces */} from '../../../utilities/utilities';
import {connect} from 'react-redux';
import Avatar from '../../../components/avatar/Avatar';
import HintBoard from '../player/stage/HintBoard';
import RankBoard from '../player/stage/RankBoard';
import TimerPanel from './activity/TimerPanel';
import RoundsPanel from './activity/RoundsPanel';
import IntervalBoard from './activity/IntervalBoard';
import BonusMeter from './activity/BonusMeter';
import Option from './activity/Option';
import * as actions from '../../../store/actions/index';
import Timer from '../Timer';
import Dialogue from './dialogue/Dialogue';

import SouthernAfrica from './stages/SouthernAfrica';
import CSAsia from './stages/CSAsia';
import SouthernEurope from './stages/SouthernEurope';
import Caribbean from './stages/Caribbean';
import WCAfrica from './stages/WCAfrica';
import EAfricaMEAsia from './stages/EAfricaMEASia';
import SEAsiaOceania from './stages/SEAsiaOceania';
import WIndiesWAfrica from './stages/WIndiesWAfrica';
import Africa from './stages/Africa';
import Asia from './stages/Asia';
import Europe from './stages/Europe';
import NorthAmerica from './stages/NorthAmerica';
import Oceania from './stages/Oceania';
import SouthAmerica from './stages/SouthAmerica';
import World from './stages/World';

import withRouter from '../../../withRouter';
import {playNewRoundSound, playWrongChoiceSound, playRightChoiceSound, playNavSound, playButtonSound} from '../../../howler/index';


class Player extends Component {

    constructor(props) {
        super(props);
        this.placeOptionClicked = this.placeOptionClicked.bind(this);
    }

    state = {
        //initiators
        totalRounds: 0,
        nextRound: 0,
        rightChoiceCount: 0,
        rightCountForBonusPoints: 0,
        displayedBonusPoint: 0,
        rightCountForBonusLive: 0,
        totalScore: 0,
        roundScore: 0,
        levelScore: 0,
        displayedRoundScore: "0",
        nextPlaceName: '',
        rightRoundChoice: '',
        clickedOption: null,
        roundOverReason: null,
        gameEndReport: null,

        allPlaces: [],
        stagePlaces: [],
        featuredPlaces: [],
        roundOptions: [],
        wrongRoundChoices: [],

        nextPlace: {
            name: "",
            domID: "",
            capital: "",
            flag: false,
            emblem: false,
            currency: "",
            territory: false,
            sovereignState: null,
            commonLanguages: [],
            geographicFeatures: {
            elevation: "",
            forest: "",
            desert: "",
            waters: ""
            },
            continent: "",
            stages: [],
            callingCode: "",
            touristAttractions: []
        },

        //validators
        isRoundScoreLoss: false,
        isRoundInterval: false,

        hasLive1: true,
        hasLive2: true,
        hasLive3: true,
        hasLive4: true,

        gamePaused: false,
        showCancelGame: false,
        showRestartGame: false,
        restartMission: false,

        showBonusMeter: true,
        gameOver: false,
        
        rightUserOption: false,

        showBonusPoint: false,
        showBonusLive: false,

        showHints: false,
        showUserRanking: false,
        showTimerPanelSelect: false,
        showTimerPanelTimer: false
    }

    componentDidMount() {

        if (this.props.gameType === 'Single') {
            let bonus = this.props.roundIntervalSeconds;
            let pointMaxSimple = this.props.rightCountForBonusPointsMaxSimple;
            let pointMaxHard = this.props.rightCountForBonusPointsMaxHard;
            let liveMaxSimple = this.props.rightCountForBonusLiveMaxSimple;
            let liveMaxHard = this.props.rightCountForBonusLiveMaxHard;

            if (this.props.difficulty === 'Hard' ) {
                bonus = this.props.hardBonusPoint;
            }

            if (this.props.gameStage === 'World' || this.props.levelStage === 'World') {
                pointMaxSimple = this.props.rightCountForBonusPointsWorldMaxSimple;
                pointMaxHard = this.props.rightCountForBonusPointsWorldMaxHard;
                liveMaxSimple = this.props.rightCountForBonusLiveWorldMaxSimple;
                liveMaxHard = this.props.rightCountForBonusLiveWorldMaxHard;
            }
            

            this.setState({
                simpleBonusPoint: bonus,
                rightCountForBonusPointsMaxSimple: pointMaxSimple,
                rightCountForBonusPointsMaxHard: pointMaxHard,
                rightCountForBonusLiveMaxSimple: liveMaxSimple,
                rightCountForBonusLiveMaxHard: liveMaxHard,
            }, () => {
                this.initializeSingleGame();
            })
            
        } else if (this.props.gameType === 'Multilevel') {
            if (this.props.difficulty === 'Hard') {

                let bonus = this.props.roundIntervalSeconds;
                let pointMaxSimple = this.props.rightCountForBonusPointsMaxSimple;
                let pointMaxHard = this.props.rightCountForBonusPointsMaxHard;
                let liveMaxSimple = this.props.rightCountForBonusLiveMaxSimple;
                let liveMaxHard = this.props.rightCountForBonusLiveMaxHard;

                let live4 = true;
                let live3 = true;
                let live2 = true;
                let live1 = true;
                let lifeCount = this.props.lifeCount;

                if (this.props.difficulty === 'Hard' ) {
                    bonus = this.props.hardBonusPoint;
                }

                if (this.props.gameStage === 'World' || this.props.levelStage === 'World') {
                    pointMaxSimple = this.props.rightCountForBonusPointsWorldMaxSimple;
                    pointMaxHard = this.props.rightCountForBonusPointsWorldMaxHard;
                    liveMaxSimple = this.props.rightCountForBonusLiveWorldMaxSimple;
                    liveMaxHard = this.props.rightCountForBonusLiveWorldMaxHard;
                }

                if (lifeCount === 3) {
                    live4 = false;
                    live3 = true;
                    live2 = true;
                    live1 = true;
                } else if (lifeCount === 2) {
                    live4 = false;
                    live3 = false;
                    live2 = true;
                    live1 = true;
                } else if (lifeCount === 1) {
                    live4 = false;
                    live3 = false;
                    live2 = false;
                    live1 = true;
                }

                this.setState({ 
                    simpleBonusPoint: bonus,
                    rightCountForBonusPointsMaxSimple: pointMaxSimple,
                    rightCountForBonusPointsMaxHard: pointMaxHard,
                    rightCountForBonusLiveMaxSimple: liveMaxSimple,
                    rightCountForBonusLiveMaxHard: liveMaxHard,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4
                }, () => {
                    this.initializeMultilevelStage();
                })
            } else {

                let bonus = this.props.roundIntervalSeconds;
                let pointMaxSimple = this.props.rightCountForBonusPointsMaxSimple;
                let pointMaxHard = this.props.rightCountForBonusPointsMaxHard;
                let liveMaxSimple = this.props.rightCountForBonusLiveMaxSimple;
                let liveMaxHard = this.props.rightCountForBonusLiveMaxHard;

                if (this.props.difficulty === 'Hard' ) {
                    bonus = this.props.hardBonusPoint;
                }

                if (this.props.gameStage === 'World' || this.props.levelStage === 'World') {
                    pointMaxSimple = this.props.rightCountForBonusPointsWorldMaxSimple;
                    pointMaxHard = this.props.rightCountForBonusPointsWorldMaxHard;
                    liveMaxSimple = this.props.rightCountForBonusLiveWorldMaxSimple;
                    liveMaxHard = this.props.rightCountForBonusLiveWorldMaxHard;
                }

                this.setState({
                    simpleBonusPoint: bonus,
                    rightCountForBonusPointsMaxSimple: pointMaxSimple,
                    rightCountForBonusPointsMaxHard: pointMaxHard,
                    rightCountForBonusLiveMaxSimple: liveMaxSimple,
                    rightCountForBonusLiveMaxHard: liveMaxHard,
                }, () => {
                    this.initializeMultilevelStage();
                })    
            }   
        }
    }

    componentDidUpdate(prevProps, prevState) { 

        if (prevProps.screenTrackerActive === false && this.props.screenTrackerActive === true) {
            this.setState({ 
                gamePaused: true, 
                showCancelGame: false,
                showRestartGame: false
            });
        } else if (prevProps.screenTrackerActive === true && this.props.screenTrackerActive === false) {
            this.setState({ gamePaused: false });
        } else if (prevState.gameOver === false && this.state.gameOver === true) {
           
            let reason;

            if (this.props.gameType === "Multilevel") {
                if (this.state.nextRound === this.state.totalRounds) {
                    reason = 'Level Completed'
                } else {
                    reason = 'Level Over'
                }

                if ((this.props.level === this.props.shuffledStages.length) || (this.props.difficulty === 'Hard' && this.state.hasLive1 === false)) {
                    reason = "Mission Over"
                }
            } else if (this.props.gameType === "Single") {
                if (this.state.nextRound === this.state.totalRounds) {
                    reason = 'Mission Completed'
                } else {
                    reason = 'Mission Over'
                }
            }

            // console.log('Running Game Over Routine', reason);

            this.setState({
                isRoundInterval: true,
                showBonusMeter: false, 
                showBonusPoint: false,
                showBonusLive: false,
                roundOverReason: reason
            });
        } else if (prevState.hasLive1 === true && this.state.hasLive1 === false) {
            // console.log('Running last life Spent');
            this.setState({
                gameOver: true,
                showBonusMeter: false,
                showTimerPanelTimer: false,
                showTimerPanelSelect: false
            });

        } else if (prevState.rightUserOption === false && this.state.rightUserOption === true && this.state.gameOver === false) {

            // console.log('Running Right Option Routine, total score:', this.state.totalScore, );
            if (this.props.audioOn) {
                //console.log("Wrong Choice!");
                playRightChoiceSound();
            }
        
            let newRightChoiceCount = this.state.rightChoiceCount + 1;
            let newRoundScore = this.props.scorePerRound;
            let newTotalScore = this.state.totalScore + newRoundScore;
            //let displayScore = this.props.displayedScorePerRound;
            let displayScore = "+" + this.props.scorePerRound.toString();

            let pointRightCount = this.state.rightCountForBonusPoints;
            let liveRightCount = this.state.rightCountForBonusLive;
            let showBonusLive = this.state.showBonusLive;
            let showBonusPoint = this.state.showBonusPoint;
            let live4 = this.state.hasLive4;
            let live3 = this.state.hasLive3;
            let live2 = this.state.hasLive2;
            let bonusPoint;

            if (this.props.difficulty === 'Simple') {
                pointRightCount =  pointRightCount + 1;
                liveRightCount =  liveRightCount + 1;
                if (pointRightCount < this.props.rightCountForBonusPointsMaxSimple) {
                    showBonusPoint = false;
                } else if (pointRightCount === this.props.rightCountForBonusPointsMaxSimple) {
                    bonusPoint = this.props.simpleBonusPoint;
                    pointRightCount =  0;
                    newTotalScore = newTotalScore + bonusPoint;
                    showBonusPoint = true;
                }

                if (liveRightCount < this.props.rightCountForBonusLiveMaxSimple) {
                    showBonusLive = false;
                } else if (liveRightCount === this.props.rightCountForBonusLiveMaxSimple) {
                    liveRightCount =  0;
                    showBonusLive = true;

                    if (this.state.hasLive4 === true) {
                        showBonusLive = false;
                    } else if (this.state.hasLive4 === false && this.state.hasLive3 === true) {
                        live4 = true;
                    } else if (this.state.hasLive3 === false && this.state.hasLive2 === true) {
                        live3 = true;
                    } else if (this.state.hasLive2 === false && this.state.hasLive1 === true) {
                        live2 = true;
                    } else {
                        showBonusLive = false
                    }
                }    
            } else if (this.props.difficulty === 'Hard') {
                pointRightCount =  pointRightCount + 1;
                liveRightCount =  liveRightCount + 1;

                if (pointRightCount < this.props.rightCountForBonusPointsMaxHard) {                   
                    showBonusPoint = false;
                    // console.log("no bonus, ", this.pointRightCount, this.props.rightCountForBonusPointsMaxHard)
                } else if (pointRightCount === this.props.rightCountForBonusPointsMaxHard) {
                    bonusPoint = this.props.hardBonusPoint;
                    pointRightCount =  0;
                    newTotalScore = newTotalScore + bonusPoint;
                    showBonusPoint = true;

                    // console.log("bonus added, ", pointRightCount, bonusPoint, this.state.totalScore, newTotalScore, showBonusPoint);
                }

                if (liveRightCount < this.props.rightCountForBonusLiveMaxHard) {                 
                    showBonusLive = false;
                } else if (liveRightCount === this.props.rightCountForBonusLiveMaxHard) {
                    liveRightCount =  0;
                    showBonusLive = true;

                    if (this.state.hasLive4 === true) {
                        showBonusLive = false;
                    } else if (this.state.hasLive4 === false && this.state.hasLive3 === true) {
                        live4 = true;
                    } else if (this.state.hasLive3 === false && this.state.hasLive2 === true) {
                        live3 = true;
                    } else if (this.state.hasLive2 === false && this.state.hasLive1 === true) {
                        live2 = true;
                    } else {
                        showBonusLive = false
                    }
                }    
            }

            this.setState({ 
                rightChoiceCount: newRightChoiceCount,
                roundScore: newRoundScore,
                totalScore: newTotalScore,
                displayedRoundScore: displayScore,
                isRoundScoreLoss: false,

                isRoundInterval: true,
                showBonusMeter: false,
                showTimerPanelSelect: false, 
                showTimerPanelTimer: false,
                roundOverReason: "Good Choice",

                rightCountForBonusPoints: pointRightCount,
                rightCountForBonusLive: liveRightCount,
                displayedBonusPoint: bonusPoint,
                // totalScore: newScore,
                showBonusLive: showBonusLive,
                showBonusPoint: showBonusPoint,
                hasLive4: live4,
                hasLive3: live3,
                hasLive2: live2
            });
            // console.log('new total score: ', newTotalScore, "bonus: ", bonusPoint);
            /* // console.log('this round score:', this.state.totalScore, "round" + prevState.nextRound); */

        } else if (prevProps.roundTimerElapsed === false && this.props.roundTimerElapsed === true && this.state.gameOver === false)   {
            
            let totalScore = this.state.totalScore;
            let scoreLoss = this.props.simpleWrongChoiceLoss;
            let displayScore = "-" + this.props.simpleWrongChoiceLoss.toString();
            let newTotalScore = this.state.totalScore - scoreLoss;

            if (this.props.difficulty === 'Hard') {
                scoreLoss = this.props.hardWrongChoiceLoss;
                displayScore = "-" + this.props.hardWrongChoiceLoss.toString();
                newTotalScore = this.state.totalScore - scoreLoss;
            }


            if (this.state.rightChoiceCount === 0 && totalScore === 0 ) {

                // console.log('Running Time Elapse Routine -- rightChoiceCount == 0, totalScore == 0');  

                let live4 = this.state.hasLive4;
                let live3 = this.state.hasLive3;
                let live2 = this.state.hasLive2;
                let live1 = this.state.hasLive1;
                // let isGameOver = this.state.gameOver;

                if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                }

                this.setState({ 
                    roundScore: scoreLoss,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver,
                    rightCountForBonusPoints: 0,
                    rightCountForBonusLive: 0,
                    showBonusLive: false,
                    showBonusPoint: false,
                    isRoundInterval: true,
                    showBonusMeter: false,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    // showHints: false,
                    roundOverReason: "Time Up"
                });

            } else if (this.state.rightChoiceCount >= 1 && newTotalScore > 0 ) {

                // console.log('Running Time Elapse Routine -- rightChoiceCount >= 1, totalScore > 0');

                let live4 = this.state.hasLive4;
                let live3 = this.state.hasLive3;
                let live2 = this.state.hasLive2;
                let live1 = this.state.hasLive1;
                // let isGameOver = this.state.gameOver;

                if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                }

                this.setState({ 
                    roundScore: scoreLoss,
                    totalScore: newTotalScore,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver,
                    rightCountForBonusPoints: 0,
                    rightCountForBonusLive: 0,
                    showBonusLive: false,
                    showBonusPoint: false,
                    isRoundInterval: true,
                    showBonusMeter: false,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    roundOverReason: "Time Up"
                });

            } else if (this.state.rightChoiceCount >= 1 && newTotalScore <= 0) {   
                
                // console.log('Running Time Elapse Routine -- right choice count >= 1, total score <= 0');

                let live4 = false;
                let live3 = false;
                let live2 = false;
                let live1 = false;
                // let isGameOver = this.state.gameOver;

                /* if (this.state.hasLive4) {
                    live4 = false
                } else if (this.state.hasLive3) {
                    live3 = false
                } else if (this.state.hasLive2) {
                    live2 = false
                } else if (this.state.hasLive1) {
                    live1 = false;
                    // isGameOver = true;
                } */

                this.setState({ 
                    roundScore: scoreLoss,
                    totalScore: newTotalScore,
                    displayedRoundScore: displayScore,
                    isRoundScoreLoss: true,
                    hasLive1: live1,
                    hasLive2: live2,
                    hasLive3: live3,
                    hasLive4: live4,
                    // gameOver: isGameOver, 
                    rightCountForBonusPoints: 0,
                    rightCountForBonusLive: 0,
                    showBonusLive: false,
                    showBonusPoint: false,
                    isRoundInterval: true,
                    showBonusMeter: false,
                    showTimerPanelSelect: false, 
                    showTimerPanelTimer: false,
                    roundOverReason: "Time Up"
                });
            }
        }
    }

    initializeSingleGame = () => {
        const stageName = this.props.gameStage;
        const places = Places.filter(place =>
            place.stages.indexOf(stageName) > -1
        );
        const placesShuffled = shuffleArray(places);
        const otherPlaces = Places.filter(place => place.stages.indexOf(stageName) === -1).slice(0, 4);

        // console.log(places, otherPlaces, "single game initialized", stageName);

        const allPlaces = placesShuffled.concat(otherPlaces);
        const round = this.state.nextRound + 1;
        const place = placesShuffled[0];
        const placeDomID = place.domID;
        const featuredFiltered = allPlaces.filter(place => place.domID !== placeDomID);
        const options = featuredFiltered.slice(0, 3);
        options.push(place);
        const optionsShuffled = shuffleArray(options);

        this.setState({
            totalRounds: placesShuffled.length,
            nextRound: round,

            allPlaces: allPlaces,
            stagePlaces: placesShuffled,
            nextPlace: place,
            featuredPlaces: featuredFiltered,
            nextPlaceName: placeDomID,

            roundOptions: optionsShuffled,
            showTimerPanelSelect: true,
            showTimerPanelTimer: true,

            restartMission: false
        })
        
        // console.log('On next round score:', this.state.totalScore, "round: " + this.state.nextRound);
        //console.log('initialized single game', placeDomID);
    }

    initializeMultilevelStage = () => {
        const stageName = this.props.levelStage;
        const places = Places.filter(place =>
            place.stages.indexOf(stageName) > -1
        );
        const placesShuffled = shuffleArray(places);
        const otherPlaces = Places.filter(place => place.stages.indexOf(stageName) === -1).slice(0, 4);

        const allPlaces = placesShuffled.concat(otherPlaces);
        const round = this.state.nextRound + 1;
        const place = placesShuffled[0];
        const placeDomID = place.domID;
        const featuredFiltered = allPlaces.filter(place => place.domID !== placeDomID);
        const options = featuredFiltered.slice(0, 3);
        options.push(place);
        const optionsShuffled = shuffleArray(options);

        this.setState({
            totalRounds: placesShuffled.length,
            nextRound: round,

            allPlaces: allPlaces,
            stagePlaces: placesShuffled,
            nextPlace: place,
            featuredPlaces: featuredFiltered,
            nextPlaceName: placeDomID,

            roundOptions: optionsShuffled,
            showTimerPanelSelect: true,
            showTimerPanelTimer: true,

            restartMission: false
        });

        //console.log("multilevel  stage initialized: ", placeDomID);
    }

    initializeSingleGameRestart = () => {

        let bonus = this.props.roundIntervalSeconds;
        let pointMaxSimple = this.props.rightCountForBonusPointsMaxSimple;
        let pointMaxHard = this.props.rightCountForBonusPointsMaxHard;
        let liveMaxSimple = this.props.rightCountForBonusLiveMaxSimple;
        let liveMaxHard = this.props.rightCountForBonusLiveMaxHard;

        if (this.props.difficulty === 'Hard' ) {
            bonus = this.props.hardBonusPoint;
        }

        if (this.props.gameStage === 'World' || this.props.levelStage === 'World') {
            pointMaxSimple = this.props.rightCountForBonusPointsWorldMaxSimple;
            pointMaxHard = this.props.rightCountForBonusPointsWorldMaxHard;
            liveMaxSimple = this.props.rightCountForBonusLiveWorldMaxSimple;
            liveMaxHard = this.props.rightCountForBonusLiveWorldMaxHard;
        }
        
        this.setState({
            totalRounds: 0,
            nextRound: 0,

            allPlaces: [],
            stagePlaces: [],
            nextPlace: {
                name: "",
                domID: "",
                capital: "",
                flag: false,
                emblem: false,
                currency: "",
                territory: false,
                sovereignState: null,
                commonLanguages: [],
                geographicFeatures: {
                elevation: "",
                forest: "",
                desert: "",
                waters: ""
                },
                continent: "",
                stages: [],
                callingCode: "",
                touristAttractions: []
            },
            featuredPlaces: [], 
            nextPlaceName: '',
            
            roundOptions: [],
            wrongRoundChoices: [],
            rightRoundChoice: '',
            rightChoiceCount: 0,
            rightUserOption: false,
            clickedOption: null,

            simpleBonusPoint: bonus,
            rightCountForBonusPoints: 0,
            displayedBonusPoint: 0,
            rightCountForBonusPointsMaxSimple: pointMaxSimple,
            rightCountForBonusPointsMaxHard: pointMaxHard,
            rightCountForBonusLive: 0,
            rightCountForBonusLiveMaxSimple: liveMaxSimple,
            rightCountForBonusLiveMaxHard: liveMaxHard,
            showBonusPoint: false,
            showBonusLive: false,

            showHints: false,
            showUserRanking: false,
            showTimerPanelSelect: false,
            showTimerPanelTimer: false,

            totalScore: 0,
            roundScore: 0,
            levelScore: 0,
            scorePerRound: 1000,
            displayedScorePerRound: "+1000",
            simpleWrongChoiceLoss: 500,
            simpleDisplayedWrongChoiceLoss: "-500",
            hardWrongChoiceLoss: 1000,
            hardDisplayedWrongChoiceLoss: "-1,000",
            displayedRoundScore: "0",
            isRoundScoreLoss: false,

            simpleSecondsPerRound: 12,
            hardSecondsPerRound: 8,
            roundTimerWarningSecond: 4,

            roundOverReason: null,
            isRoundInterval: false,
            roundIntervalSeconds: 2,

            hasLive1: true,
            hasLive2: true,
            hasLive3: true,
            hasLive4: true,

            gamePaused: false,
            showCancelGame: false,
            showRestartGame: false,
            restartMission: true,

            showBonusMeter: true,

            gameEndReport: null,
            gameOver: false
        }, () => {this.initializeSingleGame()});
    }

    roundIntervalEnds = () => {
        // console.log('round interval ends');
        if (this.state.gameOver === true) {
            if (this.props.gameType === 'Single') {
                this.props.onSingleGameOver(
                    this.state.totalRounds,
                    this.state.nextRound,
                    this.state.totalScore, 
                    this.state.gameEndReport, 
                    this.props.gameStage, 
                    this.props.difficulty
                );
            } else if (this.props.gameType === 'Multilevel') {

                if ((this.props.level === this.props.shuffledStages.length) || (this.props.difficulty === 'Hard' && this.state.hasLive1 === false)) {
                    let totalRoundsPlayed = this.props.totalMultilevelRounds + this.state.totalRounds;
                    let completedRounds = this.props.completedMultilevelRounds + this.state.nextRound;
                    let levelScore = this.state.totalScore;
                    let totalScore = this.props.totalScore + this.state.totalScore;

                    if (this.props.difficulty === 'Hard' && this.state.hasLive1 === false) {
                        let allPlaces = Places;
                        let allStages = this.props.shuffledStages;
                        let allRoundsCount = 0;

                        for (var i = 0; i < allStages.length; i++) {
                            let stageName = allStages[i];
                            let roundCount = allPlaces.filter(place => place.stages.indexOf(stageName) > -1).length;
                            allRoundsCount = allRoundsCount + roundCount;
                        }

                        totalRoundsPlayed = allRoundsCount;
                    }
                    
                    this.props.onMultilevelGameOver(                  
                        totalRoundsPlayed,
                        levelScore,
                        completedRounds,
                        totalScore, 
                        this.state.gameEndReport,
                        this.props.difficulty
                    );
                } else {
                    let levelRounds = this.state.totalRounds;
                    let completedLevelRounds = this.state.nextRound;
                    let totalRoundsPlayed = this.props.totalMultilevelRounds + this.state.totalRounds;
                    let completedRounds = this.props.completedMultilevelRounds + this.state.nextRound;
                    let levelScore = this.state.totalScore;
                    let totalScore = this.props.totalScore + this.state.totalScore;
                   
                    let lifeCount = 0;

                    if (this.state.hasLive1) {
                        lifeCount = lifeCount + 1
                    }

                    if (this.state.hasLive2) {
                        lifeCount = lifeCount + 1
                    }

                    if (this.state.hasLive3) {
                        lifeCount = lifeCount + 1
                    }

                    if (this.state.hasLive4) {
                        lifeCount = lifeCount + 1
                    }

                    // console.log('total rounds: ', this.props.totalMultilevelRounds, ' + ', this.state.totalRounds, ' = ', totalRoundsPlayed );
                    // console.log('total rounds completed: ', this.props.completedMultilevelRounds, ' + ', this.state.nextRound, ' = ', completedRounds );
                    // console.log('total score: ', this.props.totalScore, ' + ', this.state.totalScore, ' = ', totalScore );
                    // console.log('life count: ', lifeCount);


                    this.props.onLevelOver(
                        levelRounds,
                        completedLevelRounds,
                        lifeCount,
                        totalRoundsPlayed,
                        levelScore,
                        completedRounds,
                        totalScore
                    );
                }
                
            }
            
        } else {
            this.setState({ 
                isRoundInterval: false, 
                roundOverReason: null,
                showBonusMeter: true               
            });
            this.props.onPlayerRoundOver();
            this.initializeNextRound();
        }
    }

    initializeNextRound = () => {
        if (this.state.nextRound === this.state.totalRounds || this.state.hasLive1 === false) {
            // console.log('GAME OVER!!!!!!!!');
            this.setState({ gameOver: true });
        } else {
            if (this.props.audioOn) {
                playNewRoundSound();
            }

            const round = this.state.nextRound + 1;
            const lastPlace = this.state.nextPlaceName;

            const allPlaces = this.state.allPlaces.filter(place => place.domID !== lastPlace);
            const stagePlaces = this.state.stagePlaces.filter(place => place.domID !== lastPlace);

            const place = stagePlaces[0];
            const placeDomID = place.domID;
            const featuredFiltered = allPlaces.filter(place => place.domID !== placeDomID);
            const options = featuredFiltered.slice(0, 3);
            options.push(place);
            const optionsShuffled = shuffleArray(options);


            this.setState({
                nextRound: round,
                allPlaces: allPlaces,
                stagePlaces: stagePlaces,
                nextPlace: place,
                featuredPlaces: featuredFiltered,
                nextPlaceName: placeDomID,

                roundOptions: optionsShuffled,
                wrongRoundChoices: [],
                rightRoundChoice: '',
                rightUserOption: false,

                showHints: false,
                showUserRanking: false,
                showBonusLive: false,
                showBonusPoint: false,
                showTimerPanelSelect: true,
                showTimerPanelTimer: true,
            });
            // console.log('next round score:', this.state.totalScore, "round: " + this.state.nextRound);
            //console.log('next round target', placeDomID);
        }
    }

    cancelMission = () => {
        // console.log('stop game?');
        if (this.props.audioOn) {
            playNavSound();
        }
        this.setState({ showCancelGame: true, gamePaused: true });
    }

    abortCancelMission = () => {
        this.setState({ showCancelGame: false, gamePaused: false });
        if (this.props.audioOn) {
            playButtonSound();
        }
    }

    confirmCancelMission = () => {
        if (this.props.audioOn) {
            playButtonSound();
        }
        this.props.router.navigate('/');
    }

    pauseGame = () => {
        // console.log('pause game');
        this.setState({ gamePaused: true});
    }

    unPauseGame = () => {
        // console.log('unpause game');
        this.setState({ gamePaused: false});
    }

    restartMission = () => {
        // console.log('restart game?');
        if (this.props.audioOn) {
            playNavSound();
        }
        this.setState({ showRestartGame: true, gamePaused: true });
    }

    abortRestartMission = () => {
        if (this.props.audioOn) {
            playButtonSound();
        }
        this.setState({ showRestartGame: false, gamePaused: false });
    }

    confirmRestartMission = () => {
        if (this.props.audioOn) {
            playButtonSound();
        }
        this.props.onPlayerRoundOver();
        this.initializeSingleGameRestart();
    }

    showHintsClicked = () => {
        if (this.props.audioOn) {
            playNavSound();
        }

        this.setState((prevState) => {
            return {
                showHints: !prevState.showHints
            }
        });
    }

    showRankingClicked = () => {
        if (this.props.audioOn) {
            playNavSound();
        }

        this.setState((prevState) => {
            return {
                showUserRanking: !prevState.showUserRanking
            }
        });
    }

    placeOptionClicked = (domID) => {

        let isInWrongChoices = this.state.wrongRoundChoices.find(place => place === domID);
        // console.log(isInWrongChoices);

        if (domID === this.state.clickedOption || this.state.isRoundInterval || isInWrongChoices) {
            return;
        } else {
            if (domID === this.state.nextPlaceName) {
                
                this.setState({
                    rightRoundChoice: domID, 
                    rightUserOption: true, 
                    clickedOption: domID,
                    isRoundScoreLoss: false,
                });

                // console.log(domID);
            } else if (domID !== this.state.nextPlaceName) {

                if (this.props.audioOn) {
                    //console.log("Wrong Choice!");
                    playWrongChoiceSound();
                }
                
                let wrongChoices = this.state.wrongRoundChoices
                wrongChoices.push(domID);

                let totalScore = this.state.totalScore;
                let scoreLoss = this.props.simpleWrongChoiceLoss;
                let displayScore = "-" + this.props.simpleWrongChoiceLoss.toString();
                let newTotalScore = this.state.totalScore - scoreLoss;

                if (this.props.difficulty === 'Hard') {
                    scoreLoss = this.props.hardWrongChoiceLoss;
                    displayScore = "-" + this.props.hardWrongChoiceLoss.toString();
                    newTotalScore = this.state.totalScore - scoreLoss;
                }

                if (this.state.rightChoiceCount === 0 && totalScore === 0 ) {
                    // console.log('Run WrongChoice Routine -- rightChoiceCount == 0, totalScore == 0');

                    let live4 = this.state.hasLive4;
                    let live3 = this.state.hasLive3;
                    let live2 = this.state.hasLive2;
                    let live1 = this.state.hasLive1;
                    // let isGameOver = this.state.gameOver;

                    if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                        // isGameOver = true;
                    }

                    this.setState({ 
                        roundScore: scoreLoss,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        rightCountForBonusPoints: 0,
                        rightCountForBonusLive: 0,
                        showBonusLive: false,
                        showBonusPoint: false,
                        // gameOver: isGameOver,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });

                } else if (this.state.rightChoiceCount >= 1 && newTotalScore > 0) {
                    // console.log('Run WrongChoice Routine -- rightChoiceCount >= 1, totalScore > 0');
                    let live4 = this.state.hasLive4;
                    let live3 = this.state.hasLive3;
                    let live2 = this.state.hasLive2;
                    let live1 = this.state.hasLive1;
                    // let isGameOver = this.state.gameOver;

                    if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                        // isGameOver = true;
                    }

                    this.setState({ 
                        roundScore: scoreLoss,
                        totalScore: newTotalScore,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        rightCountForBonusPoints: 0,
                        rightCountForBonusLive: 0,
                        showBonusLive: false,
                        showBonusPoint: false,
                        // gameOver: isGameOver,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });
                } else if (this.state.rightChoiceCount >= 1 && newTotalScore <= 0) {

                    //console.log('Run WrongChoice Routine -- rightChoiceCount >= 1, newtotalScore <= 0', totalScore, newTotalScore);

                    let live4 = false;
                    let live3 = false;
                    let live2 = false;
                    let live1 = false;
                    
                    /* if (this.state.hasLive4 === true) {
                        live4 = false
                    } else if (this.state.hasLive3 === true) {
                        live3 = false
                    } else if (this.state.hasLive2 === true) {
                        live2 = false
                    } else if (this.state.hasLive1 === true) {
                        live1 = false;
                    } */

                    this.setState({
                        roundScore: scoreLoss,
                        totalScore: newTotalScore,
                        displayedRoundScore: displayScore,
                        isRoundScoreLoss: true,
                        hasLive1: live1,
                        hasLive2: live2,
                        hasLive3: live3,
                        hasLive4: live4,
                        rightCountForBonusPoints: 0,
                        rightCountForBonusLive: 0,
                        showBonusLive: false,
                        showBonusPoint: false,
                        wrongRoundChoices: wrongChoices, 
                        rightUserOption: false, 
                        clickedOption: domID
                    });
                }
            }
        }
    }
    
    render () {

        let playerStage;
        let currentUserRank = 'Visitor';
        let avatarType = 'Mark';

        if (this.props.user != null) {
            currentUserRank = this.props.user.rank;
            avatarType = this.props.user.avatarType;
            //console.log(avatarType);
        }

        let secondsPerRound = this.props.simpleSecondsPerRound;

        if (this.props.difficulty === "Hard") {
            secondsPerRound = this.props.hardSecondsPerRound
        }


        if (this.props.gameStage === 'Southern Africa' || this.props.levelStage === 'Southern Africa') {
            playerStage = 
            <SouthernAfrica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Central and South Asia' || this.props.levelStage === 'Central and South Asia') {
            playerStage = 
            <CSAsia 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Southern Europe' || this.props.levelStage === 'Southern Europe') {
            playerStage = 
            <SouthernEurope 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'The Caribbean Islands' || this.props.levelStage === 'The Caribbean Islands') {
            playerStage = 
            <Caribbean 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'West and Central Africa' || this.props.levelStage === 'West and Central Africa') {
            playerStage = 
            <WCAfrica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'East Africa and Middle East Asia' || this.props.levelStage === 'East Africa and Middle East Asia') {
            playerStage = 
            <EAfricaMEAsia 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Southeast Asia and Oceania' || this.props.levelStage === 'Southeast Asia and Oceania') {
            playerStage = 
            <SEAsiaOceania 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'West Indies and West Africa' || this.props.levelStage === 'West Indies and West Africa') {
            playerStage = 
            <WIndiesWAfrica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Africa' || this.props.levelStage === 'Africa') {
            playerStage = 
            <Africa 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Asia' || this.props.levelStage === 'Asia') {
            playerStage = 
            <Asia 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Europe' || this.props.levelStage === 'Europe') {
            playerStage = 
            <Europe 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'North America' || this.props.levelStage === 'North America') {
            playerStage = 
            <NorthAmerica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'Oceania' || this.props.levelStage === 'Oceania') {
            playerStage = 
            <Oceania 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'South America' || this.props.levelStage === 'South America') {
            playerStage = 
            <SouthAmerica 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        } else if (this.props.gameStage === 'World' || this.props.levelStage === 'World') {
            playerStage = 
            <World 
                nextPlace={this.state.nextPlaceName}
                isRightOption={this.state.rightUserOption}
                nextRound={this.state.nextRound}
                restartMission={this.state.restartMission}
            />
        };

        let printedScore = numberWithCommas(this.state.totalScore);

        let options =
        this.state.roundOptions.map((place, i) => (
            <Option 
                key={i}
                placeDomId={place.domID}
                placeClicked={() => this.placeOptionClicked(place.domID)}
                wrongChoices={this.state.wrongRoundChoices}
                rightChoice={this.state.rightRoundChoice}
            />
        ))

        return(
            <div className={styles.player}>
                <div className={styles.stage}>
                    <div className={styles.map}> 
                        {playerStage}
                    </div>
                    <div className={styles.hud}> 
                        <div className={styles.toolBar}>
                            <div className={styles.leftTools}>
                                <div> 
                                    <button onClick={this.cancelMission}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                            <path d="M70 55H20V5h50v50zm0-50L20 55m0-50l50 50"/>
                                        </svg>
                                    </button>
                                </div>
                                <div> 
                                    {this.props.gameType === 'Single' ?
                                        <button onClick={this.restartMission}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                                                <path d="M18.995 40.608V5h52.01v7.325m0 7.067V55h-52.01v-7.325M7.963 30l11.032 10.607L30.028 30m52.009.001L71.005 19.395 59.972 30.001"/>
                                            </svg>
                                        </button>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                            <div className={styles.rightTools}>
                                <div/>
                                <div> 
                                    <div className={styles.avatar}>
                                        <Avatar 
                                            userAvatar={avatarType}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.propertiesBar}>
                            <div className={styles.hints}>
                                <HintBoard
                                    place={this.state.nextPlace}
                                    showHints={this.state.showHints}
                                    difficulty={this.props.difficulty}
                                    showHintsClicked={this.showHintsClicked}
                                />
                            </div>
                            <div className={styles.playerRoundIntervalBoard}>
                                { this.state.isRoundInterval ?
                                    <>
                                        <IntervalBoard 
                                            roundOverReason={this.state.roundOverReason}
                                            showBonusPoint={this.state.showBonusPoint}
                                            showBonusLive={this.state.showBonusLive}
                                            displayedBonusPoint={this.state.displayedBonusPoint}
                                        />
                                        <div className={styles.intervalBoardTime}>
                                            <Timer 
                                                    seconds={this.props.roundIntervalSeconds}
                                                    onRoundIntervalTimerEnds={this.roundIntervalEnds}
                                                    timerType='roundIntervalTimer'
                                                    invisible
                                            />
                                        </div>
                                    </>
                                    :
                                    null
                                }
                                { this.state.showBonusMeter ?
                                    <BonusMeter 
                                        pointCount={this.state.rightCountForBonusPoints}
                                        pointCountMaxSimple={this.props.rightCountForBonusPointsMaxSimple}
                                        pointCountMaxHard={this.props.rightCountForBonusPointsMaxHard}
                                        liveCount={this.state.rightCountForBonusLive}
                                        liveCountMaxSimple={this.props.rightCountForBonusLiveMaxSimple}
                                        liveCountMaxHard={this.props.rightCountForBonusLiveMaxHard}
                                        difficulty={this.props.difficulty}
                                    />
                                    :
                                    null
                                }
                            </div>
                            <div className={styles.ranking}>
                                <RankBoard 
                                    userRank={currentUserRank}
                                    showUserRanking={this.state.showUserRanking}
                                    showRankingClicked={this.showRankingClicked}
                                />
                            </div>
                        </div>
                    </div>               
                </div>
                <div className={styles.particulars}>
                    <div className={styles.stageId}>
                            {this.props.gameType === 'Single' ? <div>{this.props.gameStage}<h5>{"[" + this.props.difficulty + "]"}</h5></div> : null}
                        {this.props.gameType === 'Multilevel' ? <div><span>{'Level: ' + this.props.level}</span>{this.props.levelStage}<h5>{"[" + this.props.difficulty + "]"}</h5></div> : null}
                    </div>
                    <div className={styles.score}>
                        <div>
                            <h3>SCORE:</h3>
                            { this.state.totalScore < 0 ? 
                                <span className={styles.negativeScore}>{printedScore}</span> 
                                : 
                                <span>{printedScore}</span>}
                        </div>                       
                    </div>
                </div>
                <div className={styles.activity}>
                    <div className={styles.timerPanel}>
                        <TimerPanel 
                            timerElapsed={this.props.roundTimerElapsed}
                            gameType={this.props.gameType}
                            rightUserOption={this.state.rightUserOption}
                            roundScore={this.state.displayedRoundScore}
                            timerAlmostUp={this.props.timerAlmostUp}
                            showSelect={this.state.showTimerPanelSelect}
                            showTimer={this.state.showTimerPanelTimer}
                            scoreLoss={this.state.isRoundScoreLoss}
                            secondsPerRound={secondsPerRound}
                            warningSecond={this.props.roundTimerWarningSecond}
                            gamePaused={this.state.gamePaused}
                        />
                    </div>
                    <div className={styles.optionsPanel}>
                        {options}
                    </div>
                    <div className={styles.roundsPanel}>
                        <RoundsPanel
                            live1={this.state.hasLive1}
                            live2={this.state.hasLive2}
                            live3={this.state.hasLive3}
                            live4={this.state.hasLive4}
                            round={this.state.nextRound}
                            totalRounds={this.state.totalRounds}
                        />
                    </div>
                </div>
                { this.state.showCancelGame ?
                    <Dialogue 
                        cancelMission
                        onAbortCancelMission={this.abortCancelMission}
                        onConfirmCancelMission={this.confirmCancelMission}
                    />
                    :
                    null
                }
                { this.state.showRestartGame ?
                    <Dialogue 
                        restartMission
                        onAbortRestartMission={this.abortRestartMission}
                        onConfirmRestartMission={this.confirmRestartMission}
                    />
                    :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //FROM GAME GLOBAL STATE
        //play parameters
        scorePerRound: state.game.playParams.scorePerRound,
        simpleWrongChoiceLoss: state.game.playParams.simpleWrongChoiceLoss,
        hardWrongChoiceLoss: state.game.playParams.hardWrongChoiceLoss,
        simpleSecondsPerRound: state.game.playParams.simpleSecondsPerRound,
        hardSecondsPerRound: state.game.playParams.hardSecondsPerRound,
        roundTimerWarningSecond: state.game.playParams.roundTimerWarningSecond,
        roundIntervalSeconds: state.game.playParams.roundIntervalSeconds,
        simpleBonusPoint: state.game.playParams.simpleBonusPoint,
        rightCountForBonusPointsMaxSimple: state.game.playParams.rightCountForBonusPointsMaxSimple,
        rightCountForBonusPointsMaxHard: state.game.playParams.rightCountForBonusPointsMaxHard,
        rightCountForBonusLiveMaxSimple: state.game.playParams.rightCountForBonusLiveMaxSimple,
        rightCountForBonusLiveMaxHard: state.game.playParams.rightCountForBonusLiveMaxHard,
        hardBonusPoint: state.game.playParams.hardBonusPoint,
        rightCountForBonusPointsWorldMaxSimple: state.game.playParams.rightCountForBonusPointsWorldMaxSimple,
        rightCountForBonusPointsWorldMaxHard: state.game.playParams.rightCountForBonusPointsWorldMaxHard,
        rightCountForBonusLiveWorldMaxSimple: state.game.playParams.rightCountForBonusLiveWorldMaxSimple,
        rightCountForBonusLiveWorldMaxHard: state.game.playParams.rightCountForBonusLiveWorldMaxHard,

        gameType: state.game.gameData.type,
        gameStage: state.game.gameData.stage,
        difficulty: state.game.gameData.difficulty, 
        roundTimerElapsed: state.game.roundTimerElapsed,
        timerAlmostUp: state.game.timerAlmostUp,
        levelStage: state.game.levelStage,
        level: state.game.level,
        levelScore: state.game.levelScore,
        lifeCount: state.game.lifeCount,
        totalScore: state.game.totalGameScore,
        totalMultilevelRounds: state.game.totalMultilevelRounds,
        completedMultilevelRounds: state.game.completedMultilevelRounds,
        shuffledStages: state.game.shuffledStages,
        screenTrackerActive: state.game.screenTrackerActive,

        // FROM AUTH GLOBAL STATE
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        userRank: "Place Marshal",

        audioOn: state.game.audioOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerRoundOver: () => dispatch(actions.playerRoundOver()),
        onLevelOver: (levelRounds, completedLevelRounds, lifeCount, totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore) => dispatch(actions.levelOver(levelRounds, completedLevelRounds, lifeCount, totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore)),
        onMultilevelGameOver: (totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore, gameEndReport, playedDifficulty) => dispatch(actions.multilevelGameOver(totalRoundsPlayed, levelScore, totalRoundsCompleted, totalScore, gameEndReport, playedDifficulty)),
        onSingleGameOver: (totalRounds, completedRounds, totalScore, gameEndReport, playedStage, playedDifficulty) => dispatch(actions.singleGameOver(totalRounds, completedRounds, totalScore, gameEndReport, playedStage, playedDifficulty))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Player));