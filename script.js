const answerBtns = document.querySelectorAll('.answer-btn');
answerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    btn.textContent = answer.classList.toggle('show') ? 'Скрыть ответ' : 'Показать ответ';
  });
});