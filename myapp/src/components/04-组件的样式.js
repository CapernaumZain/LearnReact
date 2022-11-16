import React, { Component } from 'react'
import './css/组件样式.css'

const Content = () =>
  <div>
    <span>中心内容（子组件）</span>
  </div>

export default class APP extends Component {
  render () {
    const num = 10
    const style ={
      backgroundColor: 'yellow'
    }
    return (
      <div>
        <span>APP</span>
        <Content></Content>
    <span style={style}>
          {20 + 20-num}
          {20 + 20-num>80?'是的大于80':'不!小于80'}
        </span>
        <div className='active'>
          组件的引用样式展示！！
        </div>
        <div>
          <label htmlFor='userName'>
            用户名：
            <input type='text' id='userName'>
            </input>
          </label>
        </div>
      </div>
    )
  }
}
