function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if(message === "")
        return;

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML +=
    `<div class="user">${message}</div>`;

    let userText = message.toLowerCase();
    let reply = "";

    // Rule-Based Logic (If-Else)

    if(userText === "hello" ||
       userText === "hi" ||
       userText === "hey")
    {
        reply = "Hello! Nice to meet you.";
    }

    else if(userText === "how are you")
    {
        reply = "I am fine. Thank you!";
    }

    else if(userText === "what is your name")
    {
        reply = "I am a Rule-Based AI Chatbot.";
    }

    else if(userText === "who made you")
    {
        reply = "I was created by Saifullah.";
    }

    else if(userText === "help")
    {
        reply =
        `Available Commands:
        <br>• hello
        <br>• hi
        <br>• hey
        <br>• how are you
        <br>• what is your name
        <br>• who made you
        <br>• bye
        <br>• exit`;
    }

    else if(userText === "bye" ||
            userText === "exit")
    {
        reply = "Goodbye! Have a great day.";
    }

    else
    {
        reply = "Sorry, I don't understand that.";
    }

    chatBox.innerHTML +=
    `<div class="bot">${reply}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});