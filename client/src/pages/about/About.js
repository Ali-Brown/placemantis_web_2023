
import React, {useState, useEffect} from 'react';
import styles from './about.module.scss';
import Developer from './aboutParts/developer';
import GamePlay from './aboutParts/gamePlay';
import Architecture from './aboutParts/architecture';
import Stack from './aboutParts/stack';
import Pending from './aboutParts/pending';
import ThreeD from './aboutParts/threeD';

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



    if (currentView === 'Gameplay') {
        pageContent = 
        <GamePlay 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
        />
    }


    if (currentView === 'Architecture') {
        pageContent =
        <Architecture 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
        />
    }

    if (currentView === 'Stack') {
        pageContent =
        <Stack 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
        />
    }

    if (currentView === 'Pending') {
        pageContent =
        <Pending 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
        />
    }

    if (currentView === 'Placemantis3D') {
        pageContent =
        <ThreeD 
            goBackSelected={optionGoBack}
            continueSelected={optionContinue}
            isLastPage={true}
        />
    }
    
    return(
        <div className={styles.about}>
            {pageContent}
        </div>
    )  
}

export default About;