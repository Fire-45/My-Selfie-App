var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function START(){
    document.getElementById("textBox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textBox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 Webcam.attach( '#camera' );

