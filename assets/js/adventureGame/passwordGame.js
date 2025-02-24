let quizzing = false;
export default function beginQuiz(){
    if(!quizzing){
        quizzing = true
        let quizWindow = document.createElement("div");
        quizWindow.style = "position: absolute; width: 50%; height: 50%; top: 25%; left: 25%; z-index: 999; background-color: grey; border-width: 10px; border-style: solid; border-color: rgb(50, 50, 50)";
        quizWindow.id = "quizWindow";
        document.getElementById("gameContainer").appendChild(quizWindow);

        let typebox = document.createElement("div");
        typebox.style = "position: absolute; width: 100%; height: 20%; bottom: 15%; background-color: black; font-size: auto; font-family: serif;";
        quizWindow.appendChild(typebox);

        window.addEventListener("keydown", function(event){
            if(event.key == 'Backspace'){
                typebox.innerHTML = typebox.innerHTML.slice(0, -1);
            }else{
                typebox.innerHTML += event.key;
            }
        });
    }
}