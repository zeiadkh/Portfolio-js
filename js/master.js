//auto gallery

let imgs = document.querySelectorAll(".gallery img");
let imgcontainer = document.querySelector(".gallery .img-container");

imgcontainer.innerHTML = "";
imgcontainer.append(imgs[0]);

let x = 1;
let randomImg = setInterval(randomGallery, 2000);

function randomGallery() {
  imgcontainer.innerHTML = "";
  imgcontainer.append(imgs[x]);
  x < imgs.length - 1 ? x++ : (x = 0);
}
// end of auto gallery

// gallery btns

let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");

let c = 0;

function btn() {
  if (
    document.querySelector("span.selected").classList.contains("No") &
    (localStorage.getItem("span") == "No")
  ) {
    rightBtn.addEventListener("click", () => {
      imgcontainer.innerHTML = "";
      imgcontainer.append(imgs[++c]);
      if (c >= imgs.length - 1) {
        c = -1;
      }
    });
    
    leftBtn.addEventListener("click", () => {
      if (c <= 0) {
        c = imgs.length;
      }
      imgcontainer.innerHTML = "";
      imgcontainer.append(imgs[--c]);
    });
  }
}

//end of gallery btns

// gear box

let gear = document.querySelector(".gear");
let i = document.querySelector(".gear i");
let gearBox = document.querySelector(".gear-box");
let colors = document.querySelectorAll(".gear-box li");

colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--text-color",
      e.target.dataset.color
    );
    localStorage.setItem("selected", e.target.dataset.color);
    
    active(e, "active");
  });
});

gear.onclick = () => {
  gearBox.classList.toggle("open");
  i.classList.toggle("fa-spin");
};

let selected = localStorage.getItem("selected");

if (selected != null) {
  colors.forEach((li) => {
    li.classList.remove("active");
    li.dataset.color == selected ? li.classList.add("active") : "";
  });
  document.documentElement.style.setProperty(
    "--text-color",
    localStorage.getItem("selected")
  );
}

// reset button

document.querySelector(".gear-box .reset").onclick = ()=>{

  localStorage.clear();
  window.location.reload()

}
// end of gearbox

// gallery select

let spans = document.querySelectorAll(".auto-gallery span");

spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    active(e, "selected");
    localStorage.setItem("span", e.target.classList[0]);

    if (e.target.classList.contains("No")) {
      clearInterval(randomImg);
      btn();
    } else {
      randomImg = setInterval(randomGallery, 2000);

    }
  });
});

if (localStorage.getItem("span") != null) {
  document.querySelector(".selected").classList.remove("selected");
  document
    .querySelector(`.${localStorage.getItem("span")}`)
    .classList.add("selected");
  if (
    (localStorage.getItem("span") == "No") &
    document.querySelector("span.selected").classList.contains("No")
  ) {
    clearInterval(randomImg);
    btn();
  }
}

// skills  loading

let sec = document.querySelector(".skills");
let skills = document.querySelectorAll(".skills span");

window.onscroll = () => {
  let secOfSet = sec.offsetTop;

  let secOuterheight = sec.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.scrollY;

  if (this.scrollY > secOfSet  - windowHeight) {
    skills.forEach((skill) => skill.classList.add("scroll"));
  } else {
    skills.forEach((skill) => skill.classList.remove("scroll"));
  }
};

// second-gallery
let images = document.querySelectorAll(".second-gallery img");

images.forEach((img) => {
  img.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.style.cssText =
      "position: fixed;width: 100%;height: 100vh;left: 0;top:0;background: black;opacity: 0.9;text-align: center;z-index:2000";
    document.querySelector(".sec-cont").appendChild(overlay);
    let num = img.src[img.src.length - 5];
    let photo = document.createElement("img");
    photo.src = `imgs/screen${num}.png`;
    photo.style.cssText = " height: 760px";

    overlay.appendChild(photo);

    overlay.onclick = () => overlay.remove();
  });
});

// navigation

let navbullets = document.querySelectorAll(".nav .bullet");
let headerlinks = document.querySelectorAll(".header a");

function scrollToSection(links) {
  links.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let sec = document.querySelector(`.${e.target.dataset.sec}`);
      sec.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    })
  );
}

scrollToSection(navbullets);
scrollToSection(headerlinks);

function active(evt, name) {
  evt.target.parentElement.querySelectorAll(`.${name}`).forEach((ele) => {
    ele.classList.remove(`${name}`);
  });
  evt.target.classList.add(`${name}`);
}

let navOptions = document.querySelectorAll(".nav-show span");

navOptions.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    active(e, "selected");
    if (e.target.dataset.show === "no") {
      document.querySelector(".nav").style.display = "none";
      localStorage.setItem("opt", "none");
    } else {
      document.querySelector(".nav").style.display = "block";
      localStorage.setItem("opt", "block");
    }
  });
});

let optLocal = localStorage.getItem("opt");
if (optLocal == "none") {
  document.querySelector(".nav").style.display = "none";

  document.querySelector(".nav-show .Yes").classList.remove("selected");
  document.querySelector(".nav-show .No").classList.add("selected");
} else {
  document.querySelector(".nav").style.display = "block";
  document.querySelector(".nav-show .No").classList.remove("selected");
  document.querySelector(".nav-show .Yes").classList.add("selected");
}

document.querySelector(".contact input[type=submit]").onclick =function(e){
  e.preventDefault()
}

// toggle menu

let togl= document.querySelector(".header .toggle")

togl.onclick = ()=> {
  document.querySelector(".header ul").classList.toggle("toggled");
  togl.classList.toggle("active")
}



