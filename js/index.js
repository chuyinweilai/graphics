// 初始化着色器
const initShaders = (gl, vsSource, fsSource) => {
  // 创建程序对象
  const program = gl.createProgram();
  // 建立着色对象
  // 解析着色器脚本，并整合进程序对象
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  // 设置顶点着色到程序中
  gl.attachShader(program, vertexShader);
  // 设置片元着色器到程序中
  gl.attachShader(program, fragmentShader);


  // 关联 webgl 上下文和程序对象
  // 实现两种不同的语言通信
  gl.linkProgram(program);
  // 启动程序
  gl.useProgram(program);
  // 将程序挂载到上下文
  gl.program = program;
  return true;
}

// 解析着色器脚本
const loadShader = (gl, type, source) => {
  // 根据着色类型，建立着色器对象
  const shader = gl.createShader(type);
  // 将着色器源文件，传入着色器对象中
  gl.shaderSource(shader, source);
  // 编译着色器对象
  gl.compileShader(shader);
  // 返回着色器对象
  return shader;
}





/**
 * webgl 绘图
 */
// 实例化 Color
const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gl = canvas.getContext("webgl");

// 获取着色器脚本内容
const vsSource = document.querySelector('#vertexShader').innerText;
const fsSource = document.querySelector('#fragmentShader').innerText;

initShaders(gl, vsSource, fsSource);

// 清空绘图区
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

// 绘制
// gl.drawArrays(mode, first, count);
// mode: 绘制方式, 无论何种方式，都是基于点连接而成。
// first: 从哪个店开始绘制
// count: 指定绘制需要用到的点数
gl.drawArrays(gl.POINTS, 0, 1)