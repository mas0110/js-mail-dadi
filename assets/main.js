// 
// variabili del gioco dei dadi 
// 
let player1html = document.querySelector("span.player1")

let player2html = document.querySelector("span.player2")

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
        result1.innerHTML = "<h4>Hai vinto</h4>";

    } else if (randomplayer2html > randomplayer1html){
        result2.innerHTML = '<h4>Ha vinto il computer</h4>';

    } else{
        result3.innerHTML = "<h4>Pareggio</h4>";
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

const mail = ["marco@gmail.com", "luca@gmail.com", "lisa@gmail.com"];

let answer = document.querySelector("div.risposta");

document.getElementById("mailcheck").addEventListener("click", function () {
    const usermail = document.getElementById("mailControl").value;
    console.log(usermail);

    let VariabileControllore = false;

    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === usermail) {
            VariabileControllore = true;
        }
    }

    if (VariabileControllore == true) {
        console.log("si");
        answer.innerHTML = "La mail è valida";
    } else {
        console.log("no");
        answer.innerHTML = "La mail non è valida";
    }
});
