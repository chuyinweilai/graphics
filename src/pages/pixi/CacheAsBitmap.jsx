/**
 * 功能:
 * 1、移动精灵
 * 2、旋转精灵
 * 3、游戏循环
 * 
 * 注意
 */

import * as PIXI from 'pixi.js';
import { Init } from './comm';
import jsonData from "./images/monsters.json";

export default function CacheAsBitmap(ele) {
    this.app = null;
    this.ele = ele;

    this.init = (obj = {})=> {
        console.log("------CacheAsBitmap------")
        let app = Init(obj,ele);
        this.app = app;
        this.setNext();
    }

    this.setNext = function(){
        const app = this.app;

        const aliens = [];
        const alienFrames = [
            'eggHead.png',
            'flowerTop.png',
            'helmlok.png',
            'skully.png',
        ];

        let count = 0;

        // create an empty container
        const alienContainer = new PIXI.Container();
        alienContainer.x = 400;
        alienContainer.y = 300;

        // make the stage interactive
        app.stage.interactive = true;
        app.stage.addChild(alienContainer);

        let jsons ='./images/bunnys.png';
        console.log("jsons------>", jsons)
        app.loader
            .add(['./images/bunnys.png','./images/cat.png'])
            .load(onAssetsLoaded);

        function onAssetsLoaded() {
            // app.stage.addChild(plane);
            // const plane = new PIXI.SimplePlane(texture);

            // plane.x = 100;
            // plane.y = 100;
            
            // // 通过 stage.addChild方法,向Pixi舞台中添加元素。

            // app.stage.addChild(plane);
            
            return
            // add a bunch of aliens with textures from image paths
            for (let i = 0; i < 100; i++) {
                const frameName = alienFrames[i % 4];

                // create an alien using the frame name..
                const alien = PIXI.Sprite.from(frameName);
                alien.tint = Math.random() * 0xFFFFFF;
                return
                /*
                * fun fact for the day :)
                * another way of doing the above would be
                * var texture = PIXI.Texture.from(frameName);
                * var alien = new PIXI.Sprite(texture);
                */
                alien.x = Math.random() * 800 - 400;
                alien.y = Math.random() * 600 - 300;
                alien.anchor.x = 0.5;
                alien.anchor.y = 0.5;
                aliens.push(alien);
                alienContainer.addChild(alien);
            }
            app.start();
            // that.tickerFoo(aliens, alienContainer)
        }
    }

    // 添加图片
    this.setNexts = () => {
        const app = this.app;
        const that = this;
        console.dir(app)
        // load resources
        app.loader
            .add('spritesheet', './images/monsters.json')
            .load(onAssetsLoaded);
        
        // holder to store aliens
        const aliens = [];
        const alienFrames = [
            'eggHead.png',
            'flowerTop.png',
            'helmlok.png',
            'skully.png',
        ];

        let count = 0;

        // create an empty container
        const alienContainer = new PIXI.Container();
        alienContainer.x = 400;
        alienContainer.y = 300;

        // make the stage interactive
        app.stage.interactive = true;
        app.stage.addChild(alienContainer);

        function onAssetsLoaded() {

            console.log(app.loader.resources.spritesheet.error.stack)

            // add a bunch of aliens with textures from image paths
            for (let i = 0; i < 100; i++) {
                const frameName = alienFrames[i % 4];

                // create an alien using the frame name..
                const alien = PIXI.Sprite.from(frameName);
                alien.tint = Math.random() * 0xFFFFFF;

                /*
                * fun fact for the day :)
                * another way of doing the above would be
                * var texture = PIXI.Texture.from(frameName);
                * var alien = new PIXI.Sprite(texture);
                */
                alien.x = Math.random() * 800 - 400;
                alien.y = Math.random() * 600 - 300;
                alien.anchor.x = 0.5;
                alien.anchor.y = 0.5;
                aliens.push(alien);
                alienContainer.addChild(alien);
            }
            app.start();
            that.tickerFoo(aliens, alienContainer)
        }

        // Combines both mouse click + touch tap
        app.stage.on('pointertap', onClick);

        function onClick() {
            alienContainer.cacheAsBitmap = !alienContainer.cacheAsBitmap;

            // feel free to play with what's below
            // var sprite = new PIXI.Sprite(alienContainer.generateTexture());
            // app.stage.addChild(sprite);
            // sprite.x = Math.random() * 800;
            // sprite.y = Math.random() * 600;
        }
    }

    this.tickerFoo = (aliens,alienContainer) => {
        let count = 0;
        const app = this.app;
    
        app.ticker.add(() => {
            // let's rotate the aliens a little bit
            for (let i = 0; i < 100; i++) {
                const alien = aliens[i];
                alien.rotation += 0.1;
            }
    
            count += 0.01;
    
            alienContainer.scale.x = Math.sin(count);
            alienContainer.scale.y = Math.sin(count);
            alienContainer.rotation += 0.01;
        });

    }


}