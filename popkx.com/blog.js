// 移除复制时的提示信息
window.addEventListener('load', () => {
  var el = document.createElement('script');
  el.type = 'text/javascript';
  el.innerHTML = 'document.body.oncopy = null;';
  document.body.appendChild(el);
});
