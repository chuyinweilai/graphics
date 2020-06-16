/**
 * inActive 时，任何 props 变化都不会导致组件渲染。
 * 从 inActive 切换到 active 时，之前作用于组件的 props 要立即生效。
 * 如果切换到 active 后 props 没有变化，也不应该触发重渲染。
 * 从 active 切换到 inActive 后不应触发渲染，且立即阻塞后续重渲染。
 */

 import React, { Component } from 'react';

 class RenderWhenActive extends Component{
     shouldComponentUpdate(nextProps){
         return nextProps.active;
     }

     render(){
         return this.props.children
     }
}
