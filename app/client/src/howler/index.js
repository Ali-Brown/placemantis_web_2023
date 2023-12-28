import {Howl, Howler} from 'howler';

let homeSound = null;
let buttonSound = null;
let navSound = null;
let gameSound = null;
let newRoundSound = null;
let timeElapsingSound = null;
let wrongChoiceSound = null;
let rightChoiceSound = null;
let missionCompleteSound = null;


export const playHomeSound = () => {
    //check if homeSound is null, if not stop previous homeSound and unload it
    Howler.stop(gameSound);
    gameSound = null;
    missionCompleteSound = null;

    homeSound = new Howl({
        src: ['/audio/home.wav'],
        loop: true,
        html5: true
    });

    homeSound.play();
}

export const playGameSound = () => {
    //check if homeSound is null, if not stop previous homeSound and unload it
    Howler.stop();
    homeSound = null;

    gameSound = new Howl({
        src: ['/audio/game_play.mp3'],
        loop: true,
        volume: 0.2,
        html5: true
    });

    gameSound.play();
}

export const playMissionCompleteSound = () => {
    //check if homeSound is null, if not stop previous homeSound and unload it
    Howler.stop();
    homeSound = null;
    gameSound = null;
    

    missionCompleteSound = new Howl({
        src: ['/audio/mission_complete.wav'],
        loop: true,
        volume: 0.2,
        html5: true
    });

    missionCompleteSound.play();
}

export const playButtonSound = () => {
    buttonSound = new Howl({
        src: ['/audio/button.wav'],
        html5: true,
        volume: 0.5
    });

    buttonSound.play();
}

export const playNavSound = () => {
    navSound = new Howl({
        src: ['/audio/nav_icon.wav'],
        html5: true,
        volume: 0.5
    });

    navSound.play();
}

export const playNewRoundSound = () => {
    newRoundSound = new Howl({
        src: ['/audio/new_round.wav'],
        html5: true
    });

    newRoundSound.play();
}

export const playTimeElapsingSound = () => {
    timeElapsingSound = new Howl({
        src: ['/audio/time_elapsing.wav'],
        html5: true,
        volume: 0.25
    });

    timeElapsingSound.play();
    //timeElapsingSound.stop("elapseSound");
    //console.log("play time elapsing sound", timeElapsingSound);
}

export const stopTimeElapsingSound = () => {

    if (timeElapsingSound != null) {
        timeElapsingSound.stop();
        timeElapsingSound.unload();
        timeElapsingSound = null;
    }

    //console.log("stopped time elapsing sound in howler index", timeElapsingSound);
    
}

export const playWrongChoiceSound = () => {
    wrongChoiceSound = new Howl({
        src: ['/audio/wrong_choice.wav'],
        html5: true,
        volume: 0.25
    });

    wrongChoiceSound.play();
    //timeElapsingSound.stop("elapseSound");
    //console.log("play wrong choice sound");
}

export const playRightChoiceSound = () => {
    rightChoiceSound = new Howl({
        src: ['/audio/right_choice.wav'],
        html5: true,
        volume: 0.25
    });

    rightChoiceSound.play();
    //timeElapsingSound.stop("elapseSound");
    //console.log("play wrong choice sound");
}

export const offAudio = () => {
    Howler.stop();
    homeSound = null;
    buttonSound = null;
    navSound = null;
    gameSound = null;
    newRoundSound = null;
    timeElapsingSound = null;
    wrongChoiceSound = null;
    rightChoiceSound = null;
    missionCompleteSound = null;
}
