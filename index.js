const inputEmail = document.getElementById("input");
const form = document.getElementById("form");
const btn = document.getElementById("submitBtn");
const container = document.getElementById("container")

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(ev){
    ev.preventDefault();
    const label = document.createElement("label");
        if(inputEmail.value === "" || inputEmail.checkValidity()===false){
            container.lastChild.remove();
            label.innerText = "Valid email required";
            label.classList.add("errorMessage");
            input.classList.add("errorEmailValidate");
            container.appendChild(label);
        }else{
            if(container.contains(label)){
                container.lastChild.remove();
                label.classList.remove("errorMessage");
                input.classList.remove("errorEmailValidate");
            }
            location.replace("sucess.html")
        }
    }