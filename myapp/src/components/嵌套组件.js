import React, { Component } from 'react'

const Child = () =>
  <div>孙子组件</div>

const Navbar = () =>
  <div>
    <span>这是头部组件(嵌套孙子组件)：</span>
    <Child/>
  </div>
const Swiper = () =>
  <div>这是轮播图组件</div>
const Tabbar = () =>
  <div>这是底部组件</div>

export default class APP extends Component {
  render() {
    return (
      <div>
        <span>嵌套组件：</span>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
