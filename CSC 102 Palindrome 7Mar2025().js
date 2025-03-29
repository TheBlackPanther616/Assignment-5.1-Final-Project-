function strings()
{
    //Establishing variables
   var firstWord = document.getElementById("firstword").value;
   var splitStr = firstWord.split("");
   var reverseStr = splitStr.reverse();
   var joinStr = reverseStr.join("");

   // Establishing arguements for inputs
   if (firstWord == joinStr)
    {
        document.getElementById("Results").innerHTML= "This is a PALINDROME";

    }
    else
    {
        document.getElementById("Results").innerHTML= "This is NOT a PALINDROME";
    }
}