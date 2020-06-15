const toogle = document.querySelector('.Sorting');
const shavucha = document.querySelector('.block')
toogle.addEventListener('click', function(event){
if(shavucha.classList.contains("hide")){
    shavucha.classList.remove("hide");
}
else{
    shavucha.classList.add("hide");
}
});