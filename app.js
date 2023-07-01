const adviceIDspan = document.querySelector(".advice-number");
const advice = document.getElementById("random-text");
const button = document.getElementsByClassName("button-border")[0];
const btn = document.getElementById("button");
const warning = document.getElementsByClassName("warning")[0];

const APIurl = "https://api.adviceslip.com/advice";

let lastClickTime = 0;
btn.addEventListener("click", () => {
  const currentTime = Date.now();

  if (currentTime - lastClickTime < 2000) {
    warning.textContent = "Wait for 2 seconds...!";
    warning.style.border = "1px solid var(--Neon-Green)";
    warning.style.borderRadius = "10px";
    warning.style.padding = "10px";
    return;
  }
  lastClickTime = currentTime;

  fetch(APIurl)
    .then((response) => response.json())
    .then((data) => {
      adviceIDspan.textContent = `#${data.slip.id}`;
      advice.textContent = `${data.slip.advice}`;

      setTimeout(() => {
        warning.textContent = "";
        warning.style.border = "";
      }, 2000);
    })
    .catch((error) => {
      console.log("Error");
    });
});
