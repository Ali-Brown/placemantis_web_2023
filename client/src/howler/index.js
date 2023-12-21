import {Howl, Howler} from 'howler';

let homeSound = null;
let buttonSound = null;
let navSound = null;
let gameSound = null;

export const playHomeSound = () => {
    //check if homeSound is null, if not stop previous homeSound and unload it
    Howler.stop(gameSound);
    gameSound = null;

    homeSound = new Howl({
        src: ['/audio/home.wav'],
        loop: true
    });

    homeSound.play();
}

export const playGameSound = () => {
    //check if homeSound is null, if not stop previous homeSound and unload it
    Howler.stop(homeSound);
    homeSound = null;

    gameSound = new Howl({
        src: ['/audio/game_play2.wav'],
        loop: true,
        volume: 0.25
    });

    gameSound.play();
}

export const playButtonSound = () => {
    buttonSound = new Howl({
        src: ['/audio/button.wav']
    });

    buttonSound.play();
}

export const playNavSound = () => {
    navSound = new Howl({
        src: ['/audio/nav_icon.wav']
    });

    navSound.play();
}

export const offAudio = () => {
    Howler.stop();
    homeSound = null;
    buttonSound = null;
    navSound = null;
    gameSound = null;
}
