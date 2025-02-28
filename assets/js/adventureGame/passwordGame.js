let quizzing = false;
let audio = new Audio();
audio.src = "assets/js/adventureGame/Albuquerq.mp3";
const requirement = {
    minChars: Math.ceil(Math.random()*20),
    maxChars: Math.ceil(Math.random()*20),
    requiredChars: [],

    resetRequirements(){
        this.minChars = Math.ceil(Math.random()*20);
        this.maxChars = this.minChars + 5 + Math.ceil(Math.random()*10);
        for(let i = 0; i < Math.ceil(this.maxChars-(Math.random()*5)); i++){
            if(i > this.maxChars){ break }
            this.requiredChars.push(String.fromCharCode(32+Math.floor(Math.random()*96)));
        }
    }
}
export default function beginQuiz(){
    if(!quizzing){
        quizzing = true;
        requirement.resetRequirements();
        let quizWindow = document.createElement("div");
        quizWindow.style = 'position: absolute; width: 50%; height: 50%; top: 25%; left: 25%; z-index: 999; background-color: black; border-width: 10px; border-style: solid; border-color: rgb(50, 50, 50) text-align: center; vertical-align: center; color: rgb(0, 255, 0); font-size: 3vh; font-family: "Sixtyfour", sans-serif; border-radius: 3vh;';
        quizWindow.id = "quizWindow";
        document.getElementById("gameContainer").appendChild(quizWindow);
        quizWindow.innerText = `Please create a passowrd. Password must be between ${requirement.minChars} and ${requirement.maxChars} characters long and contain ${requirement.requiredChars}. Press [ENTER] to submit.`;

        let typebox = document.createElement("div");
        typebox.style = 'position: absolute; width: 100%; height: 20%; bottom: 15%; background-color: black; font-size: auto; font-family: "Sixtyfour", sans-serif; font-size: 5vh; text-align: center; vertical-align: center; color: rgb(0, 255, 0);';
        typebox.innerHTML = ">";
        quizWindow.appendChild(typebox);

        window.addEventListener("keydown", function(event){
            if(event.key == 'Backspace' && typebox.innerHTML.length > 1){
                typebox.innerHTML = typebox.innerHTML.slice(0, -1);
            }else if(event.key == "Escape"){
                quizWindow.remove();
                quizzing = false;
            }else if(event.key == "Enter" || event.key == "Return"){
                if(typebox.innerHTML == "albuquerque"){
                    audio.play();
                }else{
                    let passed = true;
                    requirement.requiredChars.forEach(character => {
                        if(!typebox.innerHTML.includes(character)){
                            passed = false;
                        }
                    });
                    if(passed && typebox.innerHTML.length < requirement.maxChars && typebox.innerHTML > requirement.minChars){
                        let moneyGiven = (requirement.minChars + requirement.requiredChars.length)*2;
                        quizWindow.innerText = `Password approved. You have been rewarded $${moneyGiven}`;
                    }else{
                        typebox.style.color = "red";
                        typebox.innerHTML = ">TRY AGAIN";
                        setTimeout(() => {
                            typebox.innerHTML = ">";
                            typebox.style.color = "rgb(0, 255, 0)";
                        }, 1000);
                    }
                }
            }else if(event.key.length == 1 && typebox.innerHTML.length < 20){
                typebox.innerHTML += event.key;
            }
        });
    }
}