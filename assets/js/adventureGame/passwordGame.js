let quizzing = false;
let audio = new Audio();
audio.src = "assets/js/adventureGame/Albuquerq.mp3";
export default function beginQuiz(){
    if(!quizzing){
        quizzing = true
        let quizWindow = document.createElement("div");
        quizWindow.style = 'position: absolute; width: 50%; height: 50%; top: 25%; left: 25%; z-index: 999; background-color: grey; border-width: 10px; border-style: solid; border-color: rgb(50, 50, 50) text-align: center; vertical-align: center; color: black; font-size: 6vh; font-family: "Sixtyfour", sans-serif; border-radius: 3vh;';
        quizWindow.id = "quizWindow";
        document.getElementById("gameContainer").appendChild(quizWindow);
        quizWindow.innerText = "Create a Password";

        let typebox = document.createElement("div");
        typebox.style = 'position: absolute; width: 100%; height: 20%; bottom: 15%; background-color: black; font-size: auto; font-family: "Sixtyfour", sans-serif; font-size: 5vh; text-align: center; vertical-align: center; color: rgb(0, 255, 0);';
        quizWindow.appendChild(typebox);

        window.addEventListener("keydown", function(event){
            if(event.key == 'Backspace'){
                typebox.innerHTML = typebox.innerHTML.slice(0, -1);
            }else if(event.key == "Escape"){
                quizWindow.remove();
                quizzing = false;
            }else if(event.key == "Enter" || event.key == "Return"){
                if(typebox.innerHTML == "albuquerque"){
                    audio.play();
                }
            }else if(event.key.length == 1 && typebox.innerHTML.length < 16){
                typebox.innerHTML += event.key;
            }
        });
    }
}