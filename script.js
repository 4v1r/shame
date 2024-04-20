// Sample data for demonstration
const images = [
  { src: 'assets/asshole/asshole001.png', tags: ['asshole', 'egirl'] },
  { src: 'assets/wannabe/wannabe001.png', tags: ['wannabe', 'shitty-username'] },
  // Add more images with tags as needed
];

// Function to render images based on selected tags
function renderImages(selectedTags) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = ''; // Clear previous images

  images.forEach(image => {
    // Vérifiez si chaque étiquette sélectionnée correspond à au moins une des étiquettes de l'image
    if (selectedTags.some(tag => image.tags.includes(tag))) {
      const card = document.createElement('div');
      card.classList.add('card');
      const img = document.createElement('img');
      img.src = image.src;
      card.appendChild(img);
      imageContainer.appendChild(card);
    }
  });
}

// Function to handle search when tags are selected
document.getElementById('tag-filter').addEventListener('change', function() {
  const selectedTags = Array.from(this.selectedOptions).map(option => option.value);
  renderImages(selectedTags);
});

// Initial rendering with all images
renderImages([]);
