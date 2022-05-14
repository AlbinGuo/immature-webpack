// import avatar from './avatar.png';
// import './test.scss'; // './index.css';

// var img = new Image();
// img.src = avatar;
// img.classList.add('avatar')

// var root = document.getElementById('root')
// // root.append(img);
// root.innerHTML = '<div class="iconfont icon-shoucang1"></div>'

import './style.css'

const btn = document.createElement('button')
btn.innerHTML = 'add item'
document.body.appendChild(btn)

btn.onclick = () => {
  const div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.appendChild(div)
}