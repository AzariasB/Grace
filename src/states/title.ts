
import Game from './game';
import TextButton, { ButtonOptions } from '../widgets/TextButton';
import BackgroundScroller, { } from '../widgets/backgroundScroller';
import * as Assets from '../assets';

export default class Title extends Phaser.State {

    public create(): void {
        new BackgroundScroller(this.game);
        this.world.setBounds(0, 0, this.game.width, this.game.height);

        let yPos = 150;
        let tb = new TextButton(this.game, this.game.world.centerX, yPos, {
            text : 'Play !',
            font : Assets.CustomWebFonts.FontsKenvectorFuture.getName(),
            fontSize : 20
        }, {callback : this.playClick, callbackContext : this});
        yPos += tb.height + 10;

        let optionsB = new TextButton(this.game, this.game.world.centerX, yPos , {
            text : 'Scoreboard',
            font : Assets.CustomWebFonts.FontsKenvectorFuture.getName(),
            fontSize : 20
        });
        yPos += optionsB.height + 10;

        let helpB = new TextButton(this.game, this.game.world.centerX, yPos , {
            text : 'Help',
            font : Assets.CustomWebFonts.FontsKenvectorFuture.getName(),
            fontSize : 20
        }, {callback : this.helpClick, callbackContext : this});
        yPos += helpB.height + 10;

        new TextButton(this.game, this.game.world.centerX, yPos, {
            text : 'Credits',
            font : Assets.CustomWebFonts.FontsKenvectorFuture.getName(),
            fontSize : 20
        }, {callback : this.creditsClick, callbackContext : this});
    }

    resumed() {
        console.log(this.world.width, this.world.height);
        console.log(this.game.width, this.game.height);
        console.log(this.camera.width, this.camera.height);
        this.game.world.resize(this.game.width, this.game.height);
    }

    private playClick() {
        this.game.camera.onFadeComplete.addOnce(this.loadGame, this);
        this.game.camera.fade(0x000000, 1000);
    }

    private loadGame() {
        this.game.state.start('lobby');
    }

    private helpClick() {
        this.game.camera.onFadeComplete.addOnce(this.loadHelp, this);
        this.game.camera.fade(0x000000, 1000);
    }

    private loadHelp() {
        this.game.state.start('help');
    }

    private creditsClick() {
        this.game.camera.onFadeComplete.addOnce(this.loadCredits, this);
        this.game.camera.fade(0x000000, 1000);
    }

    private loadCredits() {
        this.game.state.start('credits');
    }

}