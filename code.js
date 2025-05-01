console.log("Game Page");
// Changes Text in Header
//J. Secrest
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
        results.innerHTML = "Craps - You Lose!   " + ("die1: " + die1) + ("  / die2:   " + die2);
    }
    // AND operator set for even number
    else if(die1 == die2 && die1 %2 == 0)
    {
        console.log("You Won")
        results.innerHTML = "You Win!   " + ("die1: " + die1) + (" /  die2:   " + die2)
    }
    else
    {
        // results displayed in console log and on inner html
        console.log("You Pushed!")
        results.innerHTML = "You Pushed!   " + ("die1: " + die1) + ("  / die2:   " + die2);
        
    }

} 
function palindrome()
{
    // Palindrome identification // 
    console.log("PalindromeVerification");
    let inputField = document.getElementById("palindromeblock");

    let results = document.getElementById("palindromeResults");
   
    let inputValue = inputField.value;

    let stringLength = inputValue.length;

    if (stringLength > 0)
    {
        let iterationCount = Math.floor(stringLength/2);
        
        let lastCharacterIndex = inputValue.length -1;

        let palindromeResults = true;

        // proceed if palindrome is verified
        for(let i = 0; i < iterationCount; i++)
        {
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                console.log("Not a Palindrome");
                results.innerHTML = "No Go Amigo"
                palindromeResults = false;
                break;
            }

        }
        if (palindromeResults)
            {
            console.log("This is a Palindrome")
            results.innerHTML = "Palindrome!!"
            }
    }
}
function userInfoValidation()
{
    console.log("Verify User Info");

    let firstNameField = document.getElementById("firstNameField");

    let lastNameField = document.getElementById("lastNameField");

    let zipField = document.getElementById("zipField")
    
    let results = document.getElementById("infoResults"); 
    
     results.innerHTML = "";

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value;

    let zipvalue = zipField.value;

    // concatenation
    let firstLastName= firstNameValue + " " + lastNameValue;

    console.log(firstLastName);

    if (firstLastName.length > 20)
    {
        results.innerHTML = "No more than 20 characters!"; return;
        
    }
    let zipRegex = /^\d{5}$/

    if (!zipRegex.test(zipvalue))
    {
        results.innerHTML = "Must be 5 numberical digits"; return;
    }
   results.innerHTML = "Congrats Young Padawan"

    console.log("Verified");

}