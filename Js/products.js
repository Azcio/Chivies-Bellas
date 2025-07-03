document.querySelectorAll(".flip-wrapper").forEach((wrapper) => {
  const front = wrapper.querySelector(".front-side");
  const back = wrapper.querySelector(".back-side");

  front.addEventListener("click", () => {
    wrapper.classList.add("flipped");
  });

  back.addEventListener("click", () => {
    wrapper.classList.remove("flipped");
  });
});
