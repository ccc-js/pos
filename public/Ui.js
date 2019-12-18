const Ui = {}

/*
Ui.id = function(path) {
  return document.getElementById(path)
}

Ui.one = function(path) {
  return document.querySelector(path)
}

Ui.html = function (path, html) {
  document.querySelectorAll(path).forEach((node)=>node.innerHTML = html)
}

*/

Ui.showPanel = function (name) {
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  fe6.id(name).style.display = 'block'
}

Ui.openNav = function () {
  fe6.id('leftNav').style.width = '250px'
}

Ui.closeNav = function () {
  fe6.id('leftNav').style.width = '0'
}

Ui.show = function (html) {
  fe6.id('main').innerHTML = html
}

Ui.title = function (title) {
  fe6.id('title').innerHTML = title
}
