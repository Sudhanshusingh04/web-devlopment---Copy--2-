let randomnumber=(parseInt(Math.random()*100+1));
const userinput=document.querySelector(".guessfield")
const button=document.querySelector(".btn")
const guessslots=document.querySelector(".gs")
const lastresult=document.querySelector(".lastresult")
const low=document.querySelector(".loworhigh")
const startover=document.querySelector(".result")
const p=document.createElement('p')
let prevguess=[]
let numguess=1;
let playGame=true;
if (playGame) {
    button.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess);
        validate(guess)
    })
}
function validate(guess){
  if(isNaN(guess)|| guess===''){
  alert(`please enter valid number `)

  }
  else if(guess<1){
   alert("pls enter the value greater than 0")
  }
  else if(guess>100){
   alert(" plese enter less than 100 ")
  }
  else{
    prevguess.push(guess)

    if(numguess===4){
      displayGuess(guess)
      displaymessage(`game over randaom number was ${randomnumber}`)
      endgame()
    }
    else{
        displayGuess(guess)
        checkguess(guess)
                         
    }
  }

}
function checkguess (guess){
    if(guess===randomnumber){
   displaymessage(`you guested right `)
    endgame()
    }
    else if (guess<randomnumber) {
       displaymessage (`guess is to low`)
    }
    else if (guess>randomnumber) {
       displaymessage (`guess is to high`)
    }

}
function displaymessage(message){
    low.innerHTML=`<h2>${message}</h2>`

}

function displayGuess(guess){
userinput.value=''
guessslots.innerHTML+=`${guess} `
numguess++
lastresult.innerHTML=`${5-numguess}`
} 

function endgame(){
userinput.value=""
userinput.setAttribute('disabled', '')
p.classList.add("button")
p.innerHTML=`<h2 id="newgame">start over</h2>`
startover.appendChild(p)
playGame=false;
newgame()
}
function newgame(){
const newbutton=document.querySelector('#newgame')
newbutton.addEventListener('click',function(){
  randomnumber=(parseInt(Math.random()*100+1));
  prevguess=[]
  numguess=1
  guessslots.innerHTML=""
  lastresult.innerHTML=`${5-numguess}`
  userinput.removeAttribute('disabled' ,'')
  startover.removeChild(p)
  playGame=true
  low.innerHTML=""
  
})
}


