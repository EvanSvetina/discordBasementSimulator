let quizzing = false;
export default function beginQuiz(){
    if(!quizzing){
        quizzing = true
        let quizWindow = document.createElement("div");
        quizWindow.style = "position: absolute; width: 50%; height: 50%; top: 25%; left: 25%; z-index: 999; background-color: rgba(255, 255, 255, 0.75);";
        quizWindow.id = "quizWindow";
        document.getElementById("gameContainer").appendChild(quizWindow);

        
        console.log(quizWindow);
    }
}