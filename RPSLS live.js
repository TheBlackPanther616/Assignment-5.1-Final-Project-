function RPSLS()
{
    var player1 = Math.ceil(Math.random() *5);
    // generates a random number between 1 and 5.
    var player2 = Math.ceil(Math.random() *5);

    //Creating another variable.

    var rockImage = "Images/The_Rock_2.png";
    var paperImage = "Images/printing-and-writing-papers-1024x777.jpg";
    var scissorImage = "Images/Scissors.jpg";
    var lizardImage = "Images/lizard.jpg";
    var spockImage = "Images/Spock.jpg";

    // Creating paths to show which image is shown for Player 1
    if (player1 == 1)
        {
             document.getElementById("player1Img").src = rockImage;
        }
        else if (player1 == 2)
            {
                document.getElementById("player1Img").src = paperImage;
            }
            else if (player1 == 3)
                {
                    document.getElementById("player1Img").src = scissorImage;
                }
                else if (player1 == 4)
                    {
                        document.getElementById("player1Img").src = lizardImage;
                    }
                    else if (player1 == 5)
                    {
                        document.getElementById("player1Img").src = spockImage;
                    }
                    // Creating paths to show which image is shown for Player 2
                    if (player2 == 1)
                        {
                             document.getElementById("player2Img").src = rockImage;
                        }
                        else if (player2 == 2)
                            {
                                document.getElementById("player2Img").src = paperImage;
                            }
                            else if (player2 == 3)
                                {
                                    document.getElementById("player2Img").src = scissorImage;
                                }
                                else if (player2 == 4)
                                    {
                                        document.getElementById("player2Img").src = lizardImage;
                                    }
                                    else if (player2 == 5)
                                    {
                                        document.getElementById("player2Img").src = spockImage;
                                    }

                                    if(player1 == player2)
                                        {
                                            document.getElementById("FinalResult").innerHTML = "Draw"
                                        }
                                        //player1 wins
                                        // && means AND (2 conditions must be true)
                                        // || means OR (only 1 condition needs to be true)
                                        else if 
                                        ((player1 == 3 && player2 == 2)||(player1 == 2 && player2 == 1)||(player1 == 1 && player2 == 4)||(player1 == 4 && player2 == 5)||(player1 == 5 && player2 == 3)||(player1 ==3 && player2 == 4)||(player1 == 4 && player2 == 2)||(player1 == 2 && player2 == 5)||(player1 == 1 && player2 == 3 ))
                                        {
                                            document.getElementById("FinalResult").innerHTML = "Player 1 WINS"
                                        }
                                        else
                                        {
                                            document.getElementById("FinalResult").innerHTML = "Player 2 WINS"
                                        }

}
 