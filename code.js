console.log("Game Page");
// Changes Text in Header
function updateText(){
    document.getElementById("rookie").innerHTML = "Slowly but Surely"
}
function playGame()
{
    let results = document.getElementById("crapsResults");

    // Generate random number between 1 & 6 and store in variable 
    let die1 = Math.floor(Math.random() * 6) + 1;
        
    let die2 = Math.floor(Math.random() * 6) + 1;
// in "" displays in console log followed by the number that is generated randomly in this string on the first line
    console.log("die 1:" + die1);
     
// in "" displays in console log followed by the number generated randomly in this on the 2nd line 
    console.log("die 2:" + die2);
  
    let sum = die1 + die2; 
// OR operator to include sum of 11
    if(sum == 7 || sum == 11)
    {
        console.log("Craps- You Lose!");
        results.innerHTML = "Craps - You Lose!";
    }
    // AND operator set for even number
    else if(die1 == die2 && die1 %2 == 0)
    {
        console.log("You Won")
    }
    else
    {
        console.log("You Pushed!")
        results.innerHTML = "You Pushed!";
    }

} 

   
