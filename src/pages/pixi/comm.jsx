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

    return app

}

export { 
    Init,
}