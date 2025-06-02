document.getElementById("toggle-more").addEventListener("click", function() {
    let extraCards = document.getElementById("extra-cards");
    extraCards.classList.toggle("hidden");
    this.textContent = extraCards.classList.contains("hidden") ? "See more" : "See less";
});
document.getElementById("toggle-vacations").addEventListener("click", function() {
    let extraVacationCards = document.getElementById("extra-vacation-cards");
    extraVacationCards.classList.toggle("hidden");
    this.textContent = extraVacationCards.classList.contains("hidden") ? "See more" : "See less";
});