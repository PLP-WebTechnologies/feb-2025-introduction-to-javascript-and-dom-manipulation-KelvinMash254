// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const infoText = document.getElementById('info-text');

changeTextBtn.addEventListener('click', () => {
  infoText.textContent = 'Text has been changed dynamically!';
  infoText.style.color = 'blue'; // Modify CSS styles via JavaScript
});

// Add or remove an element when button clicked
const toggleBoxBtn = document.getElementById('toggle-box-btn');
let boxExists = false;

toggleBoxBtn.addEventListener('click', () => {
  if (!boxExists) {
    const box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a dynamically added box!';
    box.style.border = '2px solid green';
    box.style.padding = '10px';
    box.style.marginTop = '10px';
    document.body.appendChild(box);
    boxExists = true;
  } else {
    const box = document.getElementById('dynamic-box');
    if (box) box.remove();
    boxExists = false;
  }
});
