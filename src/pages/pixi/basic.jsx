/**
 * 功能:
 * 1、创建画布
 * 2、修改背景
 * 3、导入图片
 * 
 * 注意
 * 1、图片导入需要使用require方式
 * 2、图片导入方式: loader.add(路径).load();  PIXI.Texture.from(路径);
 * 3、使用loader加载图片，可以在加载完毕之后再调用后续方法。
 */


import * as PIXI from 'pixi.js';
import { Init } from './comm';

export default function PIXIJSFOO(ele) {
    this.app = null;
    this.ele = ele;
    this.imgUrl = 'https://www.kkkk1000.com/images/learnPixiJS-AnimatedSprite/dnf.png';

    this.init = (obj = {})=> {
        const app = Init(obj,ele);
        this.app = app;
        this.pixiLoader();
        // this.appLoader();
    }

    // Pixi.Loader.shared
    this.pixiLoader = () => {
        const app = this.app;
        const imgUrl = this.imgUrl;
        // const loader = PIXI.Loader.shared;
        app.loader.add("Gunner",imgUrl).load(setup);

        function setup (){
            let TextureCache = PIXI.utils.TextureCache;
            const base = TextureCache["Gunner"];
            let texture0 = new PIXI.Texture(base)
            texture0.frame = new PIXI.Rectangle('0,0,80,143');
            const verticesX = 10;
            const verticesY = 10;
            const plane = new PIXI.SimplePlane(base, verticesX, verticesY);
            // const plane1 = new PIXI.SimplePlane(texture0, verticesX, verticesY);
            plane.x = 100;
            plane.y = 100;
            
            // 通过 stage.addChild方法,向Pixi舞台中添加元素。
            app.stage.addChild(plane);
        }
    }

    // app.loader
    this.appLoader = () => {
        const app = this.app;

        // PIXI.Loader.shared
        app.loader
        .add("catPic", require("./images/cat.png"))
        .add("bunnys", require("./images/bunnys.png"))
        .load(setup);
        //This `setup` function will run when the image has loaded
        function setup(loader, resources) {

            
            console.log("app.loader.resources------>", app.loader.resources.monsters)
            const texture = app.loader.resources.catPic.texture;
            const texture1 = PIXI.Texture.from('bunnys');
            // 顶点位置
            const verticesX = 10;
            const verticesY = 10;
            const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);
            const plane1 = new PIXI.SimplePlane(texture1, verticesX, verticesY);

            plane.x = 100;
            plane.y = 100;
            
            // 通过 stage.addChild方法,向Pixi舞台中添加元素。

            app.stage.addChild(plane);
            app.stage.addChild(plane1);
        }
    }

}