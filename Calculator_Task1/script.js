let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let currentInput = " ";


buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        let buttonValue = button.textContent;

        if (buttonValue === "C"){
            currentInput = "";
            display.value = "";
        }else if (buttonValue === "="){
            try{
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (e) {
                display.value = "Error";
                currentInput = "";
            }
        }else{
            currentInput += buttonValue;
            display.value = currentInput;
        }
    })} )