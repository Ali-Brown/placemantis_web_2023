
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


const Home = props => {
    const [currentView, setCurrentView] = useState('HomeMain');
    const [previousView, setPreviousView] = useState('');
    const [missionType, setMissionType] = useState('');
    const [missionScope, setMissionScope] = useState('');
    const [missionStage, setMissionStage] = useState('');
    const [missionDifficulty, setMissionDifficulty] = useState('');
    const [startOrResumeMission, setStartOrResumeMission] = useState(false);
    const [resumeSavedMission, setResumeSavedMission] = useState(false);
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
        if (savedMission) {
            setCurrentView('ResumeMission');
            setPreviousView('HomeMain');
        } else {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        }       
    }

    const optionAudio = () => {
        // Launch a global action to alter audioOn state
        // changeAudioPreference(props.audioOn)
        console.log('audio button clicked');     
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
        setCurrentView('SelectScope');
        setPreviousView('SelectType');
        setMissionType('Single');
    }

    const optionMultilevelMission = () => {
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectType');
        setMissionType('Multilevel');

    }

    const optionContinental = () => {
        setMissionScope('Continental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');       
    }

    const optionSubcontinental = () => {
        setMissionScope('Subcontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionBicontinental = () => {
        setMissionScope('Bicontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionAfrica = () => {
        setMissionStage('Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionOceania = () => {
        setMissionStage('Oceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionEurope = () => {
        setMissionStage('Europe');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionNorthAmerica = () => {
        setMissionStage('North America');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsia = () => {
        setMissionStage('Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSouthAmerica = () => {
        setMissionStage('South America');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSEurope = () => {
        setMissionStage('Southern Europe');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSCAsia = () => {
        setMissionStage('Central and South Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionWCAfrica = () => {
        setMissionStage('West and Central Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionCaribbean = () => {
        setMissionStage('The Caribbean Islands');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSAfrica = () => {
        setMissionStage('Southern Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionIndiesAfrica = () => {
        setMissionStage('West Indies and West Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsiaOceania = () => {
        setMissionStage('Southeast Asia and Oceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAfricaAsia = () => {
        setMissionStage('East Africa and Middle East Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionGlobal = () => {
        setMissionScope('World');
        setMissionStage('World');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectScope');
    }

    const optionSimple = () => {
        setMissionDifficulty('Simple');
        setStartOrResumeMission(true);
    }

    const optionHard = () => {
        setMissionDifficulty('Hard');
        setStartOrResumeMission(true);
    }

    const logoutClicked = () => {
        props.onLogoutUser();
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
            audioSelected={optionAudio}
            logoutClicked={logoutClicked}
            avatarType={avatarType}
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
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetGameData: ( gameData ) => dispatch(actions.setGameData( gameData )),
        onLogoutUser: ( gameData ) => dispatch(actions.logoutUser( gameData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);