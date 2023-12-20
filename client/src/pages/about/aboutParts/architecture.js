import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const Architecture = props => {

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
                        <span>App</span>
                        <span>Architecture</span>
                    </div>                   
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='aboutArchitectureCol1'>
                    <img src="/images/about/appArchitecture.svg" alt="App Architecture"/>
                </div>
            </div> 
        </div>
    )
}

export default Architecture;