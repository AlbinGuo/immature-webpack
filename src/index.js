// import avatar from './avatar.png';
// import './test.scss'; // './index.css';

// var img = new Image();
// img.src = avatar;
// img.classList.add('avatar')

// var root = document.getElementById('root')
// // root.append(img);
// root.innerHTML = '<div class="iconfont icon-shoucang1"></div>'

// import './style.css'

// const btn = document.createElement('button')
// btn.innerHTML = 'add item'
// document.body.appendChild(btn)

// btn.onclick = () => {
//   const div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// import counter from './hmr/counter'
// import number from './hmr/number'

// counter()
// number()

// if(module.hot) {
//   module.hot.accept('./hmr/number', () => {
//     const num = document.getElementById('number')
//     document.body.removeChild(num)
//     number()
//   })
// }

// import {add} from './tree-shaking/math'
// add(1,5)

// 同步代码分割
// import _ from 'loadsh'
// console.log(_.join(['a', 'b', 'c'], '~'))

// 异步代码分割
function getComponent() {
  return import('loadsh').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['aa', 'bb', 'cc'], '~')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})