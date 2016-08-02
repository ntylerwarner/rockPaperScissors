// JavaScript code goes on this page
function randomizedComputerChoice()

{

  randomNum = Math.random();

if (randomNum <= 0.3333)

  {     

    randomNum = "rock"; 

	} 

		else if (randomNum <= 0.6666)

	{

  randomNum = "paper";

  } 

else 

  {

  randomNum = "scissors"; 

  }

  return randomNum
}

var compare = function(userChoice) 

{
  var computerChoice = randomizedComputerChoice()
//Tie

  if (userChoice === computerChoice) 

  	{

    	window.alert("The result is a tie!");

  	}

//First if statement

   else if (userChoice === "rock") 

   		{

   		if (computerChoice === "scissors")
   			
   			{

      			window.alert("You Win! Rock beats Scissors.");

    		} 

    	else 

    	{

     	 	window.alert("You Lose! Paper beats Rock.");

    	}

  } 

//Second if statement

  	else if (userChoice === "paper") 

  		{

    		if (computerChoice === "rock") 

    	{

      		window.alert("You Win! Paper beats Rock.");

    	} 

    else 

    	{

      		window.alert("You Lose! Scissors beats Paper.");

    	}

  } 
//Third if statement

  	else if (userChoice === "scissors") 

  		{

    		if (computerChoice === "rock") 

    	{

      		window.alert("You Win! Scissors beats Rock.");

    	} 

    else 

    	{

     		window.alert("You Lose! Rock beats Scissors.")

    	}

  }

};
