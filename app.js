
const height = document.getElementById('list');
const listHeight = document.getElementById('listHeight');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    if(height.clientHeight > 0){
        height.style.height = `0px`;
    }
    else{
        height.style.height = `${listHeight.clientHeight + 2}px` ;
    }
});