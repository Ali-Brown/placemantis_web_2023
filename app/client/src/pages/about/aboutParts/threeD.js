import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const ThreeD = props => {

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
                    goHome={props.goHomeSelected}
                    isLastPage={props.isLastPage}
               >
                    <div>
                        <span>3D</span>
                        <span>Prototype</span>
                    </div>                   
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='about3DCol1'>
                    <img src="/images/about/3dPrototypes.png" alt="3d prototype"/>
                </div>
            </div> 
        </div>
    )
}

export default ThreeD;