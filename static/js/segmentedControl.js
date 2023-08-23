const segments = document.querySelectorAll('.segment');
const control = document.querySelector('.segmented-control');

let activeIndex = 0;

segments.forEach((segment, index) => {
  segment.addEventListener('click', function() {
    if (index !== activeIndex) {
      segments[activeIndex].classList.remove('active');
      segment.classList.add('active');
      activeIndex = index;
    }
  });
});
