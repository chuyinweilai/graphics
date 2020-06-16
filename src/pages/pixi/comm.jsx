import * as PIXI from 'pixi.js';
function Init (obj = {} ,ele){
    let options = {
        width: 800, 
        height: 600,
        // autoDensity: 1,
        // autoStart: true,
        // transparent: false,
        // antialias:true,  // 抗锯齿
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1,
    }
    options = {...options,...obj};
    const { 
        width, 
        height, 
        backgroundColor, 
        resolution,
    } = options;
    PIXI.utils.sayHello('Hello Miku')

    // 实例化画布
    const app = new PIXI.Application({ width, height, backgroundColor , resolution, });
    const renderer = app.renderer;
    // 可同时创建多个
    ele.appendChild(renderer.view);


    // 修改画布参数
    app.renderer.backgroundColor = 0x061639

    // 导入图片背景
    // const background = PIXI.Sprite.from(require('./images/bg.jpg'));
    // background.width = app.screen.width;
    // background.height = app.screen.height;
    // app.stage.addChild(background);

    // const container = new PIXI.Container();

    // app.stage.addChild(container);

    // Create a new texture
    // const texture = PIXI.Texture.from('./../assets/imgs/bunnys.png');

    // Create a 5x5 grid of bunnies
    // for (let i = 0; i < 25; i++) {
    //     const bunny = new PIXI.Sprite(texture);
    //     bunny.anchor.set(0.5);
    //     bunny.x = (i % 5) * 40;
    //     bunny.y = Math.floor(i / 5) * 40;
    //     container.addChild(bunny);
    // }

    // Move container to the center
    // container.x = app.screen.width / 2;
    // container.y = app.screen.height / 2;

    // Center bunny sprite in local container coordinates
    // container.pivot.x = container.width / 2;
    // container.pivot.y = container.height / 2;

    // Listen for animate update
    // app.ticker.add((delta) => {
    //     // rotate the container!
    //     // use delta to create frame-independent transform
    //     container.rotation -= 0.01 * delta;
    // });

    return app

}

export { 
    Init,
}