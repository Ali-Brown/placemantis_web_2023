
import React, {useState, useEffect} from 'react';
import styles from './home.module.scss';
import HomeMain from './homeMain/HomeMain';
import SelectType from './homeSelect/SelectType';
import SelectScope from './homeSelect/SelectScope';
import SelectStage from './homeSelect/SelectStage';
import SelectDifficulty from './homeSelect/SelectDifficulty';
import ResumeMission from './homeSelect/ResumeMission';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { useNavigate } from "react-router-dom";
import {playButtonSound, playNavSound} from '../../howler/index';


const Home = props => {

    /* var sound = new Howl({
        src: ['/audio/home.wav'],
        //autoplay: true,
        loop: true,
        id: 0,
        volume: 0.5,
        onend: function() {
            //console.log('Finished!');
        }
    }); */

    const [currentView, setCurrentView] = useState('HomeMain');
    const [previousView, setPreviousView] = useState('');
    const [missionType, setMissionType] = useState('');
    const [missionScope, setMissionScope] = useState('');
    const [missionStage, setMissionStage] = useState('');
    const [missionDifficulty, setMissionDifficulty] = useState('');
    const [startOrResumeMission, setStartOrResumeMission] = useState(false);
    const [resumeSavedMission, setResumeSavedMission] = useState(false);
    //const [audioOn, toggleAudioOnOff] = useState(true);
    // savedMission state below is used for testing purpose only,
    // retrieve the value of savedMission from global state
    const [savedMission] = useState(false);

    const history = useNavigate();

    let gameData;
    if (resumeSavedMission) {
        gameData = {
            type: 'ResumeSavedGame',
            savedMission: savedMission
        }
    } else {
        gameData = {
            type: missionType,
            scope: missionScope,
            stage: missionStage,
            difficulty: missionDifficulty
        }
    }


    useEffect(() => {
        if (startOrResumeMission) {
            props.onSetGameData(gameData); 
            history('/game_play');           
        }
        // eslint-disable-next-line
    }, [startOrResumeMission]);

    const optionStartMission = () => {
        if (props.audioOn) {
            playButtonSound();
        }

        if (savedMission) {
            setCurrentView('ResumeMission');
            setPreviousView('HomeMain');
        } else {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        }       
    }
    
    const optionResume = () => {
        setResumeSavedMission(true);
        setStartOrResumeMission(true);      
    }

    const optionStartNew = () => {  
        setCurrentView('SelectType');
        setPreviousView('HomeMain');    
    }

    const optionGoBack = () => {
        if (props.audioOn) {
            playNavSound();
        }
       
        if (currentView === 'SelectType' && previousView === 'HomeMain') {
            setCurrentView('HomeMain');
            setPreviousView('');
        } else if (currentView === 'SelectScope' && previousView === 'SelectType') {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        } else if (currentView === 'SelectStage' && previousView === 'SelectScope') {
            setCurrentView('SelectScope');
            setPreviousView('SelectType');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectStage') {
            setCurrentView('SelectStage');
            setPreviousView('SelectScope');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectType') {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectScope') {
            setCurrentView('SelectScope');
            setPreviousView('SelectType');
        } else {
            setCurrentView('HomeMain');
            setPreviousView('');
        }
        
    }

    const optionSingleMission = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setCurrentView('SelectScope');
        setPreviousView('SelectType');
        setMissionType('Single');
    }

    const optionMultilevelMission = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectType');
        setMissionType('Multilevel');

    }

    const optionContinental = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionScope('Continental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');       
    }

    const optionSubcontinental = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionScope('Subcontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionBicontinental = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionScope('Bicontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionAfrica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionOceania = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Oceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionEurope = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Europe');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionNorthAmerica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('North America');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsia = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSouthAmerica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('South America');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSEurope = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Southern Europe');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSCAsia = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Central and South Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionWCAfrica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('West and Central Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionCaribbean = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('The Caribbean Islands');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSAfrica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Southern Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionIndiesAfrica = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('West Indies and West Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsiaOceania = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('Southeast Asia and Oceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAfricaAsia = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionStage('East Africa and Middle East Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionGlobal = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionScope('World');
        setMissionStage('World');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectScope');
    }

    const optionSimple = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionDifficulty('Simple');
        setStartOrResumeMission(true);
    }

    const optionHard = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        setMissionDifficulty('Hard');
        setStartOrResumeMission(true);
    }

    const logoutClicked = () => {
        if (props.audioOn) {
            playButtonSound();
        }
        props.onLogoutUser();
    }

    const aboutClicked = () => {
        if (props.audioOn) {
            playButtonSound();
        }
    }

    const loginClicked = () => {
        if (props.audioOn) {
            playButtonSound();
        }
    }

    const registerClicked = () => {
        if (props.audioOn) {
            playButtonSound();
        }
    }



    let pageContent = <HomeMain/>;
    let user = props.user;
    let avatarType;

    if (user != null) {
        avatarType = user.avatarType
    }

    if (currentView === 'HomeMain') {
        // setCurrentView('HomeMain');
        pageContent = 
        <HomeMain 
            /* isAuthenticated */ 
            /* audioOn */
            startMissionSelected={optionStartMission}
            //audioSelected={optionAudio}
            logoutClicked={logoutClicked}
            avatarType={avatarType}
            aboutClicked={aboutClicked}
            loginClicked={loginClicked}
            registerClicked={registerClicked}
        />
    }

    if (currentView === 'SelectType') {
        pageContent = 
        <SelectType 
            goBackSelected={optionGoBack}
            singleSelected={optionSingleMission}
            multilevelSelected={optionMultilevelMission}
        />
    }

    if (currentView === 'SelectScope') {
        pageContent =
        <SelectScope 
            goBackSelected={optionGoBack}
            continentalSelected={optionContinental}
            subcontinentalSelected={optionSubcontinental}
            bicontinentalSelected={optionBicontinental}
            globalSelected={optionGlobal}
        />
    }

    if (currentView === 'SelectStage') {       
        pageContent =
        <SelectStage 
            missionScope={missionScope}
            goBackSelected={optionGoBack}
            africaSelected={optionAfrica}
            oceaniaSelected={optionOceania}
            europeSelected={optionEurope}
            northAmericaSelected={optionNorthAmerica}
            asiaSelected={optionAsia}
            southAmericaSelected={optionSouthAmerica}
            sEuropeSelected={optionSEurope}
            scAsiaSelected={optionSCAsia}
            wcAfricaSelected={optionWCAfrica}
            caribbeanSelected={optionCaribbean}
            sAfricaSelected={optionSAfrica}
            indiesAfricaSelected={optionIndiesAfrica}
            asiaOceaniaSelected={optionAsiaOceania}
            africaAsiaSelected={optionAfricaAsia}
        />
    }

    if (currentView === 'SelectDifficulty') {
        pageContent =
        <SelectDifficulty 
            goBackSelected={optionGoBack}
            simpleSelected={optionSimple}
            hardSelected={optionHard}
        />
    }

    if (currentView === 'ResumeMission') {
        pageContent =
        <ResumeMission 
            goBackSelected={optionGoBack}
            resumeSelected={optionResume}
            startNewSelected={optionStartNew}
        />
    }
    
    return(
        <div className={styles.home}>
            {pageContent}
        </div>
    )  
}

// savedMission, isAuthenticated, and avatarType:
// will be coming in from auth global states below
const mapStateToProps = state => {
    return {
        gameData: state.game.gameData,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        audioOn: state.game.audioOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetGameData: ( gameData ) => dispatch(actions.setGameData( gameData )),
        onLogoutUser: ( gameData ) => dispatch(actions.logoutUser( gameData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);