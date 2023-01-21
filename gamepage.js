function send(){
    number1=document.getElementById("word").value;
    number2=document.getElementById("word1").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    
    question_number="<h4>"+ number1 + "X" + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='inputbox'>";
    checkbtn="<br> <br> <button class='btn btn-secondary' onclick='check()'> CHECK </button>";
    row=question_number + input_box + checkbtn ;

    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    document.getElementById("word1").value="";

}

question_turn="player1"
answer_turn="player2"

function check(){
    get_answer=document.getElementById("inputbox").value ;

    if (get_answer == actual_answer){
        if (answer_turn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML= player1score;
        }
         else {
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
         }
    }



    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_quest").innerHTML="Question turn - " + player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_quest").innerHTML="Question turn - " + player1_name;
    }



    if (answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn - " + player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML="";
}