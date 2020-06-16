/**
 * 讲解:
 * 1、材質暫存(Texture Cache)
 * 2、导入方法:
 *      a. PIXI.texture.from 引入图片
 *      b. 使用PIXI.utils.TextureCache,具体参考本文
 * 3、再通过PIXI.Sprite()方法将图片绘制到画布上。
 * 4、游戏循环: app.ticker.add(()=>{}),每帧执行一次
 * 功能:
 * 1、移动精灵
 * 2、旋转精灵
 * 3、游戏循环
 * 
 * 注意
 */

import * as PIXI from 'pixi.js';
import { Init } from './comm';

export default function PIXIJS_ROTATE(ele) {
    this.app = null;
    this.ele = ele;

    this.init = (obj = {})=> {
        console.log("------rotate------")
        const app = Init(obj,ele);
        this.app = app;
        this.addImage();
    }

    // 添加图片
    this.addImage = () => {
        // 第一种写法
        const loader1 = PIXI.Loader.shared;
        
        // 第二种写法
        const loader2 = new PIXI.Loader();

        const app = this.app;
        // PIXI.Loader.shared
        loader2.add("catPic", require("./images/cat.png"))
        .load(setup);
        // 另一种loader方法
        // PIXI.Loader.shared
        // .add("catPic", require("./images/cat.png"))
        // .load(setup);

        //This `setup` function will run when the image has loaded
        function setup(loader, resources) {
            const container = new PIXI.Container();
            app.stage.addChild(container);
            // Create a 5x5 grid of bunnies
            // 生成多次图片
            for (let i = 0; i < 25; i++) {
                const texture = resources.catPic.texture;

                const bunny = new PIXI.Sprite(texture);
                // anchor设置锚点
                bunny.anchor.set(0.5);
                bunny.x = (i % 5) * (bunny.width + 10);
                bunny.y = Math.floor(i / 5) * (bunny.height + 10);
                container.addChild(bunny);
            }
    
            // Move container to the center
            container.x = app.screen.width / 2;
            container.y = app.screen.height / 2;
    
            // Center bunny sprite in local container coordinates
            container.pivot.x = (container.width+10) / 2;
            container.pivot.y = (container.height+10) / 2;
            
            // Listen for animate update
            // ticker
            app.ticker.add((delta) => {
                // rotate the container!
                // use delta to create frame-independent transform
                // 旋转
                container.rotation -= 0.01 * delta;
    
                // 移动
                // container.x += 1;
                // container.y += 1;
            });
        }
    }

    // 添加图片
    this.oldAddImage = () => {
        const app = this.app;
        

        // Create a new texture
        const texture = PIXI.Texture.from(require('./images/cat.png'));

        const container = new PIXI.Container();

        app.stage.addChild(container);
        // Create a 5x5 grid of bunnies
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(texture);
            // anchor设置锚点
            bunny.anchor.set(0.5);
            bunny.x = (i % 5) * (bunny.width + 10);
            bunny.y = Math.floor(i / 5) * (bunny.height + 10);
            container.addChild(bunny);
        }

        // Move container to the center
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        container.pivot.x = (container.width+10) / 2;
        container.pivot.y = (container.height+10) / 2;
        
        // Listen for animate update
        app.ticker.add((delta) => {
            // rotate the container!
            // use delta to create frame-independent transform
            // 旋转
            container.rotation -= 0.01 * delta;

            // 移动
            // container.x += 1;
            // container.y += 1;
        });
    }

}