import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const Developer = props => {

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
                        <span>Developer</span>
                        <span>and</span>
                        <span>Designer</span>
                    </div>              
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='aboutDeveloperCol1' />
                <div className='aboutDeveloperCol2'>
                    <div className='developerBio'>
                        <div className='developerImgContainer'>
                            <img src="/images/about/developerImg.png" alt="developer"/>
                            <h3>Babatunde Ali-Brown</h3>
                            <div>Undergraduate-Student(senior, online) @ SNHU</div>
                            <div>Computer-Science 3.7GPA(Dec. 2023)</div>
                        </div>
                        <div className='developerContacts'>
                           <div>
                                <img src="/images/about/phone-icon.png" alt="developer"/>
                                <span>1-304-953-0173</span>
                            </div>
                            <div>
                                <img src="/images/about/email-icon.png" alt="developer"/>
                                <span>alibrown8319@gmail.com</span>
                            </div>
                            <div>
                                <img src="/images/about/github-icon.png" alt="developer"/>
                                <span>https://github.com/Ali-Brown/placemantis_web_2023/tree/master</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aboutDeveloperCol3'/>
            </div> 
        </div>
    )
}

export default Developer;