import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import {numberWithCommas} from '../../../../utilities/utilities';
import {scaleElement} from '../../../../anime/scale';
import '../moderator.scss';
import DialogueButton from '../../../../components/buttons/Button';
import { useNavigate } from "react-router-dom";
import {playMissionCompleteSound} from '../../../../howler/index';


const GameOver = props => {
    const history = useNavigate();

    if (props.audioOn) {
        playMissionCompleteSound();
    }
    

    let totalRounds;
    let completedRounds;
    let stageName;
    let highestPossibleScore;

    if (props.playedType === 'Single') {
        stageName = props.playedStage;
        totalRounds = props.totalStageRounds;
        completedRounds = props.stageRoundsCompleted;

    } else if (props.playedType === 'Multilevel') {
        stageName = "Multilevel Mission";
        totalRounds = props.totalMultilevelRounds;
        completedRounds = props.completedMultilevelRounds;
    }

    let totalScore = props.totalGameScore;
    let missionScore = numberWithCommas(totalScore);
    let unbonusedStageScore = totalRounds * 1000;

    if (props.difficulty === 'Simple') {
        let nonBonusedScore = props.scorePerRound * totalRounds;
        let bonusedScore = Math.floor(totalRounds / props.rightCountForBonusPointsMaxSimple) * props.simpleBonusPoint; 
        highestPossibleScore = nonBonusedScore + bonusedScore;
    } else {
        let nonBonusedScore = props.scorePerRound * totalRounds;
        let bonusedScore = Math.floor(totalRounds / props.rightCountForBonusPointsMaxHard) * props.hardBonusPoint; 
        highestPossibleScore = nonBonusedScore + bonusedScore;
    }



    useEffect(() => {

        let scaleProp = {
            animatedClass: '.gameOverDialogue',
            scaleFactor: [0.75, 1],
            transformOrigin: '50% 50%'
        }
 
        scaleElement(scaleProp);

        if (completedRounds <= 0.5 * totalRounds) {
            const elem = document.querySelector('.gameOverDialogueCompletedRounds');
            elem.style.color = '#ff1a00';
        } 
    
        if (totalScore <= 0.5 * unbonusedStageScore) {
            const elem = document.querySelector('.gameOverMissionScore');
            elem.style.color = '#ff1a00';
        }

        if ((completedRounds <= 0.5 * totalRounds) || (totalScore <= 0.5 * unbonusedStageScore)) {
            const elem = document.querySelector('.gameOverDialogueTitle');
            elem.style.color = '#ff1a00';
        } 
    }, []);

    const onPlayAgain = () => {
        // console.log('play again');
        if (props.gameData.type === 'Single') {
            props.onRestartLastMission();
        } else if (props.gameData.type === 'Multilevel') {
            props.onRestartMultilevelMission();
        }
    }

    const onExit = () => {
        // console.log('exit game play');
        history('/');
    }

    return(
        <div className="gameOverDialogue">
            <div className="gameOverDialogueHead">
                <h2 className="gameOverDialogueTitle">
                    { totalRounds === completedRounds ? 
                        "Mission Completed" 
                        : 
                        "Mission Over"
                    }
                </h2> 
            </div>
            <div className="gameOverDialogueBody">
                <div className="gameOverDialogueMissionInfo">
                    <div className="gameOverDialogueStage">
                        <h3>
                            <span>
                                <span>{stageName}</span>
                                <span className="gameOverDialogueDifficulty">
                                    {"[" + props.playedDifficulty + "]"}
                                </span>
                            </span>
                        </h3>
                        {props.isAuthenticated ? 
                            null : 
                            <h4>Register to post score</h4>
                        }
                    </div>
                    <div className="gameOverDialogueRoundInfo">
                        <h4>
                           Attempted
                        </h4>
                        <div>
                            <h5>
                                Rounds:
                            </h5>
                            <div>
                                <span className="gameOverDialogueCompletedRounds">{completedRounds}</span><span>{'/' + totalRounds}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gameOverDialogueScores">
                    <div>
                        <h4>
                            {props.gameData.type === 'Single' ? "This Score" : 'Total Score'}
                        </h4>
                        <span className="gameOverMissionScore">
                            {missionScore}
                        </span>
                    </div>
                    <div>
                        <h4>
                            Your Best
                        </h4>
                        <span>
                            {props.isAuthenticated ? props.gameTypeUserBest : "N/A"}
                        </span>
                    </div>
                    <div>
                        <h4>
                            {/* this should highest possible score */}
                            {/* Overall best indicates every player's best score for stage */}
                            Score Peak
                        </h4>
                        <span>
                            {highestPossibleScore}
                        </span>
                    </div>
                </div>
                <div className="gameOverDialogueButtons">
                    <div className="gameOverDialogueButtonsWrapper">
                        <div>
                            <DialogueButton
                                // buttonClicked={props.OnPostGameScore}
                                sideEffectLoading={props.postGameScoreLoading}
                                sideEffectSuccess={props.postGameScoreSuccess}
                                sideEffectFail={props.postGameScoreFail}
                                isAuthenticated={props.isAuthenticated}
                                type="Post Score"
                                thisScore={props.totalScore}
                                userBestScore={props.gameTypeUserBest}
                                category="dailogues"
                            />
                        </div>
                        <div>
                                <DialogueButton
                                    buttonClicked={onPlayAgain}
                                    type="Play Again"
                                    category="dailogues"
                                />
                        </div>
                        <div>
                                <DialogueButton
                                    buttonClicked={onExit}
                                    type="Exit"
                                    category="dailogues"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        difficulty: state.game.gameData.difficulty,

        scorePerRound: state.game.playParams.scorePerRound,
        rightCountForBonusPointsMaxSimple: state.game.playParams.rightCountForBonusPointsMaxSimple,
        rightCountForBonusPointsMaxHard: state.game.playParams.rightCountForBonusPointsMaxHard,
        simpleBonusPoint: state.game.playParams.simpleBonusPoint,
        hardBonusPoint: state.game.playParams.hardBonusPoint,
        audioOn: state.game.audioOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onPostGameScore: () => dispatch(actions.postGameScore()),
        onRestartLastMission: () => dispatch(actions.restartLastMission()),
        onRestartMultilevelMission: () => dispatch(actions.restartMultilevelMission())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);