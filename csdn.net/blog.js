console.log('--- blog');
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
});
