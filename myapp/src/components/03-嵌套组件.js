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
class Tabbar extends Component {
  render () {
    return (
      <div>
        <div>
          这是tabbar组件
        <div>
          这是tabbar组件的子组件
        </div>
        </div>
      </div>
    )
  }
}

export default class App extends Component {
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
