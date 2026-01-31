document.addEventListener("DOMContentLoaded", function () {

  const counterEl = document.querySelector(".counter");

  if (!counterEl) {
    console.log("Counter element not found");
    return;
  }

  let counterNumber = 0;
  const target = 10000000;
  let hasStarted = false;

  function startCounter() {
    if (hasStarted) return;
    hasStarted = true;

    const updateCounter = setInterval(() => {
      counterNumber += 50000;
      counterEl.textContent = counterNumber.toLocaleString();

      if (counterNumber >= target) {
        counterEl.textContent = target.toLocaleString();
        counterEl.style.color = "#00CCAA";
        clearInterval(updateCounter);
      }
    }, 10);
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounter();
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  observer.observe(counterEl);

});