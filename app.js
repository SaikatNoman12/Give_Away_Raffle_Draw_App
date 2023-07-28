

window.onload = function(){
    
    /* --- This is use for  --- */
    const height = document.getElementById('list');
    const listHeight = document.getElementById('listHeight');
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', function(){
        height.style.height = height.clientHeight > 0 ? `0px` : `${listHeight.clientHeight + 2}px` ;
    });



}