import "./style.scss";
function component() {
  const element = document.createElement("div");

  element.innerHTML = "and it is cool";
  element.classList.add("myDiv");
  var img = document.createElement("img");
  img.src = "./images/cover.jpg";
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
