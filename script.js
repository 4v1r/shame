document.addEventListener('DOMContentLoaded', function() {
  const filters = document.querySelectorAll('.filter-button');
  const imageContainer = document.getElementById('image-container');
  let images = []; // Pour stocker toutes les images chargées

  // Charger les images à partir du fichier JSON
  fetch('images.json')
    .then(response => response.json())
    .then(data => {
      images = data; // Stocker les images chargées dans la variable images
      renderImages(images); // Afficher toutes les images initialement
    });

  // Ajouter un écouteur d'événements pour chaque bouton de filtre
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      const tag = this.getAttribute('data-tag');
      const filteredImages = tag === 'everything' ? images : images.filter(image => image.tags.includes(tag));
      renderImages(filteredImages); // Afficher les images filtrées
      toggleButtonStyle(); // Mettre à jour le style des boutons
    });
  });

  // Fonction pour afficher les images
  function renderImages(images) {
    imageContainer.innerHTML = ''; // Vider le conteneur d'images

    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image.src;
      imageContainer.appendChild(img);
    });
  }

  // Fonction pour mettre à jour le style des boutons en fonction de leur état sélectionné
  function toggleButtonStyle() {
    filters.forEach(filter => {
      const tag = filter.getAttribute('data-tag');
      const isActive = filter.classList.contains('active');
      const shouldBeActive = tag !== 'everything' && images.some(image => image.tags.includes(tag));

      if (shouldBeActive && !isActive) {
        filter.classList.add('active');
      } else if (!shouldBeActive && isActive) {
        filter.classList.remove('active');
      }
    });
  }
});
