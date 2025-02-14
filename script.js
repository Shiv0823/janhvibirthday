// Falling Photos
const fallingPhotosContainer = document.getElementById('falling-photos');
const photos = [
  'photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg',
  'photo6.jpeg', 'photo7.jpeg', 'photo8.jpeg', 'photo9.jpeg', 'photo10.jpeg',
  
];

function createFallingPhoto() {
  const photo = document.createElement('div');
  photo.classList.add('falling-photo');
  photo.style.left = `${Math.random() * 100}vw`;
  photo.style.animationDuration = `${Math.random() * 5 + 5}s`;
  photo.style.backgroundImage = `url(${photos[Math.floor(Math.random() * photos.length)]})`;
  fallingPhotosContainer.appendChild(photo);

  // Remove photo after animation ends
  setTimeout(() => {
    photo.remove();
  }, 10000);
}

// Create falling photos every 500ms
setInterval(createFallingPhoto, 500);

// Party Popper Effect
function partyPopper() {
  const partyPopperContainer = document.getElementById('party-popper');
  for (let i = 0; i < 50; i++) {
    const popper = document.createElement('div');
    popper.classList.add('party-popper');
    popper.style.left = `${Math.random() * 100}vw`;
    popper.style.top = `${Math.random() * 100}vh`;
    popper.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    popper.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    partyPopperContainer.appendChild(popper);

    // Remove popper after animation ends
    setTimeout(() => {
      popper.remove();
    }, 1000);
  }
}