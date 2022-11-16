import React, { Component } from 'react'

const Content = () =>
  <div>
    <span>中心内容（子组件）</span>
  </div>

export default class APP extends Component {
  render () {
    const num=10
    return (
      <div>
        <span>APP</span>
        <Content></Content>
    <span>
          {20 + 20-num}
          {20 + 20-num>80?'是的大于80':'不!小于80'}
    </span>
      </div>
    )
  }
}
