const checking = document.getElementById("screen-checking");
const action = document.getElementById("screen-action");
const result = document.getElementById("screen-result");

const sendBtn = document.getElementById("btn-send");
const retakeBtn = document.getElementById("btn-retake");
const restartBtn = document.getElementById("btn-restart");

const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");

function show(screenToShow) {
  [checking, action, result].forEach((el) => el.classList.add("hidden"));
  screenToShow.classList.remove("hidden");
}

function runFakeQualityCheck() {
  show(checking);
  const delayMs = 1000 + Math.floor(Math.random() * 1001); // 1000..2000 ms

  window.setTimeout(() => {
    show(action);
  }, delayMs);
}

sendBtn.addEventListener("click", () => {
  show(result);
  resultTitle.textContent = "Отправляем...";
  resultText.textContent = "Имитация текущего сабмита без изменений бизнес-логики.";
});

retakeBtn.addEventListener("click", () => {
  show(result);
  resultTitle.textContent = "Переснимаем фото";
  resultText.textContent = "Пользователь возвращается на шаг выбора и загрузки фото.";
});

restartBtn.addEventListener("click", runFakeQualityCheck);

runFakeQualityCheck();
