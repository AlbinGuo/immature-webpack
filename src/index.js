import avatar from './avatar.png';
console.log('--avatar', avatar)
var img = new Image();
img.src = avatar;
var root = document.getElementById('root')
root.append(img);