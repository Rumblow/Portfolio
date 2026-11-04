document.getElementById('y').textContent = new Date().getFullYear();

(function(){
  var picker = document.getElementById('theme-picker');
  var availableThemes = Array.from(picker.options).map(function(option){ return option.value; });
  var theme = 'original';
  try {
    var savedTheme = window.localStorage.getItem('portfolio-theme');
    if (availableThemes.indexOf(savedTheme) !== -1) theme = savedTheme;
  } catch (error) {
    console.warn('No se pudo recuperar el tema guardado; se usará el tema original.', error);
  }
  document.documentElement.dataset.theme = theme;
  picker.value = theme;

  picker.addEventListener('change', function(){
    if (availableThemes.indexOf(picker.value) === -1) return;
    document.documentElement.dataset.theme = picker.value;
    try {
      window.localStorage.setItem('portfolio-theme', picker.value);
    } catch (error) {
      console.warn('No se pudo guardar el tema; seguirá activo mientras esta página permanezca abierta.', error);
    }
  });
})();

// Una sola animación: el título respira como un cartel de 1969
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var t = document.getElementById('turb'), s = 0;
  function tick(){
    s += 0.012;
    t.setAttribute('baseFrequency', (0.012 + Math.sin(s) * 0.004) + ' ' + (0.02 + Math.cos(s * 0.8) * 0.005));
    requestAnimationFrame(tick);
  }
  tick();
})();
