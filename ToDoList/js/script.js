const sorting = document.querySelector('.Sorting');
const block = document.querySelector('.block');
sorting.addEventListener('click', function(event){
    console.log("hhh");
if(block.classList.contains("hide")){
    block.classList.remove("hide");
    console.log("a");
}else{
    block.classList.add("hide");
    // block.classList.add("hide");
    console.log("b");
}
});