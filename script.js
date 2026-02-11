const btn = document.getElementById("spin-btn");
const symbolHeight = 80; // Висота одного символу (має збігатися з CSS)

btn.addEventListener("click", () => {
  for (let i = 1; i <= 3; i++) {
    const strip = document.getElementById(`strip${i}`);

    // 1. Вмикаємо "миттєве" повернення стрічки в самий низ (без анімації)
    strip.style.transition = "none";
    strip.style.transform = `translateY(0)`;

    // 2. Через 50 мілісекунд запускаємо плавну анімацію вгору
    setTimeout(() => {
      strip.style.transition = "transform 2.5s cubic-bezier(0.1, 0, 0.1, 1)";

      // Вибираємо випадковий символ (0, 1, 2, 3 або 4)
      const randomIndex = Math.floor(Math.random() * 5);

      // Розрахунок: крутимо на 20 символів вгору + додаємо випадковий індекс
      // Це гарантує, що ми зупинимося на символі, а не на порожньому місці
      const finalMove = (20 + randomIndex) * symbolHeight;

      strip.style.transform = `translateY(-${finalMove}px)`;
    }, 50);
  }
});
