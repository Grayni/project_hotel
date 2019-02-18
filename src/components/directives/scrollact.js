export default {
  inserted: (el, binding, vnode) => {
    let f = (evt) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
}
