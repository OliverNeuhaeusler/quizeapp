const buttons = document.querySelectorAll('.card__button');
const answerTexts = document.querySelectorAll('.card__answer');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    answerTexts[i].classList.toggle('hidden');
  });
}
