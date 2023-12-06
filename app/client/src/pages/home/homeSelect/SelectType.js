import React, {useEffect} from 'react';
import './homeSelect.scss';
import SelectHeader from '../../../components/header/PageHeader';
import {staggerPositionParts} from '../../../anime/position';

const SelectType = props => {

    useEffect(() => {
        let positionProp1 = {
            animatedClass: '.homeSelectType button',
            translateX: [-30, 0],
            translateY: [0, 0],
            delayPerChild: 300
        }

        staggerPositionParts(positionProp1);
    });

    return(
        <div className='homeSelectType'>
            <div className='homeSelectTypeHeader'>
               <SelectHeader goBack={props.goBackSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <path opacity=".8" fill="#D3FF78" d="M1177.026 69.18c-1.481 6.44.813 12.353 2.922 18.334 2.884 8.452 5.642 17.011 9.845 24.926 5.427 10.517 18.882 28.513 32.142 16.582 12.67-11.401-1.531-28.572-9.962-37.266-6.084-6.271-12.995-11.638-19.651-17.272-1.727-1.463-13.965-10.779-15.296-5.304z"/>
                        <path fill="#5A24B2" d="M1219.383 112.1c7.006 9.13-7.154 19.997-14.159 10.864-7.007-9.129 7.153-19.995 14.159-10.864z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1174.282 167.923l1.975 4.872M1173.958 162.447l.324 5.476"/>
                        <path fill="#78B300" d="M1167.023 95.836c-1.354 0-.706 8.213-.511 9.035.578 2.742 4.274 5.216 5.864 1.673 1.354 0 .706-8.213.511-9.035-.577-2.743-4.274-5.215-5.864-1.673 0 0 .285-.633 0 0z"/>
                        <path fill="#ACFF00" d="M1168.528 95.836c-.404 2.408-.455 4.885-.342 7.32.016.364 1.885 7.449 2.685 3.388 1.041-1.157.408-5.914.344-7.32-.017-.365-1.885-7.451-2.687-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1169.699 109.573l3.771 23.798"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1169.699 109.573l3.771 23.798"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1173.958 136.457v24.093"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1173.958 136.457v24.093"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1155.604 149.061l-2.714 4.503M1156.777 143.704l-1.173 5.357"/>
                        <path fill="#78B300" d="M1166.578 78.408c-1.354 0-.706 8.213-.511 9.035.578 2.743 4.274 5.216 5.864 1.674 1.354 0 .706-8.213.512-9.035-.579-2.744-4.274-5.216-5.865-1.674 0 0 .285-.634 0 0z"/>
                        <path fill="#ACFF00" d="M1168.084 78.408c-.404 2.409-.455 4.885-.344 7.32.018.364 1.885 7.45 2.687 3.389 1.04-1.158.408-5.915.343-7.32-.017-.364-1.885-7.451-2.686-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1169.256 92.147l-7.446 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1169.256 92.147l-7.446 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1160.845 118.032l-3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1160.845 118.032l-3.769 23.797"/>
                        <path fill="#78B300" d="M1134.16 92.468c-2.788 3.406-4.134 7.309-4.181 11.623-.285 9.435 3.183.262 3.836-3.502l-.103.381c.349-.848 2.66-11.169.448-8.502-.448.548.185-.221 0 0zM1165.787 43.08c-1.16 1.847-2.024 3.872-2.826 5.893l.23-.549c-1.885 3.321-3.583 6.712-5.191 10.175-1.003 2.158-2.393 7.105-.675 9.154 3.867 4.612 7.118-3.652 8.155-6.261l-.232.551a127.935 127.935 0 004.91-9.567c.828-1.782 1.191-3.778 1.51-5.709.54-3.3-3.073-8.143-5.881-3.687-.593.942.638-1.014 0 0z"/>
                        <path fill="#ACFF00" d="M1167.309 43.593c-.931 1.959-1.67 3.996-2.445 6.02l.116-.275c-2.337 4.333-4.831 8.584-6.115 13.355-.284 1.055-1.758 6.6 1.537 4.931 1.725-.872 2.533-5.095 3.176-6.77l-.116.275c1.785-3.313 3.885-6.713 5.21-10.239.603-2.081 1.243-4.151 1.683-6.276.381-1.853-2.26-2.675-3.046-1.021-.467.982.312-.658 0 0z"/>
                        <path fill="#78B300" d="M1155.992 66.758c-8.219 3.005-14.514 8.405-18.967 15.862l.733-.784c-3.681 4.349-7.935 15.729 2.515 12.332 6.292-2.452 10.018-7.045 13.505-12.652l-.822.862c2.517-2.742 4.879-5.654 6.873-8.803 1.89-2.983.971-8.551-3.837-6.817-1.047.384.987-.357 0 0z"/>
                        <path fill="#ACFF00" d="M1156.744 67.625c-7.903 4.034-13.346 8.845-18.14 16.235l.497-.532c-1.728 1.878-5.593 5.586-5.355 8.39.431 5.088 7.434.384 9.279-.853 3.888-2.606 6.6-6.746 9.174-10.59l-.558.585c2.432-2.534 4.844-5.081 7.002-7.858 1.386-1.784 2.427-7.575-1.899-5.377-1.914.977.798-.406 0 0z"/>
                        <path fill="#78B300" d="M1169.096 77.313c-2.116 6.616-3.05 13.599-4.766 20.329-1.938 7.771-3.97 15.546-4.271 23.591-.598 9.874 6.703 30.169 20.507 22.365 12.201-6.898 7.947-29.397 5.801-40.152-1.438-7.711-2.251-15.814-4.339-23.373-1.522-5.944-10.167-11.315-12.932-2.76z"/>
                        <path fill="#ACFF00" d="M1170.602 77.313c-3.021 13.77-6.563 28.424-7.369 42.498-.35 6.096-.219 12.031 2.801 17.536 2.832 5.167 9.361 10.265 14.702 4.674 8.548-8.923 5.064-27.812 3.188-38.575-1.193-7.287-2.064-14.656-3.387-21.917-.325-1.788-.518-4.166-1.539-5.755-2.174-3.382-7.549-2.426-8.396 1.539z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M1168.936 86.196c.477 5.418 6.131 11.8 11.361 6.389m-13.288 3.727c.593 7.709 8.77 14.991 15.163 7.281m-17.088 2.837c.622 9.419 11.374 18.44 18.576 8.571m-20.499 1.544c.547 10.146 11.926 21.385 20.847 11.293"/>
                        <path fill="#78B300" d="M1171.549 29.125c-2.037 4.152-3.237 8.68-4.266 13.167-1.406 6.138.426 13.54.982 19.773.306 3.411.27 27.502 10.262 19.248 2.988-2.468 2.043-8.171 2.121-11.53.241-7.021.478-14.039.726-21.06.169-5.766-.069-10.789-1.674-16.438-.962-3.388-5.553-9.166-8.151-3.16z"/>
                        <path fill="#ACFF00" d="M1172.439 29.125c-4.28 11.692-3.136 22.872-2.321 35.02.279 4.158-.105 9.14.983 13.168 1.187 4.389 7.926 5.626 8.031 0 .802-3.055.114-7.277.163-10.409.106-6.792.124-13.593.364-20.382.18-5.066-.723-10.325-1.504-15.326-.446-2.883-4.311-6.865-5.716-2.071z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M1175.081 26.095v2.676"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1177.978 167.923l1.973 4.872M1177.653 162.447l.325 5.476"/>
                        <path fill="#78B300" d="M1170.72 95.836c-1.354 0-.706 8.213-.512 9.035.579 2.742 4.274 5.216 5.866 1.673 1.353 0 .706-8.213.51-9.035-.578-2.743-4.274-5.215-5.864-1.673 0 0 .284-.633 0 0z"/>
                        <path fill="#ACFF00" d="M1172.226 95.836c-.404 2.408-.456 4.885-.343 7.32.016.364 1.883 7.449 2.685 3.388 1.04-1.157.408-5.914.344-7.32-.018-.365-1.887-7.451-2.686-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1173.396 109.573l3.768 23.798"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1173.396 109.573l3.768 23.798"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1177.653 136.457v24.093"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1177.653 136.457v24.093"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1160.188 149.061l-2.712 4.503M1161.363 143.704l-1.175 5.357"/>
                        <path fill="#78B300" d="M1171.164 78.408c-1.354 0-.706 8.213-.512 9.035.578 2.743 4.274 5.216 5.866 1.674 1.353 0 .705-8.213.511-9.035-.579-2.744-4.274-5.216-5.865-1.674 0 0 .284-.634 0 0z"/>
                        <path fill="#ACFF00" d="M1172.67 78.408c-.404 2.409-.455 4.885-.344 7.32.018.364 1.885 7.45 2.686 3.389 1.04-1.158.408-5.915.343-7.32-.017-.364-1.885-7.451-2.685-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1173.841 92.147l-7.445 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1173.841 92.147l-7.445 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M1165.43 118.032l-3.77 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M1165.43 118.032l-3.77 23.797"/>
                        <path fill="#78B300" d="M1165.041 99.269c-4.282-1.013-8.381-.513-12.279 1.338-8.604 3.879 1.159 2.976 4.829 1.91l-.387.076c.914-.061 11.205-2.505 7.837-3.324-.688-.164.283.068 0 0zM1176.771 42.059c-.458 2.133-.576 4.331-.64 6.503l.028-.595c-.635 3.765-1.074 7.533-1.398 11.336-.202 2.373.18 7.495 2.496 8.834 5.211 3.011 5.44-5.865 5.524-8.672l-.03.596a127.564 127.564 0 001.341-10.669c.169-1.96-.171-3.959-.534-5.883-.62-3.285-5.672-6.597-6.787-1.45-.233 1.087.253-1.172 0 0z"/>
                        <path fill="#ACFF00" d="M1178.377 42.019c-.205 2.159-.202 4.326-.238 6.493l.016-.298c-.714 4.87-1.604 9.718-1.18 14.641.094 1.089.603 6.805 3.129 4.108 1.323-1.409.641-5.655.671-7.448l-.015.298c.546-3.723 1.354-7.636 1.393-11.402-.144-2.162-.252-4.327-.564-6.473-.275-1.874-3.039-1.742-3.212.081-.103 1.084.068-.726 0 0z"/>
                        <path fill="#78B300" d="M1175.664 67.657c-6.695 5.637-10.761 12.862-12.397 21.393l.422-.987c-1.968 5.341-2.074 17.502 6.581 10.729 5.072-4.459 7.004-10.046 8.362-16.509l-.478 1.092c1.427-3.438 2.651-6.982 3.447-10.623.756-3.449-2.013-8.368-5.937-5.095-.853.719.806-.671 0 0z"/>
                        <path fill="#ACFF00" d="M1176.669 68.215c-6.046 6.493-9.519 12.877-11.494 21.46l.285-.67c-.98 2.356-3.344 7.163-2.161 9.717 2.145 4.633 7.116-2.183 8.427-3.976 2.762-3.778 3.896-8.598 4.998-13.089l-.323.74c1.418-3.213 2.813-6.432 3.892-9.778.691-2.151-.311-7.948-3.624-4.404-1.466 1.574.611-.653 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M1166.863 24.879c5.811 2.869 7.997-7.37 3.424-9.129"/>
                        <path fill="#78B300" d="M1172.587 20.42c0-6.456-8.251-6.106-8.251 0 0 6.107 8.251 6.457 8.251 0z"/>
                        <path fill="#5A24B2" d="M1167.422 20.42c0 1.731-2.677 1.731-2.677 0s2.677-1.731 2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M1169.245 19.524c0-2.013-2.677-1.793-2.677 0 0 1.794 2.677 2.013 2.677 0z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M1174.965 13.285c2.402-3.384 3.175-6.37 2.646-10.49M1177.501 13.285c2.403-3.383 3.178-6.37 2.647-10.49"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M1169.867 15.619c-1.657 2.019-2.242 6.072-3.25 8.622"/>
                        <path fill="#78B300" d="M1177.597 32.866c4.121-.79 8.995-12.214 7.448-15.92-2.053-4.916-12.533-5.127-15.422-1.006-1.739 2.482-3.299 8.272-4.067 11.349-.366 1.46-1.017 5.492 1.495 5.656 3.077.198 7.515.503 10.546-.079.905-.173-1.211.234 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M1182.694 25.333c-4.452 0-5.225-8.116-1.413-9.583"/>
                        <path fill="#78B300" d="M1178.982 20.42c0-6.456 8.251-6.106 8.251 0s-8.251 6.457-8.251 0z"/>
                        <path fill="#5A24B2" d="M1184.146 20.42c0 1.731 2.678 1.731 2.678 0s-2.678-1.731-2.678 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M1182.322 19.524c0-2.013 2.677-1.793 2.677 0 0 1.794-2.677 2.013-2.677 0z"/>
                        <path fill="#ACFF00" d="M1167.84 31.187c3.185.036 12.05 1.381 12.233-3.693.628-1.124-1.773-3.291-2.187-4.173-1.327-2.837 1.177-5.314.605-7.381.923-1.547-5.209-.438-5.835-.203-2.524.951-2.6 4.653-3.473 6.864-.328.949-3.484 8.561-1.343 8.586z"/>
                        <path opacity=".8" fill="#D3FF78" d="M1177.371 69.525c.926 6.544 5.188 11.237 9.299 16.067 5.721 6.858 11.363 13.859 18.122 19.742 8.836 7.874 27.848 19.854 35.95 3.963 7.742-15.186-11.67-26.125-22.656-31.221-7.927-3.676-16.302-6.208-24.535-9.084-2.135-.745-16.9-5.054-16.18.533z"/>
                        <path fill="#5A24B2" d="M1221.807 109.677c9.131 7.004 19.995-7.155 10.864-14.159-9.13-7.007-19.994 7.152-10.864 14.159 3.91 2.999-3.911-3.001 0 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <g fill="#5A24B2">
                        <path d="M935.313 71.108V55.533h42.415v15.575h-13.111v46.022h-16.104V71.108h-13.2zM1030.087 81.844c-1.848 6.688-6.071 11.088-11.088 13.287v22h-16.104V94.955c-5.016-2.199-9.239-6.6-11.087-13.111l-7.48-26.311h16.808l6.424 22.703c1.056 3.168 5.456 4.136 6.776 0l6.335-22.703h16.808l-7.392 26.311zM1061.591 107.188V91.084h14.432a2.556 2.556 0 002.553-2.553V74.1a2.554 2.554 0 00-2.553-2.551h-14.432a2.554 2.554 0 00-2.552 2.551v43.031h-16.104V74.1c0-10.295 8.36-18.654 18.655-18.654h14.432c10.296 0 18.656 8.359 18.656 18.654v14.432c0 10.297-8.36 18.656-18.656 18.656h-14.431zM1121.167 117.131c-10.295 0-18.655-8.359-18.655-18.655V74.1c0-10.295 8.36-18.654 18.655-18.654h25.08V71.55h-25.08a2.554 2.554 0 00-2.552 2.551v4.137h27.632V94.34h-27.632v4.136a2.555 2.555 0 002.552 2.552h25.08v16.104h-25.08z"/>
                        </g>
                        <g fill="#5A24B2">
                        <path d="M605.404 97.771H606.195l2.904-29.655c1.848-19.8 32.471-17.863 32.471 1.584v47.431h-16.104V77.443l.353-10.207-.792-.088-1.408 9.943-2.64 19.976c-2.376 18.743-27.983 18.743-30.447 0l-2.552-19.976-1.496-9.943-.792.088.44 10.207v39.688h-16.104V69.7c0-19.447 30.535-21.384 32.471-1.584l2.905 29.655zM665.859 55.533v61.598h-16.104V55.533h16.104zM715.05 55.445v16.104h-13.551c-1.761 0-2.904 1.584-2.376 3.256l6.951 22.175c3.521 11.439-6.512 20.151-17.424 20.151h-15.223v-16.104h13.639c1.849 0 2.904-1.584 2.377-3.256l-6.864-22.176c-3.52-11.527 6.424-20.15 17.424-20.15h15.047zM757.026 55.445v16.104h-13.551c-1.761 0-2.904 1.584-2.376 3.256l6.951 22.175c3.521 11.439-6.512 20.151-17.423 20.151h-15.224v-16.104h13.64c1.848 0 2.903-1.584 2.376-3.256l-6.864-22.176c-3.52-11.527 6.424-20.15 17.424-20.15h15.047zM780.436 55.533v61.598h-16.104V55.533h16.104zM840.186 98.476c0 10.296-8.36 18.655-18.656 18.655h-14.52c-10.295 0-18.655-8.359-18.655-18.655V74.188c0-10.295 8.36-18.654 18.655-18.654h14.52c10.296 0 18.656 8.359 18.656 18.654v24.288zm-16.104-24.288a2.554 2.554 0 00-2.553-2.551h-14.52a2.554 2.554 0 00-2.552 2.551v24.288a2.555 2.555 0 002.552 2.552h14.52a2.555 2.555 0 002.553-2.552V74.188zM902.665 55.445v47.166c0 16.279-17.247 19.447-26.751 11.176-2.552-2.288-4.488-5.632-5.456-10.736-1.672-8.271-3.256-17.688-4.928-25.959l-1.408-9.943-.88.088.968 10.207v39.688h-16.104V69.701c0-16.279 17.248-19.535 26.663-11.176 2.553 2.2 4.488 5.632 5.544 10.735 1.672 8.184 3.256 17.688 4.928 25.871l1.408 10.032.792-.088-.88-11.616V55.445h16.104z"/>
                        </g>
                        <g fill="#5A24B2">
                        <path d="M287.111 55.445v16.104H273.56c-1.76 0-2.904 1.584-2.377 3.256l6.953 22.175c3.52 11.439-6.513 20.151-17.424 20.151h-15.224v-16.104h13.64c1.848 0 2.904-1.584 2.375-3.256l-6.863-22.176c-3.52-11.527 6.424-20.15 17.424-20.15h15.047zM312.896 117.131c-10.296 0-18.656-8.359-18.656-18.655V74.1c0-10.295 8.36-18.654 18.656-18.654h25.079V71.55h-25.079a2.554 2.554 0 00-2.553 2.551v4.137h27.632V94.34h-27.632v4.136a2.555 2.555 0 002.553 2.552h25.079v16.104h-25.079zM361.912 55.533v42.942a2.554 2.554 0 002.552 2.552h20.327v16.104h-20.327c-10.296 0-18.655-8.359-18.655-18.655V55.533h16.103zM410.928 117.131c-10.295 0-18.655-8.359-18.655-18.655V74.1c0-10.295 8.36-18.654 18.655-18.654h25.08V71.55h-25.08a2.554 2.554 0 00-2.552 2.551v4.137h27.632V94.34h-27.632v4.136a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08zM462.584 117.131c-10.297 0-18.656-8.359-18.656-18.655V74.1c0-10.295 8.359-18.654 18.656-18.654h25.078V71.55h-25.078a2.554 2.554 0 00-2.553 2.551v24.376a2.555 2.555 0 002.553 2.552h25.078v16.104h-25.078zM494.879 71.108V55.533h42.414v15.575h-13.111v46.022h-16.104V71.108h-13.199z"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <path opacity=".8" fill="#D3FF78" d="M208.464 69.18c1.479 6.44-.813 12.353-2.923 18.334-2.883 8.452-5.642 17.011-9.844 24.926-5.428 10.517-18.883 28.513-32.142 16.582-12.672-11.401 1.532-28.572 9.963-37.266 6.083-6.271 12.993-11.638 19.649-17.272 1.729-1.463 13.966-10.779 15.297-5.304z"/>
                        <path fill="#5A24B2" d="M166.107 112.1c-7.007 9.13 7.154 19.997 14.159 10.864 7.007-9.129-7.153-19.995-14.159-10.864z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M211.208 167.923l-1.974 4.872M211.531 162.447l-.323 5.476"/>
                        <path fill="#78B300" d="M218.467 95.836c1.354 0 .705 8.213.511 9.035-.579 2.742-4.274 5.216-5.865 1.673-1.354 0-.706-8.213-.511-9.035.578-2.743 4.273-5.215 5.865-1.673 0 0-.285-.633 0 0z"/>
                        <path fill="#ACFF00" d="M216.961 95.836c.404 2.408.455 4.885.343 7.32-.017.364-1.885 7.449-2.686 3.388-1.04-1.157-.407-5.914-.343-7.32.017-.365 1.885-7.451 2.686-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M215.789 109.573l-3.769 23.798"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M215.789 109.573l-3.769 23.798"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M211.531 136.457v24.093"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M211.531 136.457v24.093"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M229.887 149.061l2.713 4.503M228.711 143.704l1.176 5.357"/>
                        <path fill="#78B300" d="M218.912 78.408c1.354 0 .705 8.213.511 9.035-.579 2.743-4.274 5.216-5.865 1.674-1.354 0-.706-8.213-.511-9.035.578-2.744 4.273-5.216 5.865-1.674 0 0-.285-.634 0 0z"/>
                        <path fill="#ACFF00" d="M217.406 78.408c.404 2.409.455 4.885.342 7.32-.016.364-1.884 7.45-2.685 3.389-1.04-1.158-.408-5.915-.343-7.32.016-.364 1.885-7.451 2.686-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M216.234 92.147l7.446 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M216.234 92.147l7.446 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M224.645 118.032l3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M224.645 118.032l3.769 23.797"/>
                        <path fill="#78B300" d="M251.33 92.468c2.787 3.406 4.133 7.309 4.181 11.623.284 9.435-3.183.262-3.837-3.502l.103.381c-.347-.848-2.66-11.169-.447-8.502.448.548-.185-.221 0 0zM219.703 43.08c1.16 1.847 2.023 3.872 2.826 5.893l-.23-.549c1.884 3.321 3.582 6.712 5.191 10.175 1.002 2.158 2.394 7.105.674 9.154-3.867 4.612-7.117-3.652-8.154-6.261l.23.551a128.673 128.673 0 01-4.908-9.567c-.828-1.782-1.193-3.778-1.51-5.709-.541-3.3 3.073-8.143 5.881-3.687.592.942-.639-1.014 0 0z"/>
                        <path fill="#ACFF00" d="M218.181 43.593c.932 1.959 1.67 3.996 2.446 6.02l-.117-.275c2.338 4.333 4.831 8.584 6.115 13.355.285 1.055 1.76 6.6-1.536 4.931-1.724-.872-2.534-5.095-3.177-6.77l.116.275c-1.785-3.313-3.884-6.713-5.21-10.239-.603-2.081-1.242-4.151-1.684-6.276-.382-1.853 2.261-2.675 3.047-1.021.467.982-.313-.658 0 0z"/>
                        <path fill="#78B300" d="M229.496 66.758c8.221 3.005 14.516 8.405 18.969 15.862l-.734-.784c3.681 4.349 7.935 15.729-2.514 12.332-6.291-2.452-10.019-7.045-13.505-12.652l.821.862c-2.516-2.742-4.879-5.654-6.873-8.803-1.889-2.983-.969-8.551 3.836-6.817 1.05.384-.984-.357 0 0z"/>
                        <path fill="#ACFF00" d="M228.745 67.625c7.903 4.034 13.347 8.845 18.14 16.235l-.497-.532c1.728 1.878 5.593 5.586 5.356 8.39-.432 5.088-7.435.384-9.279-.853-3.888-2.606-6.601-6.746-9.174-10.59l.557.585c-2.431-2.534-4.842-5.081-7-7.858-1.387-1.784-2.429-7.575 1.897-5.377 1.915.977-.798-.406 0 0z"/>
                        <path fill="#78B300" d="M216.395 77.313c2.116 6.616 3.049 13.599 4.765 20.329 1.938 7.771 3.97 15.546 4.271 23.591.599 9.874-6.702 30.169-20.507 22.365-12.201-6.898-7.946-29.397-5.801-40.152 1.438-7.711 2.252-15.814 4.34-23.373 1.521-5.944 10.166-11.315 12.932-2.76z"/>
                        <path fill="#ACFF00" d="M214.889 77.313c3.021 13.77 6.564 28.424 7.369 42.498.349 6.096.218 12.031-2.801 17.536-2.834 5.167-9.362 10.265-14.703 4.674-8.547-8.923-5.064-27.812-3.188-38.575 1.193-7.287 2.064-14.656 3.387-21.917.325-1.788.517-4.166 1.539-5.755 2.174-3.382 7.547-2.426 8.397 1.539z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M205.193 92.585c5.23 5.411 10.885-.971 11.362-6.389m-13.237 17.397c6.394 7.71 14.57.428 15.162-7.281m-16.652 18.689c7.203 9.869 17.955.848 18.576-8.571m-18.922 21.408c8.92 10.092 20.299-1.147 20.848-11.293"/>
                        <path fill="#78B300" d="M213.941 29.125c2.036 4.152 3.237 8.68 4.265 13.167 1.407 6.138-.425 13.54-.981 19.773-.307 3.411-.271 27.502-10.262 19.248-2.988-2.468-2.044-8.171-2.123-11.53-.238-7.021-.477-14.039-.724-21.06-.169-5.766.069-10.789 1.673-16.438.962-3.388 5.553-9.166 8.152-3.16z"/>
                        <path fill="#ACFF00" d="M213.05 29.125c4.28 11.692 3.137 22.872 2.321 35.02-.279 4.158.105 9.14-.982 13.168-1.188 4.389-7.926 5.626-8.031 0-.802-3.055-.115-7.277-.164-10.409-.106-6.792-.123-13.593-.363-20.382-.18-5.066.723-10.325 1.503-15.326.447-2.883 4.311-6.865 5.716-2.071z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M210.41 26.095v2.676"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M207.514 167.923l-1.975 4.872M207.836 162.447l-.322 5.476"/>
                        <path fill="#78B300" d="M214.771 95.836c1.354 0 .706 8.213.511 9.035-.578 2.742-4.273 5.216-5.865 1.673-1.354 0-.705-8.213-.511-9.035.578-2.743 4.274-5.215 5.865-1.673 0 0-.285-.633 0 0z"/>
                        <path fill="#ACFF00" d="M213.265 95.836c.405 2.408.455 4.885.343 7.32-.016.364-1.885 7.449-2.686 3.388-1.039-1.157-.407-5.914-.342-7.32.016-.365 1.884-7.451 2.685-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M212.094 109.573l-3.77 23.798"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M212.094 109.573l-3.77 23.798"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M207.836 136.457v24.093"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M207.836 136.457v24.093"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M225.301 149.061l2.713 4.503M224.125 143.704l1.176 5.357"/>
                        <path fill="#78B300" d="M214.326 78.408c1.354 0 .705 8.213.512 9.035-.58 2.743-4.275 5.216-5.865 1.674-1.354 0-.707-8.213-.512-9.035.578-2.744 4.274-5.216 5.865-1.674 0 0-.285-.634 0 0z"/>
                        <path fill="#ACFF00" d="M212.82 78.408c.404 2.409.455 4.885.343 7.32-.017.364-1.884 7.45-2.685 3.389-1.041-1.158-.408-5.915-.344-7.32.017-.364 1.886-7.451 2.686-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M211.648 92.147l7.447 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M211.648 92.147l7.447 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M220.06 118.032l3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M220.06 118.032l3.769 23.797"/>
                        <path fill="#78B300" d="M239.059 92.828c4.395-.254 8.343.95 11.861 3.45 7.799 5.313-1.66 2.728-5.088 1.043l.367.142c-.89-.218-10.599-4.413-7.14-4.635.707-.041-.289.018 0 0zM208.47 43.081c1.159 1.847 2.022 3.872 2.825 5.893l-.23-.55c1.884 3.321 3.586 6.711 5.19 10.175 1.001 2.16 2.396 7.103.677 9.154-3.867 4.612-7.119-3.65-8.156-6.26l.23.55a128.303 128.303 0 01-4.909-9.567c-.828-1.782-1.191-3.778-1.509-5.709-.541-3.3 3.074-8.141 5.882-3.686.591.941-.639-1.015 0 0z"/>
                        <path fill="#ACFF00" d="M206.947 43.593c.931 1.959 1.669 3.996 2.444 6.02l-.116-.275c2.337 4.333 4.831 8.584 6.115 13.355.285 1.055 1.761 6.6-1.535 4.931-1.725-.872-2.535-5.095-3.178-6.769l.115.274c-1.785-3.313-3.883-6.713-5.209-10.239-.603-2.081-1.242-4.151-1.683-6.276-.382-1.853 2.262-2.676 3.047-1.021.467.982-.312-.658 0 0z"/>
                        <path fill="#78B300" d="M218.264 66.758c8.221 3.006 14.512 8.405 18.967 15.861l-.732-.783c3.676 4.346 7.934 15.736-2.517 12.332-6.291-2.454-10.015-7.045-13.503-12.653l.822.863c-2.517-2.742-4.879-5.654-6.873-8.803-1.891-2.983-.969-8.551 3.836-6.817 1.049.384-.985-.357 0 0z"/>
                        <path fill="#ACFF00" d="M217.512 67.625c7.902 4.034 13.349 8.845 18.14 16.234l-.497-.532c1.728 1.879 5.593 5.587 5.355 8.391-.432 5.088-7.434.384-9.279-.853-3.887-2.606-6.6-6.746-9.172-10.591l.557.586c-2.432-2.534-4.843-5.081-7.001-7.858-1.387-1.784-2.429-7.575 1.897-5.377 1.916.977-.797-.406 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M218.625 24.879c-5.809 2.869-7.996-7.37-3.422-9.129"/>
                        <path fill="#78B300" d="M212.903 20.42c0-6.456 8.251-6.106 8.251 0 0 6.107-8.251 6.457-8.251 0z"/>
                        <path fill="#5A24B2" d="M218.068 20.42c0 1.731 2.677 1.731 2.677 0s-2.677-1.731-2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M216.244 19.524c0-2.013 2.678-1.793 2.678 0 0 1.794-2.678 2.013-2.678 0z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M210.525 13.285c-2.403-3.384-3.176-6.37-2.646-10.49M207.988 13.285c-2.404-3.383-3.176-6.37-2.646-10.49"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M215.622 15.619c1.657 2.019 2.243 6.072 3.251 8.622"/>
                        <path fill="#78B300" d="M207.893 32.866c-4.12-.79-8.995-12.214-7.448-15.92 2.054-4.916 12.533-5.127 15.423-1.006 1.738 2.482 3.298 8.272 4.067 11.349.365 1.46 1.016 5.492-1.496 5.656-3.078.198-7.515.503-10.546-.079-.905-.173 1.211.234 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M202.795 25.333c4.452 0 5.225-8.116 1.413-9.583"/>
                        <path fill="#78B300" d="M206.508 20.42c0-6.456-8.252-6.106-8.252 0s8.252 6.457 8.252 0z"/>
                        <path fill="#5A24B2" d="M201.343 20.42c0 1.731-2.677 1.731-2.677 0s2.677-1.731 2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M203.168 19.524c0-2.013-2.678-1.793-2.678 0 0 1.794 2.678 2.013 2.678 0z"/>
                        <path fill="#ACFF00" d="M217.648 31.187c-3.184.036-12.049 1.381-12.232-3.693-.627-1.124 1.775-3.291 2.188-4.173 1.326-2.837-1.177-5.314-.606-7.381-.922-1.547 5.209-.438 5.835-.203 2.525.951 2.6 4.653 3.473 6.864.329.949 3.485 8.561 1.342 8.586z"/>
                        <path opacity=".8" fill="#D3FF78" d="M208.118 69.525c-.925 6.544-5.187 11.237-9.299 16.067-5.72 6.858-11.362 13.859-18.122 19.742-8.836 7.874-27.846 19.854-35.949 3.963-7.743-15.186 11.67-26.125 22.655-31.221 7.927-3.676 16.302-6.208 24.534-9.084 2.137-.745 16.903-5.054 16.181.533z"/>
                        <path fill="#5A24B2" d="M163.684 109.677c-9.131 7.004-19.996-7.155-10.865-14.159 9.13-7.007 19.995 7.152 10.865 14.159-3.911 2.999 3.91-3.001 0 0z"/>
                    </svg>                   
               </SelectHeader>
            </div>
            <div className='homeSelectTypeSingle'>
                <button onClick={props.singleSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 174">
                        <path fill="#5A24B2" d="M142.9 105c0 6.6-5.4 12-12 12h-36c-6.6 0-12-5.4-12-12V69c0-6.6 5.4-12 12-12h36c6.6 0 12 5.4 12 12v36z"/>
                        <g fill="#ACFF00">
                            <path d="M260.4 70.5v8.1h-6.8c-.9 0-1.5.8-1.2 1.6l3.5 11.1c1.8 5.7-3.3 10.1-8.7 10.1h-7.6v-8.1h6.8c.9 0 1.5-.8 1.2-1.6l-3.4-11.1c-1.8-5.8 3.2-10.1 8.7-10.1h7.5zM272.1 70.5v30.8H264V70.5h8.1zM303.4 70.5v23.6c0 8.1-8.6 9.7-13.4 5.6-1.3-1.1-2.2-2.8-2.7-5.4-.8-4.1-1.6-8.8-2.5-13l-.7-5h-.4l.5 5.1v19.8h-8.1V77.5c0-8.1 8.6-9.8 13.3-5.6 1.3 1.1 2.2 2.8 2.8 5.4.8 4.1 1.6 8.8 2.5 12.9l.7 5h.4l-.4-5.8v-19h8zM316.7 101.3c-5.1 0-9.4-4.2-9.4-9.3V79.9c0-5.1 4.2-9.3 9.4-9.3H332v8.1h-15.4c-.7 0-1.3.6-1.3 1.3v12c0 .7.6 1.3 1.3 1.3h7.3v-7.1h8.1v15.2h-15.3zM344.1 70.5V92c0 .7.6 1.3 1.3 1.3h10.2v8.1h-10.2c-5.1 0-9.3-4.2-9.3-9.3V70.5h8zM368.6 101.3c-5.1 0-9.3-4.2-9.3-9.3V79.8c0-5.1 4.2-9.3 9.3-9.3h12.5v8.1h-12.5c-.7 0-1.3.6-1.3 1.3V82h13.8v8.1h-13.8V92c0 .7.6 1.3 1.3 1.3h12.5v8.1h-12.5z"/>
                        </g>
                    </svg>
                </button>
            </div>
            <div className='homeSelectTypeMultilevel'>
               <button onClick={props.multilevelSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 174">
                        <g fill="#5A24B2">
                            <path d="M55.2 71.2c0 6.1-5 11-11 11H11c-6.1 0-11-5-11-11V38c0-6 5-11 11-11h33.1c6.1 0 11 5 11 11v33.2zM98.8 75.4c0 3.7-3.1 6.8-6.8 6.8H71.6c-3.7 0-6.8-3.1-6.8-6.8V55c0-3.7 3.1-6.8 6.8-6.8H92c3.7 0 6.8 3.1 6.8 6.8v20.4zM55.2 130.2c0 5.3-4.3 9.6-9.6 9.6H16.8c-5.3 0-9.6-4.3-9.6-9.6v-28.8c0-5.3 4.3-9.6 9.6-9.6h28.8c5.3 0 9.6 4.3 9.6 9.6v28.8zM120 136c0 6.1-5 11-11 11H75.8c-6.1 0-11-5-11-11v-33.1c0-6.1 5-11 11-11H109c6.1 0 11 5 11 11V136z"/>
                        </g>
                        <g fill="#ACFF00">
                            <path d="M233.5 91.7h.4l1.5-14.8c.9-9.9 16.2-8.9 16.2.8v23.7h-8.1V81.5l.2-5.1h-.4l-.7 5-1.3 10c-1.2 9.4-14 9.4-15.2 0l-1.3-10-.7-5h-.4l.2 5.1v19.8h-8.1V77.6c0-9.7 15.3-10.7 16.2-.8l1.5 14.9zM281.4 70.5V92c0 5.1-4.2 9.3-9.3 9.3h-7.2c-5.1 0-9.3-4.2-9.3-9.3V70.5h8.1V92c0 .7.6 1.3 1.3 1.3h7.2c.7 0 1.3-.6 1.3-1.3V70.5h7.9zM293.4 70.5V92c0 .7.6 1.3 1.3 1.3h10.2v8.1h-10.2c-5.1 0-9.3-4.2-9.3-9.3V70.5h8zM303.3 78.3v-7.8h21.2v7.8h-6.6v23h-8.1v-23h-6.5zM336.3 70.5v30.8h-8.1V70.5h8.1zM348.3 70.5V92c0 .7.6 1.3 1.3 1.3h10.2v8.1h-10.2c-5.1 0-9.3-4.2-9.3-9.3V70.5h8zM372.8 101.3c-5.1 0-9.3-4.2-9.3-9.3V79.8c0-5.1 4.2-9.3 9.3-9.3h12.5v8.1h-12.5c-.7 0-1.3.6-1.3 1.3V82h13.8v8.1h-13.8V92c0 .7.6 1.3 1.3 1.3h12.5v8.1h-12.5zM400.1 93.3c.6 0 1.1-.4 1.2-.9l6.6-21.9h8.4L409.2 94c-1.2 4.1-4.7 7.3-9.1 7.3h-1.5c-5.1 0-9.3-4.2-9.3-9.3V70.5h8.1V92c0 .7.6 1.3 1.3 1.3h1.4zM427.6 101.3c-5.1 0-9.3-4.2-9.3-9.3V79.8c0-5.1 4.2-9.3 9.3-9.3h12.5v8.1h-12.5c-.7 0-1.3.6-1.3 1.3V82h13.8v8.1h-13.8V92c0 .7.6 1.3 1.3 1.3h12.5v8.1h-12.5zM452.1 70.5V92c0 .7.6 1.3 1.3 1.3h10.2v8.1h-10.2c-5.1 0-9.3-4.2-9.3-9.3V70.5h8z"/>
                        </g>
                    </svg>
                </button>
            </div> 
        </div>
    )
}

export default SelectType;