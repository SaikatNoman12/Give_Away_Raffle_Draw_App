

window.onload = function(){

    /* --- This variable is use for Give Away Raffle Draw --- */
    const textArea = document.getElementById('textarea');
    const btn = document.getElementById('showListBtn');
    const listMain = document.getElementById('list');
    const listHeight = document.getElementById('listHeight');
    const display = document.querySelector('.display');
    const winner_select = document.getElementById('winner_select');
    const refresh_btn = document.getElementById('refresh_btn');
    const first_winner = document.getElementById('first_winner');
    const second_winner = document.getElementById('second_winner');
    const third_winner = document.getElementById('third_winner');

    /* --- empty array for store textarea input value --- */
    let participants = [];

    /**
     * This listener use for show and hide un-order list.
     * Get text area value.
     * Shuffle all array element.
     * display all winner.
     * refresh all.  
    */
    
    btn.addEventListener('click', function(){
        listMain.style.height = listMain.offsetHeight > 0 ? `0px` : `${listHeight.children.length ? `${(listHeight.offsetHeight + 1)}px` : '0px'}`;
    });
    
    textArea.addEventListener('keypress', function($event){
        if($event.key === 'Enter' && $event.target.value.trim()){
            let names = $event.target.value.trim().split(', ');

            if(names.length > 2){
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
            else{
                alert('Please enter minimum 3')
            }

        }
    });

    winner_select.addEventListener('click', function($event){
        if(participants.length === 0){
            alert('Please add your names.');
        }
        else{
            if(participants.length > 0){
                if(!first_winner.innerHTML || !second_winner.innerHTML || !third_winner.innerHTML){
                    let shuffleNames = shuffle(participants);
                    for(let i = 0; i < shuffleNames.length; i ++){
                        /* JavaScript IIFE function */
                        (function(i, count){
                            setTimeout(function(){
                                let rand = Math.floor(Math.random() * (shuffleNames.length));
                                display.innerText = shuffleNames[rand];
        
                                if(count === (shuffleNames.length - 1)){
                                    if(!first_winner.innerHTML){
                                        first_winner.innerHTML = shuffleNames[rand];
                                    }
                                    else if(!second_winner.innerHTML){
                                        second_winner.innerHTML = shuffleNames[rand];
                                    }
                                    else if(!third_winner.innerHTML){
                                        third_winner.innerHTML = shuffleNames[rand];
                                    }

                                    /* -- remove all matching elements -- */
                                    participants = participants.filter(ele => ele !== shuffleNames[rand]);
                                }
        
                            }, i)
                        })((i * 100), i);
                    }
                }
                else{
                    alert('Your three participants already selected!');
                }
            } 
            else{
                alert('Sorry no participants are here');
            }
        }
    });

    refresh_btn.addEventListener('click', function(){
        first_winner.innerHTML = '';
        second_winner.innerHTML = '';
        third_winner.innerHTML = '';
        display.innerText = 'Display';
    })

}

/**
 * showList();
 * shuffle();
*/
function showList(name){
    const li = document.createElement('li');
    li.innerText = name;
    return li;
}

function shuffle(arr){
        const shuffleArr = [...arr];
    
        /* random number store for conditionally matching random value */
        let store_rand;
    
        for(let i = (shuffleArr.length - 1); i >= 0; i--){
    
            let rand = Math.floor(Math.random() * (i + 1));
    
            if(rand === store_rand){
                rand = Math.floor(Math.random() * (i + 1));
            }
    
            /* array value swapping */
            const temp = shuffleArr[rand];
            shuffleArr[rand] = shuffleArr[i];
            shuffleArr[i] = temp;
    
            store_rand = rand;
        }
    
        return shuffleArr;
}

