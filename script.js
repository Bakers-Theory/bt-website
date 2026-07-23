  (function(){
    var detailsSection = document.querySelector('.details');
    if(!detailsSection) return;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduceMotion || !('IntersectionObserver' in window)){
      detailsSection.classList.add('in-view');
      return;
    }
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          detailsSection.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.2});
    observer.observe(detailsSection);
  })();

// Countdown to 15 Aug 2026 in hhh:mm:ss format
(function(){
  var el = document.getElementById('countdown');
  if(!el) return;
  var target = new Date(2026, 7, 15, 0, 0, 0); // August is month 7 (0-indexed)
  function pad(n, width){
    var s = String(n);
    while(s.length < width) s = '0' + s;
    return s;
  }
  function update(){
    var now = new Date();
    var diff = Math.max(0, target - now);
    var totalSec = Math.floor(diff / 1000);
    var hours = Math.floor(totalSec / 3600);
    var mins = Math.floor((totalSec % 3600) / 60);
    var secs = totalSec % 60;
    el.textContent = pad(hours, 3) + ':' + pad(mins,2) + ':' + pad(secs,2);
  }
  update();
  setInterval(update, 1000);
})();
