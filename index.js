document.getElementById("signin-btn").addEventListener("click", function() {
    window.location.href = "signin.html";
  });

document.getElementById("register-btn").addEventListener("click",()=>{
    window.location.href="register.html"
});

const show=document.getElementById("show");
const desti=document.getElementById("desti");

document.getElementById("desti").addEventListener("click",()=>{
show.classList.toggle("showed");
desti.innerText="Less Destination";
})

const clickpackage = document.getElementById("clickpackage");
const packageshow = document.getElementById("packageshow");

clickpackage.addEventListener("click", () => {
  packageshow.classList.toggle("showed1");
});

const aboutus = document.getElementById("aboutus");
aboutus.addEventListener("click", () => {
  console.log("Clicked on aboutus");
  window.location.href = "aboutus/index.html"
});



