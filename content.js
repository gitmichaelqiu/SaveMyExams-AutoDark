function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function setSaveMyExamsTheme(theme) {
  try {
    localStorage.setItem('Sme.theme', theme);
  } catch (e) {
    console.warn('Failed to set Sme.theme in localStorage:', e);
  }
}

function applyTheme() {
  const theme = getSystemTheme();
  setSaveMyExamsTheme(theme);
  document.documentElement.setAttribute('data-theme', theme);
}

applyTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
