const f = document.getElementById("no");
var w = window.innerWidth;
var h = window.innerHeight;
document.addEventListener(
  "mouseover",
  (ev) => {
    var mouseY = ev.clientY;
    var mouseX = ev.clientX;
    const rect = f.getBoundingClientRect();
    var diffY = 11500 / -(mouseY - (rect.bottom - rect.top )/2);
    var diffX = 11500 / -(mouseX - (rect.right - rect.left)/2);
    console.log(diffY);
    console.log(diffX);
    f.style.transform = `translateY(${diffY}vw)`;
    f.style.transform += `translateX(${diffX}vw)`;
    if(rect.top < 0){
      f.style.top = h - 10;
    }
    else if(rect.bottom > h){
      f.style.top = 5+'px';
      console.log("help!");
    }
    if(rect.right > w){

    }
    else if(rect.left < 0){

    }
  },
  false,
);
