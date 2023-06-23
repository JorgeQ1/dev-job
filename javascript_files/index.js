// const toggler = document.getElementById("toggler");
const lightToggler = document.getElementById("light-toggler");
const darkToggler = document.getElementById("dark-toggler");
const body = document.body;

toggler.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');

    lightToggler.classList.toggle('active-theme');
    darkToggler.classList.toggle('active-theme');
    
});

// const toggler = document.getElementById("toggler");
// toggler.addEventListener('click', ()=>{
//     lightToggler.classList
// });    

 
// const nightButton = document.querySelector(".button");
// nightButton.addEventListener('click', () => {
//     nightButton.querySelector('i').classList.toggle('fa-sun');
//     nightButton.querySelector('i').classList.toggle('fa-moon');
//     document.body.classList.toggle('dark');

//     var set;
//     if(document.body.classList.contains('dark')){
//         console.log('dark mode');
//         set = "DARK";
//     }else{
//         console.log('light mode');
//         set = "LIGHT";
//     }
//     localStorage.setItem("ModeTheme", JSON.stringify(set));
// });

// let GetMode = JSON.parse(localStorage.getItem("ModeTheme"));
// if(GetMode === "DARK"){
//     document.body.classList = 'dark';
// }

// window.addEventListener('load', () => {
//     if(document.body.classList.contains('dark')){
//         nightButton.querySelector('i').classList.add('fa-sun');
//     }else
//     {
//         nightButton.querySelector('i').classList.add('fa-moon');
//     }
// })

// const toggleTheme = document.getElementsByClassName("dark-mode");
// function saveLandingPage(){
//     localStorage.setItem("landing-page", toggleTheme.innerHTML(toggleTheme));
// };

// function showTheme(){
//     toggleTheme.innerHTML == localStorage.getItem("landing-page");
// }
