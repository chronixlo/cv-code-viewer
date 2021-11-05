import "./splash.css";

export default function splash(callback) {
  const splash = document.querySelector("#splash");

  const init = () => {
    document.body.style.backgroundImage = `url(${bg.src}`;

    callback();

    splash.classList.add("hide");

    setTimeout(() => splash.parentElement.removeChild(splash), 1000);
  };

  const bg = document.createElement("img");
  bg.src = "./bg.jpg";

  bg.addEventListener("load", init);
  bg.addEventListener("error", init);
}
