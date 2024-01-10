// 
// variabili del gioco dei dadi 
// 
let player1html = document.querySelector("div.player1")

let player2html = document.querySelector("div.player2")

let sendbutton = document.getElementById("button")

let refreshbutton = document.getElementById("retry")

let result1 = document.querySelector("div.result1")

let result2 = document.querySelector("div.result2")

let result3 = document.querySelector("div.result3")
//    
// funzione gioco dei dadi 
// 
document.getElementById("button").addEventListener("click", function(){
        
     let randomplayer1html = Math.floor(Math.random() * 6) + 0;
     
     let randomplayer2html = Math.floor(Math.random() * 6) + 0;

     player1html.innerHTML = `${randomplayer1html}`

     player2html.innerHTML = `${randomplayer2html}`

    
     

    if(randomplayer1html > randomplayer2html){
        result1.innerHTML = "player 1 ha vinto";

    } else if (randomplayer2html > randomplayer1html){
        result2.innerHTML = "player 2 ha vinto";

    } else{
        result3.innerHTML = "Pareggio";
    }
}
)
document.getElementById("retry").addEventListener("click", function(){

    location.reload(true);
}
)




// 
// richiesta della mail 
// 
const mail = ["marco@gmail.com","luca@gmail.com","lisa@gmail.com"]

let VariabileControllore = false

let answer = document.querySelector("div.risposta")

const richiestamail = document.getElementById("mailControl").Value;

document.getElementById("mailcheck").addEventListener("click", function(){

       
  for(let i = 0; i < mail.length; i++){
    if(mail[i] === richiestamail){
        VariabileControllore = true;
    }

    if(VariabileControllore == true){
        console.log("si")
        answer.innerHTML = "La mail è presente";
        
    }else{
        console.log("no")
        answer.innerHTML = "La mail non è presente";
    }
}
}
)
