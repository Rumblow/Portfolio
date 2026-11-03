document.getElementById('y').textContent = new Date().getFullYear();
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
