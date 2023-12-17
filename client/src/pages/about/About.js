
import React, {useState, useEffect} from 'react';
import styles from './about.module.scss';
import Developer from './aboutParts/developer';
//import GamePlay from './aboutParts/gamePlay';
//import SelectStage from './homeSelect/SelectStage';
//import SelectDifficulty from './homeSelect/SelectDifficulty';
//import ResumeMission from './homeSelect/ResumeMission';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { useNavigate } from "react-router-dom";


const About = props => {
    const [currentView, setCurrentView] = useState('Developer');
    const [previousView, setPreviousView] = useState('');
    
    
    
    

    const history = useNavigate();



    useEffect(() => {

    }, []);
    

    const optionGoBack = () => {
        if (currentView === 'Placemantis3D' && previousView === 'Pending') {
            setCurrentView('Pending');
            setPreviousView('Stack');
        } else if (currentView === 'Pending' && previousView === 'Stack') {
            setCurrentView('Stack');
            setPreviousView('Architecture');
        } else if (currentView === 'Stack' && previousView === 'Architecture') {
            setCurrentView('Architecture');
            setPreviousView('Gameplay');
        } else if (currentView === 'Architecture' && previousView === 'Gameplay') {
            setCurrentView('Gameplay');
            setPreviousView('Developer');
        } else if (currentView === 'Gameplay' && previousView === 'Developer') {
            setCurrentView('Developer');
            setPreviousView('');
        } else if (currentView === 'Developer' && previousView === '') {
            history('/');
        }
        
    }

    const optionContinue = () => {
        if (currentView === 'Developer' && previousView === '') {
            setCurrentView('Gameplay');
            setPreviousView('Developer');
        } else if (currentView === 'Gameplay' && previousView === 'Developer') {
            setCurrentView('Architecture');
            setPreviousView('Gameplay');
        } else if (currentView === 'Architecture' && previousView === 'Gameplay') {
            setCurrentView('Stack');
            setPreviousView('Architecture');
        } else if (currentView === 'Stack' && previousView === 'Architecture') {
            setCurrentView('Pending');
            setPreviousView('Stack');
        } else if (currentView === 'Pending' && previousView === 'Stack') {
            setCurrentView('Placemantis3D');
            setPreviousView('Pending');
        } 
    }


    let pageContent = 
    <Developer 
        goBackSelected={optionGoBack}
        continueSelected={optionContinue}
    />;



    /* if (currentView === 'Gameplay') {
        pageContent = 
        <GamePlay 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
        />
    } */
    /*

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
    } */
    
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

export default connect(mapStateToProps, mapDispatchToProps)(About);