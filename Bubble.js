
var hitrn = 0;
var timer = 60;
var score = 0;

// 
//Make New Bubble
function makeBubble(){
    var flutter = "";

    for(var i=1; i<=126; i++){
    var rn = Math.floor(Math.random()*10)
    flutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('.pannelBtm').innerHTML = flutter;
}

// Hit the Bubble
function Hit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent = hitrn;
}

//Timer on 
function Timer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector('#timer').textContent = timer 
        }
        else{
            clearInterval(timerInt);
            // document.querySelector(".pannelBtm").innerHTML = "<h1> Game Over </h1>"
            document.querySelector(".pannelBtm").innerHTML = "<h2> Game Over </h2>" +  "<h2> Score is </h2> " + score
        
        }
           
    },700)
}

// Increase Score 
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

Hit()
makeBubble();
Timer()
// increaseScore();



// jispe click karoge wo element par event raise hoga , aur event listener naa milne par event element ke parent par listener
//   dhundhega , waha bhi naa milne par event parent ke parent ke parent par listener

// Bubble Event Listner 
document.querySelector(".pannelBtm")
.addEventListener("click",function(ball){
    // target hame bta raha hai ki hum kis ball pr click kr rahe hai or yeh string thi toh humn isko Number bna diya 

   var clickBubble = (Number(ball.target.textContent)); 
   if(clickBubble === hitrn){
    increaseScore();
    Hit()
    makeBubble();
   }     
})

