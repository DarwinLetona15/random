// Música de fondo
var bgMusicURL = './FELIZ NAVIDAD.mp3';
var bgMusicControls = true;

function initAudio() {
  if (bgMusicURL) {
    const musicContainer = document.getElementById('music-container');
    musicContainer.innerHTML = `
      <audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop></audio>
    `;
  }
}

document.addEventListener('DOMContentLoaded', initAudio);
