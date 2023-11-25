const theme = document.querySelector(".theme");
const circle = document.querySelector(".circle");
const main = document.querySelector(".main");
let currentTheme = localStorage.getItem("Theme")||"light";
if(currentTheme === "dark"){  
   darkTheme();
}
else{
    lightTheme();
}

theme.addEventListener("click",()=>{
    if(theme.classList.contains("dark") && currentTheme === "dark"){
        lightTheme();
    }
    else{
        darkTheme();
    }
})
function lightTheme(){
    currentTheme = "light";
    localStorage.setItem("Theme",currentTheme);
    theme.classList.remove("dark");
    circle.style.marginLeft = "5px";
    theme.classList.remove("darkTheme");
    circle.classList.remove("darkCircle"); 
}
function darkTheme(){
    currentTheme = "dark";
    localStorage.setItem("Theme",currentTheme);
    theme.classList.add("dark");
    circle.style.marginLeft = "35px";
    theme.classList.add("darkTheme");
    circle.classList.add("darkCircle"); 
}

