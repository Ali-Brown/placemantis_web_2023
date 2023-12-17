import React from 'react';
import Button from '../buttons/Button';
import './dialogue.scss';

const PostAjaxDailogue = props => {

    let dailogue;
    let successsButtonText1 = props.successType1


    if (props.loading) {
        dailogue = 
            <span className='loadingIndicator'>Processing...</span>
    } else if (props.success || (props.success === false && props.formGroup === "reset")) {
        let successHeading;

        if (props.formGroup === "login") {
            successHeading = "Login Succesful";
            successsButtonText1 = "Start Mission";
        } else if (props.formGroup === "reset") {
            successHeading = "Password Reset Succesful";
            successsButtonText1 = "Login";
        }

        dailogue =
        <>
            <h3 className='postAjaxDailogueHeading'>{successHeading}</h3>
            <div className='postAjaxDailogueButtons'>
                <Button 
                    //type={props.successType1}
                    type={successsButtonText1}
                    buttonClicked={props.successButton1Clicked}
                />
                { props.hasSecondSuccessButton ?
                    <>
                        <span />
                        <Button 
                            type={props.successType2}
                            buttonClicked={props.successButton2Clicked}
                        />
                    </>
                    :
                    null
                }
            </div>
        </>
    } else if (props.fail) {
        dailogue =
        <>
            <h3 className='postAjaxDailogueHeadingFail'>{props.failHeading}</h3>
            <div className='postAjaxDailogueButtons'>
                <Button 
                    type={props.failType1}
                    buttonClicked={props.failButton1Clicked}
                />
                { props.hasSecondFailButton ?
                    <>
                        <span />
                        <Button 
                            type={props.failType2}
                            buttonClicked={props.failButton2Clicked}
                        />
                    </>
                    :
                    null
                }
            </div>
        </>
    }
    return(
        <div className='postAjaxDailogue'>
            {dailogue}
        </div>
    )
}

export default PostAjaxDailogue;

