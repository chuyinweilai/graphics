/**
 * Three 的引入使用
 */
import * as THREE from 'https://cdn.skypack.dev/three@0.144.0';
// 实例化 Color
const color = new THREE.Color('rgba(255,0,0,1)');
const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 二维画笔
// const gl = canvas.getContext('2d');
// 三维画笔
const gl = canvas.getContext("webgl");
// 声明颜色
gl.clearColor(color.r, color.g, color.b, 1);
// 写入颜色
gl.clear(gl.COLOR_BUFFER_BIT);

!(function animation() {
  // 设置颜色偏移
  // HSL：色相、饱和度、亮度
  color.offsetHSL(0.001, 0.02, 0);
  // 声明颜色
  gl.clearColor(color.r, color.g, color.b, 1);
  // 写入颜色
  gl.clear(gl.COLOR_BUFFER_BIT);

  requestAnimationFrame(animation)
})()