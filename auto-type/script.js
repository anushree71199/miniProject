const text = "My name is Anushree and am a Coder! <3";

let index = 0; //to count the length of the text 

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 200);