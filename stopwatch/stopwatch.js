const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');


let hr=min=sec=ms=0,startTimer;

btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('start-active');
    startTimer=setInterval(()=>{
      ms++;
      if(ms==100){
        sec++;
        ms=0;
      }
      if(sec==60){
        min++;
        sec=0;
      }
      if(min==60){
        hr++;
        min=0;
      }
   updateDisplay(); 
},10);
   
});

btnStop.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.add('start-active');
    clearInterval(startTimer);
    
}); 

btnReset.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('start-active');
    hr=min=sec=ms=0;
    updateDisplay();
    clearInterval(startTimer);
});

function updateDisplay(){
   phr= hr<10?"0"+hr:hr;
   pmin= min<10?"0"+min:min;
   psec= sec<10?"0"+sec:sec;
   pms=ms<10?"0"+ms:ms;
 
document.querySelector('.hr').innerText=phr;
document.querySelector('.min').innerText=pmin;
document.querySelector('.sec').innerText=psec;
document.querySelector('.ms').innerText=pms;

}