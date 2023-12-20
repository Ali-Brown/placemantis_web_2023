import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const Pending = props => {

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
                        <span>Pending</span>
                        <span>Features</span>
                    </div>                   
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='aboutPendingCol1'/>
                <div className='aboutPendingCol2'>
                    <div className='aboutPendingCol2Container'>
                        <div>
                            <img src="/images/about/location-icon.png" alt="developer"/>
                            <span>Save/Resume multilevel mission</span>
                        </div>
                        <div>
                            <img src="/images/about/location-icon.png" alt="developer"/>
                            <span>Save/Post best stage score</span>
                        </div>
                        <div>
                            <img src="/images/about/location-icon.png" alt="developer"/>
                            <span>Ranking mission designation</span>
                        </div>
                    </div>
                </div>
                <div className='aboutPendingCol3'/>
            </div> 
        </div>
    )
}

export default Pending;