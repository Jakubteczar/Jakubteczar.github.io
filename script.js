const Up =  document.querySelector('#Up');
const Left =  document.querySelector('#Left');
const TextContent =  document.querySelector('#TextContent');
const TextBefore =  document.querySelector('#TextBefore');
const TextAfter =  document.querySelector('#TextAfter');
const Right =  document.querySelector('#Right');
const Down =  document.querySelector('#Down');

const Curtain =  document.querySelector('#Curtain');
const ContainerCurtain =  document.querySelector('#ContainerCurtain');
const TextCurtain =  document.querySelector('#TextCurtain');
const PlayAgain =  document.querySelector('#PlayAgain');
const GameCounter =  document.querySelector('#GameCounter');


let ClockTime = 0;
let click = false;
let EndGame = false;
let FirstTouch = false;
let Counter = 0;
let easy =['Góra','Dół','Prawo','Lewo','Nie Góra','Nie Dół','Nie Prawo','Nie Lewo'];

function start (x){
    
    if(x == 1){
    let value = Math.floor(Math.random()*easy.length);
    console.log(easy[value]);
    TextContent.textContent =easy[value];
    TextBefore.style.display='block';
    TextAfter.style.display ='block';
    click=false;
    }else if (x==2){
        let value = Math.floor(Math.random()*easy.length);
        console.log(easy[value]);
        TextContent.textContent =easy[value];
        
    }

    
}

function verify (choice){

    
    let result;
    const value = TextContent.textContent;
    

    if(value=='Góra' && value==choice){
        result = 1;
        
    }else if(value=='Dół' && value==choice){
        
        result = 1;
    }else if(value=='Lewo' && value==choice){
        
        result = 1;
    }else if(value=='Prawo' && value==choice){
        
        result = 1;
    }else if(value=='Nie Góra' && choice !='Góra'){
        
        result = 1;
    }else if(value=='Nie Dół' && choice !='Dół'){
        
        result = 1;
    }else if(value=='Nie Lewo' && choice !='Lewo'){
        
        result = 1;
    }else if(value=='Nie Prawo' && choice !='Prawo'){
        
        result = 1;
    }else{
        console.log('Przegrana');
        result = 0;
    }
    console.log(result);
    reset(result);
    if(result == 1){
        setTimeout('start(1)', 100);
        ClockTime = -1000;
        EndGame=true;
        Counter++;
        GameCounter.textContent = Counter;
    }
    End(result);
    
}
function reset (value){
if(value==1){
    TextBefore.style.display='none';
    TextAfter.style.display ='none';
}

}

function End(value){
    
    if(value == 0){
        Curtain.style.display = 'block';
        ContainerCurtain.style.display = 'block';
        TextCurtain.style.display = 'block';
        PlayAgain.style.display = 'block';
        TextCurtain.textContent ='Koniec twój wynik to: '+Counter;
    }
}
start (2);

function Clock(){
    ClockTime +=1000;
    console.log(ClockTime);
    setTimeout('Clock(1)',1000);
    if(ClockTime==2000){
        End(0);
    }
}
Up.addEventListener('click' ,function (){
    if(click == false){
    verify('Góra');
    click=true;
    }
    if(FirstTouch==false){
        Clock();
        FirstTouch=true;
    }
})

Down.addEventListener('click' ,function (){
    if(click == false){
        verify('Dół');
        click=true;
        }
        if(FirstTouch==false){
            Clock();
            FirstTouch=true;
        }
})

Left.addEventListener('click' ,function (){
    if(click == false){
        verify('Lewo');
        click=true;
        }
        if(FirstTouch==false){
            Clock();
            FirstTouch=true;
        }
})

Right.addEventListener('click' ,function (){
    if(click == false){
        verify('Prawo');
        click=true;
        }
        if(FirstTouch==false){
            Clock();
            FirstTouch=true;
        }
})
PlayAgain.addEventListener('click' ,function (){
    start(2);
    Curtain.style.display = 'none';
    ContainerCurtain.style.display = 'none';
    TextCurtain.style.display = 'none';
    PlayAgain.style.display = 'none';
    reset(1);
    click = false;
    ClockTime = undefined;
    Counter =0;
    GameCounter.textContent = '0'
})