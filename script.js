function ringBell() {
    const bell = document.getElementById("bellSound");
    bell.play();

    setTimeout(() => {
        document.getElementById("welcome").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("music").play();
        speakMessage(); // 🎙️ READ MESSAGE
    }, 1500);
}

// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();


// Auto year update (footer)
//document.getElementById("year").textContent = new Date().getFullYear();


function speakMessage() {
    window.speechSynthesis.cancel();

    const text = document.getElementById("christmasMessage").innerText;
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
