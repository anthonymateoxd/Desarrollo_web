document.addEventListener('DOMContentLoaded', function () {
  // Play theme song
  const themeSong = document.getElementById('southpark-theme');
  themeSong.volume = 0.3;
  themeSong.play();

  // Character buttons
  document
    .querySelector('#cartman button')
    .addEventListener('click', function () {
      const cartman = document.getElementById('cartman');
      cartman.classList.add('twerking');
      setTimeout(() => cartman.classList.remove('twerking'), 1000);

      const speech = cartman.querySelector('.speech-bubble');
      speech.textContent = "SCREW YOU GUYS, I'M GOING HOME!";
    });

  document
    .querySelector('#kenny button')
    .addEventListener('click', function () {
      const kenny = document.getElementById('kenny');
      kenny.classList.add('dead');

      const speech = kenny.querySelector('.speech-bubble');
      speech.textContent = 'Oh my God! They killed Kenny!';
      speech.style.backgroundColor = 'red';
      speech.style.color = 'white';

      setTimeout(() => {
        kenny.classList.remove('dead');
        kenny.style.opacity = '1';
        speech.textContent = '...';
        speech.style.backgroundColor = 'white';
        speech.style.color = '#333';
      }, 2000);
    });

  document.querySelector('#stan button').addEventListener('click', function () {
    const stan = document.getElementById('stan');
    stan.classList.add('raining');

    const speech = stan.querySelector('.speech-bubble');
    speech.textContent = "Dude, it's raining tacos!";

    setTimeout(() => {
      stan.classList.remove('raining');
      speech.textContent = 'Dude, this is pretty messed up...';
    }, 2000);
  });

  document.querySelector('#kyle button').addEventListener('click', function () {
    const kyle = document.getElementById('kyle');
    kyle.style.transform = 'translateX(50px)';

    const speech = kyle.querySelector('.speech-bubble');
    speech.textContent = "KYLE'S MOM'S A BIG FAT BITCH!";
    speech.style.backgroundColor = 'green';
    speech.style.color = 'white';

    setTimeout(() => {
      kyle.style.transform = '';
      speech.textContent = 'You bastard!';
      speech.style.backgroundColor = 'white';
      speech.style.color = '#333';
    }, 1500);
  });

  // Control buttons
  document.getElementById('twerk-btn').addEventListener('click', function () {
    const characters = document.querySelectorAll('.character');
    characters.forEach(char => char.classList.add('twerking'));

    setTimeout(() => {
      characters.forEach(char => char.classList.remove('twerking'));
    }, 2000);
  });

  document.getElementById('kill-kenny').addEventListener('click', function () {
    const kenny = document.getElementById('kenny');
    kenny.classList.add('dead');

    const speech = kenny.querySelector('.speech-bubble');
    speech.textContent = 'You bastards!';
    speech.style.backgroundColor = 'red';
    speech.style.color = 'white';

    setTimeout(() => {
      kenny.classList.remove('dead');
      kenny.style.opacity = '1';
      speech.textContent = '...';
      speech.style.backgroundColor = 'white';
      speech.style.color = '#333';
    }, 2000);
  });

  document.getElementById('reset-btn').addEventListener('click', function () {
    const characters = document.querySelectorAll('.character');
    characters.forEach(char => {
      char.classList.remove('twerking', 'dead', 'raining');
      char.style.transform = '';
      char.style.opacity = '1';

      const speech = char.querySelector('.speech-bubble, .speech-bubble');
      speech.textContent =
        char.id === 'kenny'
          ? '...'
          : char.id === 'cartman'
          ? 'Respect my authoritah!'
          : char.id === 'stan'
          ? 'Dude, this is pretty messed up...'
          : 'You bastard!';
      speech.style.backgroundColor = 'white';
      speech.style.color = '#333';
    });
  });
});
