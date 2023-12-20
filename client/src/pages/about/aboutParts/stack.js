import React, {useEffect} from 'react';
import './aboutParts.scss';
import AboutHeader from '../../../components/header/aboutHeader';
//import {staggerPositionParts} from '../../../anime/position';

const Stack = props => {

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
                        <span>Tech</span>
                        <span>Stack</span>
                    </div>                   
               </AboutHeader>
            </div>
            <div className='aboutPartBody'>
                <div className='aboutStackContainer'>
                    <div className='aboutStackCol1'>
                        <h3>
                            Back-End
                        </h3>
                        <div>
                            <p>
                                <span>Express: </span>
                                Nodejs web framework
                            </p>
                            <p>
                                <span>Mongodb: </span>
                                Nodejs mongoDB driver
                            </p>
                            <p>
                                <span>Body-parser: </span>
                                Node.js body parsing middleware
                            </p>
                        </div>
                    </div>
                    <div className='aboutStackCol2'>
                        <h3>
                            Front-End
                        </h3>
                        <div>
                            <p>
                                <span>React: </span>
                                Javascript library
                            </p>
                            <p>
                                <span>Redux: </span>
                                State container for Javascript apps
                            </p>
                            <p>
                                <span>Axios: </span>
                                Http client for browser and Nodejs
                            </p>
                            <p>
                                <span>Animejs: </span>
                                Javascript animation engine
                            </p>
                            <p>
                                <span>Howler: </span>
                                Javascript audio library
                            </p>
                        </div>
                    </div>
                    <div className='aboutStackCol3'>
                        <h3>
                            Dev. Dependencies
                        </h3>
                        <div>
                            <p>
                                <span>Concurrency</span>,
                                {" "}<span>Eslint</span>,
                                {" "}<span>Nodemon</span>,
                                {" "}<span>Prettier</span>,
                                {" "}<span>Sass</span>,
                                {" "}<span>Git</span> 
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Stack;