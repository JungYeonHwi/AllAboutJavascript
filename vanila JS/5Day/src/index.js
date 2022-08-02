let BODY = document.body;

BODY.innerHTML = "Hello!";
BODY.style.color = "white";

function handleResize() {
  if (window.innerWidth >= 1300) {
    BODY.style.backgroundColor = "yellow";
  } else if (window.innerWidth < 1300 && window.innerWidth > 800) {
    BODY.style.backgroundColor = "purple";
  } else {
    BODY.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleResize);
