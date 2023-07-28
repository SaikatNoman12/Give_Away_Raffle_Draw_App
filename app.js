

window.onload = function(){

    /* --- This variable is use for Give Away Raffle Draw --- */
    const textArea = document.getElementById('textarea');
    const btn = document.getElementById('showListBtn');
    const listMain = document.getElementById('list');
    const listHeight = document.getElementById('listHeight');
    const display = document.querySelector('.display');
    const winner_select = document.getElementById('winner_select');
    const first_winner = document.getElementById('first_winner');
    const second_winner = document.getElementById('second_winner');
    const third_select = document.getElementById('third_select');

    
    /**
     * This listener use for show and hide un-order list.
    */
   let participants = [];
    
    btn.addEventListener('click', function(){
        listMain.style.height = listMain.offsetHeight > 0 ? `0px` : `${listHeight.offsetHeight + 1}px` ;
    });
    
    
    textArea.addEventListener('keypress', function($event){
        if($event.key === 'Enter' && $event.target.value.trim()){
            let names = $event.target.value.split(', ');
            if(names[0] !== ''){
                participants = [];

                if(listHeight.children.length > 0){
                    listHeight.innerHTML = '';    
                }

                names.forEach(name => {
                    participants.push(name);
                    let item = showList(name);
                    listHeight.appendChild(item);
                    $event.target.value = '';
                });
            }
        }
    })

}


function showList(name){
    const li = document.createElement('li');
    li.innerText = name;
    return li;
}