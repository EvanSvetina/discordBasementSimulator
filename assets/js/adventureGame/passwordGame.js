let quizzing = false;
export default function beginQuiz(){
    if(!quizzing){
        quizzing = true
        let quizWindow = document.createElement("div");
        quizWindow.style = "position: absolute; width: 50%; height: 50%; top: 25%; left: 25%; z-index: 999; background-color: grey; border-width: 10px; border-style: solid; border-color: rgb(50, 50, 50)";
        quizWindow.id = "quizWindow";
        document.getElementById("gameContainer").appendChild(quizWindow);

        let typebox = document.createElement("div");
        typebox.style = 'position: absolute; width: 100%; height: 20%; bottom: 15%; background-color: black; font-size: auto; font-family: font-family: "Sixtyfour", sans-serif; font-size: 6vh; text-align: center; vertical-align: center; color: rgb(0, 255, 0);';
        quizWindow.appendChild(typebox);

        window.addEventListener("keydown", function(event){
            if(event.key == 'Backspace'){
                typebox.innerHTML = typebox.innerHTML.slice(0, -1);
            }else if(event.key == "Escape"){
                quizWindow.remove();
                quizzing = false;
            }else if(event.key == "Enter" || event.key == "Return"){
                if(typebox.innerHTML == "albuquerque"){
                    new Audio("./assets/Albuquerq.mp3").play();
                }
            }else if(event.key.length == 1){
                typebox.innerHTML += event.key;
            }
        });
    }
}