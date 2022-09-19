// RGB 2 WebGL color
const colorTrans = (rgbaCss) => {
  // . 除回车外的所有字符
  // * 不限制个数
  // 整体含义 (.*) 捕捉括号中，除回车外的所有字符
  const reg = RegExp(/\((.*)\)/);
  // 获取数据
  const rgbStr = reg.exec(rgbaCss)[1];
  // 处理数据
  const rgba = rgbStr.split(',').map((n, index) => {
    if (index === 3) return parseInt(n);
    else return parseInt(n) / 255
  });

  return rgba;
}



/**
 * WebGL 的基础使用
 */
const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 二维画笔
// const gl = canvas.getContext('2d');
// 三维画笔
const gl = canvas.getContext("webgl");

const [r, g, b, a] = colorTrans('rgba(255,100,0,1)');
console.log(r, g, b, a)

// 声明颜色
gl.clearColor(r, g, b, a);
// 写入颜色
gl.clear(gl.COLOR_BUFFER_BIT);