  // Fade in the "Specialities" section when it scrolls into view

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
