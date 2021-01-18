if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark')
} else {
  document.querySelector('html').classList.remove('dark')
}

document.querySelector('body').style.cssText = `font-variant-ligatures: ${
  localStorage.ligature !== 'false' ? 'common-ligatures' : 'none'
};`

document.querySelector(
  '#search-box'
).style.cssText = `font-variant-ligatures: ${
  localStorage.ligature !== 'false' ? 'common-ligatures' : 'none'
};`
