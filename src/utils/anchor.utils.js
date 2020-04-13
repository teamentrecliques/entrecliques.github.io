function scrollTo() {
  const anchorsEl = document.querySelectorAll('[data-anchor]');

  const anchors = Array.from(anchorsEl);
  anchors.every(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(el.getAttribute('data-anchor'));
      const { scrollY } = window;
      const [{ top: targetPosition }] = target.getClientRects();

      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: targetPosition + scrollY,
      });
    });
    return true;
  });
}

export default { scrollTo };
