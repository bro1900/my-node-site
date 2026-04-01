let timer = setInterval(yee, 12);
let opaque = 0;
function yee() {
    let cat = document.getElementById("car");

    opaque += 0.01;

    cat.style.opacity = opaque;
    if (opaque >= 1) {
        clearInterval(timer);
        opaque = 1;
    }
}

function resizeMasonry() {
  const grid = document.querySelector('#car');
  const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('gap'));

  grid.querySelectorAll('img').forEach(img => {
    const item = img.parentElement;
    const height = img.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
}

window.addEventListener('load', resizeMasonry);
window.addEventListener('resize', resizeMasonry);
