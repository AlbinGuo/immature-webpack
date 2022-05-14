function counter() {
  const div = document.createElement('div')
  div.setAttribute('id', 'counter')
  div.innerHTML = 1
  div.onclick = () => {
    div.innerHTML++
  }
  document.body.appendChild(div)
}

export default counter