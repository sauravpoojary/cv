
var userScore=0;
var compScore=0;
var userScore_span=document.getElementById("user-point");
var compScore_span=document.getElementById("comp-point");
var ponts_div=document.querySelector('.points');
var result_div=document.querySelector('.result');
const rock_div=document.getElementById("rock");
var paper_div=document.getElementById('paper');
var scissors_div=document.getElementById('scissors');

function get_compChoice(){
	var compChoice=['rock','paper','scissors'];
   var rand=Math.floor(Math.random()*3)//just math.random() will giv nos from 0-1 ..but we want lik 0 1 2 so multiply by 3
   //console.log(compChoice[rand]);//math.floor makes the decimal no to whole no say 1.345657 to 1
   return compChoice[rand];
}
function wins(){
document.getElementById('res').innerHTML="1POINT TO THE USER";
userScore++;
if(userScore==10 && compScore<10 ){
	document.getElementById('res').innerHTML="User Wins the game";
	userScore=0;
	compScore=0;
	userScore_span.innerHTML=userScore;
        compScore_span.innerHTML=compScore;
	document.getElementById('res').innerHTML="USER WINS AND GAME RESTARTED";

}
else{
	userScore_span.innerHTML=userScore;
    compScore_span.innerHtml=compScore;
}
}
function loses(){
document.getElementById('res').innerHTML="1POINT TO THE COMPUTER";
compScore++;
if(compScore==10 && userScore<10){
	document.getElementById('res').innerHTML="COMPUTER WINS THE GAME";
	compScore=0;
	userScore=0;
		userScore_span.innerHTML=userScore;
        compScore_span.innerHTML=compScore;
	document.getElementById('res').innerHTML="Comp WINS GAME RESTARTED";


}
else
{
	compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
}
}
function draws(){
document.getElementById('res').innerHTML="Oh! ITS A DRAW";
}
function check(userChoice){

    var compChoice=get_compChoice();
     
     switch(userChoice+compChoice){

     	case "scissorspaper"://user win case
     	case "paperrock"://user win case
     	case "rockscissors":wins()
     	break;

     	case "scissorsrock"://comp win case
     	case "paperscissors"://comp win case
     	case "rockpaper":loses()
     	break;

        case "scissorsscissors"://user draw case
     	case "paperpaper"://user draw case
     	case "rockrock":draws();
     	break;

     }


}

function main(){
  rock_div.addEventListener("click", function(){
   
      check("rock");
});

 paper_div.addEventListener("click", function(){
     check("paper");
});


 scissors_div.addEventListener("click", function(){
      check("scissors");
});

}
main();







