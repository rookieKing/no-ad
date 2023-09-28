console.log('--- blog');

const el = document.createElement('script');
el.src = chrome.runtime.getURL('csdn.net/inject.js');
el.onload = function () {
  // 执行后移除自身
  this.remove();
};
document.body.appendChild(el);

window.addEventListener('load', () => {
  // 未登录时 直接复制代码
  document.querySelectorAll('.hljs-button.signin').forEach(btn => {
    btn.setAttribute('data-title', '复制');
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.parentElement.innerText);
      btn.setAttribute('data-title', 'Copied!');
    }, false);
    btn.addEventListener('mouseleave', () => {
      btn.setAttribute('data-title', '复制');
    });
  });
  // 自动展开代码
  document.querySelectorAll('.look-more-preCode').forEach(el => el.click())
});
