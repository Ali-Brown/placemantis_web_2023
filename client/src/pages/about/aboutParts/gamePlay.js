import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const Gameplay = props => {

    useEffect(() => {
        /* let positionProp1 = {
            animatedClass: '.homeSelectType button',
            translateX: [-30, 0],
            translateY: [0, 0],
            delayPerChild: 300
        }

        staggerPositionParts(positionProp1); */
    });

    return(
        <div className='aboutPage'>
            <div className='aboutPageHeader'>
               <AboutHeader 
                    goBack={props.goBackSelected}
                    proceed={props.continueSelected}
               >
                    <div>
                        <span>Game</span>
                        <span>Play</span>
                    </div>                   
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='aboutGameplayContainer'>
                    <div className='aboutGameplayCol1'>
                        <h3>
                            Game Goal
                        </h3>
                        <p>
                            <img src="/images/about/mantis-head.svg" alt="head icon"/> {" "}
                            Correctly guess all locations {" "} 
                            <img src="/images/about/place-location-icon.png" alt="locations icon"/> 
                            {" "}on stage map 
                            without using all game lives {" "}
                            <img src="/images/about/live-icon.svg" alt="live icon"/>
                            <img src="/images/about/live-icon.svg" alt="live icon"/>
                            <img src="/images/about/live-icon.svg" alt="live icon"/>
                            <img src="/images/about/live-icon.svg" alt="live icon"/>. 
                            Watch out! Each location guess is timed {" "}
                            <img src="/images/about/timer-icon.png" alt="timer icon"/>
                            {" "} and live is lost not only for
                            wrong guesses but also for round time elapses.
                        </p>
                    </div>
                    <div className='aboutGameplayCol2'>
                        <h3>
                            Game Options  
                        </h3>
                        <p>
                            <img src="/images/about/mantis-head.svg" alt="head icon"/> {" "}
                            Play single game {" "}
                            <img src="/images/about/single-game-icon.png" alt="single icon"/>
                            {" "} with multiple rounds on different stages
                            from four loaction scopes: Global, Continental, Sub-Continental 
                            and bi-continental. Or go multilevel {" "}
                            <img src="/images/about/multi-game-icon.png" alt="multi icon"/>
                            {" "} through 15 different stages 
                            from different location scopes.
                        </p>
                    </div>
                    <div className='aboutGameplayCol3'>
                        <h3>
                            Game Ranking
                        </h3>
                        <p>
                            <img src="/images/about/mantis-head.svg" alt="head icon"/> {" "}
                            Get special missions to advance your ranking from {" "}
                            <img src="/images/about/jr-ranger-icon.svg" alt="medallion"/>{" "}
                            Junior-Ranger to {" "}
                            <img src="/images/about/sr-ranger-icon.svg" alt="medallion"/>{" "}
                            Senior-Ranger to {" "}
                            <img src="/images/about/captain-icon.svg" alt="medallion"/>{" "}
                            Captain to {" "}
                            <img src="/images/about/commodore-icon.svg" alt="medallion"/>{" "}
                            Comodore then finally {" "}
                            <img src="/images/about/marshal-icon.svg" alt="medallion"/>{" "}
                            Place-Marshal.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Gameplay;