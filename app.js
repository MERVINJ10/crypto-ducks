function getName() {
let name = prompt("what is your name")

let nameMessage

if (name === "tim") {
    nameMessage = "best Tim";
} else {
    nameMessage ="Welcome" + name;

}

return document.write(nameMessage + ", ");


}


