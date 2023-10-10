document.addEventListener("DOMContentLoaded", () => {

  const renderStars = () => {
    const numStars = 600;
    const space = document.querySelector(".Space");
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      // generate random sized stars to look more realistic
      if (i % 10 === 0) {
        star.classList.add("Space-star");
      } else if (i % 3 === 0) {
        star.classList.add("Space-starWithoutFlicker");
      } else if (i % 34 === 0) {
        star.classList.add("Space-starWithAlternateSize");
      } else {
        star.classList.add("Space-tinyStar");
      }
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      space.appendChild(star);
    }
  }
  const setMyWorkButtonEventListener = () => {
    const yellowButton = document.querySelector(".AboveTheFold-myWorkButtonWrapper");
    const projects = document.querySelector(".Projects");
    yellowButton.addEventListener("click", () => {
      projects.scrollIntoView({behavior: 'smooth'});
    })
  }

  renderStars()
  setMyWorkButtonEventListener()
})


