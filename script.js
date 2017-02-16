// Huisman zijn flow

var Randomizen = Math.floor((Math.random() *  478) + 1);
console.log(Randomizen);

var Word = WORD_LIST[Randomizen];
console.log(Word);
// Functie


function Check(){
	var Input = document.getElementById("guessInput").value;
	console.log(Input);


	// Als de lengte minder dan vijf karakters is -> fout melding (moet meer dan vijf karakters zijn).
	if (Input.length < 5)
	{
		var alert = document.getElementById("alert");
		var guessTable = document.getElementById("guessTable");
		
		alert.style.display = "inline";
		guessTable.style.display = "none";
		
	}

	// Check of het vijf is - Show ingetikte woord.
	if (Input.length == 5)
	{
		var alert =  document.getElementById("alert");
		var guessTable = document.getElementById("guessTable");

		alert.style.display = "none";
		guessTable.style.display = "inline";

		oldtries.push(Input);
		
	}

	// Als het woord goed geraden is pop-up met daarin een felicitatie.
	if(Input == Word) 
	{
		document.getElementById("guessInput").style.color = ("green");

		window.location.href = '#popup';

		Input = Input.split("");
		WordArr = Word.split("");
		for (var i = 0; i < WordArr.length; i++)
		{
			var LetterBox = document.getElementById("option" + i);
			LetterBox.innerHTML = Input[i];

		}

	}

	else { 
		Input = Input.split("");
		WordArr = Word.split("");
		for (var i = 0; i < WordArr.length; i++){
			var LetterBox = document.getElementById("option" + i);
			console.log("option" + i);
			LetterBox.style.color = "black";
			LetterBox.innerHTML = Input[i];
			if (Input[i] == WordArr[i]){
				LetterBox.style.color = ("green");
			}
				else if (WordArr.includes(Input[i]) && LetterBox.style.color == "black")

				{
					LetterBox.style.color = "orange";
				}			

				else {
					LetterBox.style.color ="red";
				}
			}
		}
	}

// Geschiedenis functie om bij te houden welke woorden zijn ingetikt.
	oldtries = [];

function Geschiedenis(guess){
 
 	oldtries.push(guess);
 
    console.log(oldtries);

    
}

function displayOldTries(){
    var old = document.getElementById('old');
 
    for (i in oldtries){
        var next = document.createElement('P');
        next.innerHTML = oldtries[i]
        old.appendChild(next);
    }
 }

 displayOldTries()
