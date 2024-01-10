let player1html = document.querySelector("div.player1")

let player2html = document.querySelector("div.player2")

let sendbutton = document.getElementById("button")

let result1 = document.querySelector("div.result1")

let result2 = document.querySelector("div.result2")

let result3 = document.querySelector("div.result3")

for( let i = 0; i <= 6; i++){
    
    // const element = `${i}`
    // player1html.innerHTML += element
}
   

document.getElementById("button").addEventListener("click", function(){
        
     let randomplayer1html = Math.floor(Math.random() * 6) + 0;
     
     let randomplayer2html = Math.floor(Math.random() * 6) + 0;

     player1html.innerHTML = `${randomplayer1html}`

     player2html.innerHTML = `${randomplayer2html}`

    
     

    if(randomplayer1html > randomplayer2html){
        result1.innerHTML = "player 1 ha vinto";

    } else if (randomplayer2html > randomplayer1html){
        result2.innerHTML = "player 2 ha vinto";

    } else (randomplayer1html == randomplayer2html);{
        result3.innerHTML = "Pareggio";
    }
}
)