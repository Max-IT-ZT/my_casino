// Оголошення можливих символів для лотерейних барабанів
const symbols = ["🍒", "🍊", "🍇", "🍓", "🍉", "🍋", "🍎", "🍏"];

const button = document.getElementById("my-button");
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;
const maxDistance = 100; // Максимальна відстань на яку кнопка буде віддалятись від курсору

button.addEventListener("mousemove", (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  // Визначаємо відстань кнопки до курсора
  const buttonRect = button.getBoundingClientRect();
  const buttonX = buttonRect.left + buttonWidth;
  const buttonY = buttonRect.top + buttonHeight;
  const distanceX = cursorX - buttonX;
  const distanceY = cursorY - buttonY;

  // Обчислюємо зсув кнопки
  let translateX = 0;
  let translateY = 0;

  if (Math.abs(distanceX) < maxDistance) {
    translateX = (-distanceX / maxDistance) * maxDistance;
  } else {
    translateX = distanceX < 0 ? maxDistance : -maxDistance;
  }

  if (Math.abs(distanceY) < maxDistance) {
    translateY = (-distanceY / maxDistance) * maxDistance;
  } else {
    translateY = distanceY < 0 ? maxDistance : -maxDistance;
  }

  // Застосовуємо зсув до кнопки
  button.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
