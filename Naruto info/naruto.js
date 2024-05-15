let currentIndex = 0;
const images = [
  'Naruto info/narutoimage.png',
  'Naruto info/sakuraimg.jpg',
  'Naruto info/sasukeimage.png'
];

function changeImage(direction) {
  const imageElement = document.getElementById('naruto-image');

  if (direction === 'left') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else {
    currentIndex = (currentIndex + 1) % images.length;
  }

  imageElement.src = images[currentIndex];
}
function changeImage(direction) {
  const imageElement = document.getElementById('naruto-image');
  imageElement.classList.add('fading');

  setTimeout(() => {
    if (direction === 'left') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      currentIndex = (currentIndex + 1) % images.length;
    }

    imageElement.src = images[currentIndex];
    imageElement.classList.remove('fading');
  }, 300);
}
let originalText = document.getElementById('naruto-text').textContent;
  let newText = "Naruto possesses the ability to use the Rasengan, a powerful spinning sphere of chakra created through precise control and manipulation of chakra. This technique showcases Naruto's growth as a skilled ninja and his determination to master advanced jutsu.Throughout his journey, Naruto forms deep bonds with his peers, including Sasuke, Sakura, Kakashi, and Jiraiya, who play significant roles in shaping his character and guiding him towards his goals. These relationships highlight Naruto's capacity for empathy, loyalty, and the importance of friendship in his life.";
  function showNext() {
    document.getElementById('naruto-text').textContent = newText;
  }
  function showPrevious() {
    document.getElementById('naruto-text').textContent = originalText;
  }

