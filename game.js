/*
This is a simple Rock paper scissors game, to start press [Run] button above or below this box, if you wish to change settings follow instructions lower
Go to any JavaScript runner website and paste all this code, JS website(https://bjohnson.lmu.build/cmsi185web/scriptrunner.html)
*/

/* If you want to play a few times, change value (9999) below to desired number*/
count = 9999

results = ["You Win.","You Lose.","Draw"]
while(0<count){
count--;
Machine = MachineCode();
User = prompt("Enter Rock, Paper or Scissors on the box below").toUpperCase();
User = User[0];

while(User != "R" && User != "P" && User != "S"){
User = prompt("Enter Rock, Paper or Scissors on the box below").toUpperCase();
User = User[0];
};
//rock<paper<scisors
if(User==Machine){alert("Draw.")}; /*Else doesnt seem to work.*/
if(User=="R" && Machine=="S"){alert(results[0])}
else if(User=="R" && Machine=="P"){alert(results[1])}

if(User=="P" && Machine=="R"){alert(results[0])}
else if(User=="P" && Machine=="S"){alert(results[1])}

if(User=="S" && Machine=="P"){alert(results[0])}
else if(User=="S" && Machine=="R"){alert(results[1])}

};


function MachineCode(){
rps = ["R","P","S"];
temp = Math.round(Math.random()*2);
return(rps[temp]);
};

//Made by OlegKov33
