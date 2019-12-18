const fe6 = {}

fe6.fetch = async function (method, path, obj) {
  const r = await window.fetch(path, {
    body: JSON.stringify(obj),
    method: method
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
