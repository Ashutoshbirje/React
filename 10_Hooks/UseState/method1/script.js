let count = 0;

const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = `Number of Clicks: ${count}`;
});
