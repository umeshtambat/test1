function mycolor(color){
  let h1=document.querySelector("h1");
  h1.style.color=color;
}

function Maximize(p1) {
  
}

function action(action){
  let pref = document.querySelector("#pid");
  pref.style.fontSize = action;

}

function todo(x){
  let pref=document.querySelector("img");
  let newref= "https://picsum.photos/id/"  + x + "/400/200";
  // let newref= `https://picsum.photos/id/ ${ x } /400/200`;
  pref.src=newref;
}

function applyImage(p1) {
  let imgref = document.querySelector("img");
  // let newsrc = "https://picsum.photos/id/" + p1 + "/300";
  let newsrc = `https://picsum.photos/id/ ${ p1} /400/200`;
  imgref.src = newsrc;
}


