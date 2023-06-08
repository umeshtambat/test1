function applyColor(p1) {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = p1;
}

function resetColor() {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = "black";
}

function applyFont(p1) {
  let pref = document.querySelector("#pid1");
  pref.style.fontSize = p1;
}

function applyImage(p1) {
  let imgref = document.querySelector("img");
  // let newsrc = "https://picsum.photos/id/" + p1 + "/300";
  let newsrc = `https://picsum.photos/id/${p1}/300`;
  imgref.src = newsrc;
}


function Image1(p1) {
  let imgref = document.querySelector("#hello");
  // let newsrc = "https://picsum.photos/id/" + p1 + "/300";
  let newsrc = `https://picsum.photos/id/${p1}/300`;
  imgref.src = newsrc;
}