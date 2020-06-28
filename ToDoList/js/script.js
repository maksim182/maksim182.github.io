const sorting = document.querySelector('.Sorting');
const block = document.querySelector('.block');
sorting.addEventListener('click', function(event){
if(block.classList.contains("hide")){
    block.classList.remove("hide");
}else{
    block.classList.add("hide");
    // block.classList.add("hide");
}
});

// add list
const BtnAddTask = document.querySelector('.Add-Task');
BtnAddTask.addEventListener('click', function(){
    let list = document.querySelector('.Lists');
    
    list.innerHTML += (window.list)

    let BtnDisableList = document.querySelectorAll('.plas');
    BtnDisableList.forEach(item =>{
        item.addEventListener('click', function(){
            item.parentNode.parentNode.remove()
        });
    });
});





// let dif = document.querySelectorAll('.difficulty');
// dif.forEach((item) =>{
//     console.log(item.value);
    
// });