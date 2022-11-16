/* class Test {
  constructor() {
    this.a = 1;
  }

  testa () {
    console.log('testa');
  }
}


//  ChildTest extends Test
// 表示ChildTest继承Test中的类等内容
class ChildTest extends Test {

  testb () {
    console.log('testb');
  }
}

var obj = new ChildTest()
obj.testa()
console.log(obj.a); */

import React from "react";

class firstComponents extends React.Component {
  render () {
    return (
       <div>
      <div>这是我创建的第一个组件！</div >
      <div>这是我创建的第一个组件！</div >
      <div>这是我创建的第一个组件！</div >
      </div>
    )
  }
}


export default firstComponents