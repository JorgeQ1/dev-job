let icon = document.getElementsByClassName("toggle-button");

icon.onclick = function(){
    document.body.classList.toggle("toggle-button");
    if (document.body.classList.contains("toggle-button")){
        icon.src = "/images/dark.png";
    }else{
        icon.src = "/images/light.png"
    }
}