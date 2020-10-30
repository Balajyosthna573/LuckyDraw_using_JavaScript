//Global varibles
var participants_list = [];
var participants = "";



//Create the click event to add contestant to array
var event1 = document.getElementById("addName");
		event1.addEventListener('click',addContestant,false);
	

//Create the click event to pick a winner at random
var event2 = document.getElementById("generateWinner");
    event2.addEventListener('click',pickWinner,false);

//Create function for adding the contestants
function addContestant(){
    var addPerson = document.getElementById("contestantName").value; 
    participants_list.push(addPerson);
    participants += "<li>" + addPerson + "</li>"
    document.getElementById("output").innerHTML = "<p>Entering this incredible competition is: </p><ol>" + participants + "</ol>";
}

//Generate a random winner
function pickWinner() {
    var winner = participants_list[Math.floor(Math.random() * participants_list.length)];
    document.getElementById("output2").innerHTML = "<h2>And The Luckiest winner is " + winner + "!!!</h2>";
}