function addImage(url) {
  const grid = document.getElementById('masonry-grid');
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = url;
  card.appendChild(img);
  grid.appendChild(card);
}

addImage('/assets/images/shame001.png');
