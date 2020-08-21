/**
 * 讲解:
 * 1、材質暫存(Texture Cache)
 * 2、导入方法:
 *      a. PIXI.texture.from 引入图片
 *      b. 使用PIXI.utils.TextureCache,具体参考本文
 * 3、再通过PIXI.Sprite()方法将图片绘制到画布上。
 * 4、游戏循环: app.ticker.add(()=>{}),每帧执行一次、
 * 5、ticker:
 *      a. add()每帧执行一次
 *      b. addOnce()只执行一次
 *      c. destory()销毁add()动画方法，且不可再恢复，不推荐使用。
 *      d. remove()移除动画
 *      e. start() 启动动画,搭配监听器使用
 *      d. stop() 停止动画,搭配监听器使用
 *      f. update() 更新动画
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
    this.container = null;
    this.ele = ele;
    this.status_x = 0;  // X轴移动状态
    this.status_y = 0;  // Y轴移动状态

    this.init = (obj = {})=> {
        console.log("------move------")
        const app = Init(obj,ele);
        this.app = app;
        this.addImage();
    }

    // 添加图片
    this.addImage = () => {
        let that = this;
        // 第一种写法
        const loader1 = PIXI.Loader.shared;
        
        // 第二种写法
        const loader2 = new PIXI.Loader();

        const app = this.app;

        // PIXI.Loader.shared
        loader2.add("catPic", require("./images/cat.png"))
        .load(setup);
        // 另一种loader方法
        // PIXI.Loader.shared.add("catPic", require("./images/cat.png"))
        // .load(setup);

        //This `setup` function will run when the image has loaded
        function setup(loader, resources) {
            const container = new PIXI.Container();
            app.stage.addChild(container);
            // 生成多次图片
            const texture = resources.catPic.texture;
            const bunny = new PIXI.Sprite(texture);
            container.addChild(bunny);
            that.container = container;
    
            // Move container to the center
            // 控制元素的位置
            container.x += app.screen.width / 2;
            container.y = app.screen.height / 2;
    
            // Center bunny sprite in local container coordinates
            // 控制元素中心的位置
            container.pivot.x = (container.width+10) / 2;
            container.pivot.y = (container.height+10) / 2;
            
            // Listen for animate update
            // ticker
            app.ticker.autoStart = false;
            app.ticker.add((delta) => {
                that.tickerLoop()
            });
        }
    }

    this.tickerLoop = () => {
        const app = this.app;
        const container = this.container;
        const {width = 800, height = 800} = app.screen;
        // 元素移动的速度属性
        container.vx = 10;
        container.vy = 3;
        // X轴
        if(this.status_x) {
          container.x += container.vx;
          if(container.x > width) {
            this.status_x = 0;
          }
        } else {
          container.x -= container.vx;
          if(container.x < 0) {
            this.status_x = 1;
          }
        }

        // Y轴
        if(this.status_y) {
          container.y += container.vy;
          if(container.y > height) {
            this.status_y = 0;
          }
        } else {
          container.y -= container.vy;
          if(container.y < 0) {
            this.status_y = 1;
          }
        }

    }

}