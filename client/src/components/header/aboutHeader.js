import React, {useEffect} from 'react';
import './aboutHeader.scss';
//import {positionX} from '../../anime/position';
import {staggerScaleParts} from '../../anime/scale';

const AboutHeader = props => {

    useEffect(() => {

        /*  const positionProp = {
                animatedClass: '.pageHeaderGoBack',
                duration: 1500,
                translateX: [-10, 0],
                loop: true
            }

        positionX(positionProp);
        */


        const scaleProp = {
            animatedClass: '.aboutHeaderHeading div span',
            scaleFactor: [0.5, 1],
            // opacity: [0, 1],
            staggerOrigin: 'first',
            transformOrigin: '50% 50%',
            delayPerChild: 100
        }

        staggerScaleParts(scaleProp);

        return() => {}
    }, []);
    

    return (
        <div className='aboutHeader'>
            <div className='aboutHeaderGoback'>
                <button className='aboutHeaderGoBackButton' onClick={props.goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                        <path fill="none" stroke="#5A24B2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M70.104 29.979H19.896M45 4.875L19.896 29.979 45 54.875"/>
                    </svg>
                </button>
            </div>
            <div className='aboutHeaderHeading'>
                {props.children}
            </div>
            {props.isLastPage ? 
            <div className='aboutHeaderNoProceed'></div> :
            <div className='aboutHeaderProceed'>
                <button className='aboutHeaderProceedButton' onClick={props.proceed}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">
                        <path className='aboutHeaderProceedButton' fill="none" stroke="#5A24B2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M70.104 29.979H19.896M45 4.875L19.896 29.979 45 54.875"/>
                    </svg>
                </button>
            </div>} 
        </div>
    )
}

export default AboutHeader;