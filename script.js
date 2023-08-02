document.addEventListener("DOMContentLoaded", function() {
  const daysOfWeek = ["domingo","segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira","sabado"];
  const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  console.log(today)
  const slider = document.querySelector(".slider");
  const daysContainer = document.querySelector(".days-container");
  const dayIndicator = document.querySelector(".day-indicator");

  // Adicionar as siglas dos dias úteis no topo da div "days-container" com um indicador para a div atual
  daysOfWeek.forEach((day, index) => {
    const daySpan = document.createElement("span");
    daySpan.textContent = day.slice(0, 3).toUpperCase();
    daySpan.addEventListener("click", () => showDay(index));
    dayIndicator.appendChild(daySpan);
    if (index === today) {
      daySpan.classList.add("current");
    }
  });

  // Mostrar a div correspondente ao dia atual
  function showDay(index) {
    index = index % 7;
    const slideWidth = document.querySelector(".second").clientWidth;
    const offset = index * -slideWidth;
  
    daysContainer.style.transform = `translateX(${offset}px)`;
  
    const currentDaySpans = dayIndicator.querySelectorAll("span");
    currentDaySpans.forEach((span, i) => {
      if (i === index) {
        span.classList.add("current");
      } else {
        span.classList.remove("current");
      }
    });
  }

  // Mostrar a div correspondente ao dia atual ao carregar a página
  showDay(1);
});
