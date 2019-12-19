const fe6 = {}

fe6.postJson = async function (path, obj) {
  const r = await window.fetch(path, {
    body: JSON.stringify(obj),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return r
}

fe6.onhashchange = async function () {
  const hash = window.location.hash.substring(1)
  const handler = fe6.rmap[hash]
  console.log('onhashchange:hash = ', hash)
  if (handler != null) handler(hash)
}

fe6.router = function (map) {
  fe6.rmap = map
  window.addEventListener('hashchange', fe6.onhashchange)
  window.addEventListener('load', fe6.onhashchange)
}

fe6.go = function (hash) {
  window.location.hash = hash
}

fe6.id = function (id) {
  return document.getElementById(id)
}

fe6.one = function (path) {
  return document.querySelector(path)
}

fe6.all = function (path) {
  return document.querySelectorAll(path)
}

fe6.each = function (path, f) {
  fe6.all(path).forEach(f)
}

fe6.html = function (path, html) {
  fe6.each(path, (node) => { node.innerHTML = html })
}

fe6.showPanel = function (name) {
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  fe6.id(name).style.display = 'block'
}

fe6.openNav = function () {
  fe6.one('#leftNav').style.width = '250px'
}

fe6.closeNav = function () {
  fe6.one('#leftNav').style.width = '0'
}

fe6.show = function (html) {
  fe6.one('#main').innerHTML = html
}

fe6.title = function (title) {
  fe6.one('#title').innerHTML = title
}

