function getName() {
    let name = prompt("what is your name")

    let nameMessage

    if (name === "tim") {
        nameMessage = "best Tim";
    } else {
        nameMessage ="Welcome" + name;
    }

    return document.write(nameMessage);
}


function getRating() {
    let output = "";
    let rating = prompt ("what is my rating")

    for (let i=0; i < rating; i++){
        output = output + "<img src='duck.png' alt='' />"
    }
    

    return document.write(output) 
}