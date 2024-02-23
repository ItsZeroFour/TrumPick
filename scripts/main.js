import "../styles/index.css";
import "../styles/main/_reset.css";
import "../styles/main/_vars.css";

const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Находим родительский элемент (li) для кнопки
    const listItem = this.closest("li");

    // Находим ответ внутри родительского элемента
    const answer = listItem.querySelector(".main__faq-main");
    const button = listItem.querySelector(".toggle-btn");

    // Инвертируем стиль отображения (показываем/скрываем)
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      answer.style.opacity = "1";
      button.classList.add("active");
    } else {
      answer.style.display = "none";
      answer.style.opacity = "0";
      button.classList.remove("active");
    }
  });
});

// Change theme
const themeButton = document.querySelector(".header__theme");
const page = document.querySelector(".page");

themeButton.addEventListener("click", () => {
  if (page.classList.contains("dark")) {
    page.classList.remove("dark");
  } else {
    page.classList.add("dark");
  }
});

// Open language list
const languageButton = document.querySelector(".header__language");
const langaugeList = document.querySelector(".header__language-list");

languageButton.addEventListener("click", () => {
  if (langaugeList.classList.contains("active")) {
    langaugeList.classList.remove("active");
  } else {
    langaugeList.classList.add("active");
  }
});
