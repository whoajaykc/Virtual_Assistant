let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
// Example usage
wishMe();
// window.addEventListener('load',()=>{

// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    voice.style.display = "block"
    btn.style.display = "none"
})
function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello") || message.includes("hello shifra") || message.includes("hey") || message.includes("hey shifra")) {
        speak("Hello there, I'm good what about u sir");
    }
    else if (message.toLowerCase().includes("tell me about yourself") || message.toLowerCase().includes("introduce yourself")) {
        speak("hello there! i am sifra..your virtual assistant to help u out");
    }
    else if (message.toLowerCase().includes("thank you")) {
        speak("Happy to help you out..let me know if u need something else.");
    }
    else if (message.toLowerCase().includes("when were u created") || message.toLowerCase().includes("created")) {
        speak("hey there! i was created on november third 2024 by AJAY");
    }
    else if (message.includes("your creator")) {
        speak("SURE..HIS NAME IS AJAY KC....HE IS THE ONE OF THE MOST HANDSOME GUY...AMAZING GUY...AND A VERY SMART PERSON....AND BECAZ OF HIM I AM ABLE TO HELP U...SO.... Pray HIM U BITCH");
    }

    else if (message.includes("who are you")) {
        speak("I am a virtual assistant, SHIFRA");
    }
    else if (message.includes("abuse them")) {
        speak("shut up u bitch");
    }
    else if (message.includes("open netflix")) {
        speak("Opening Netflix...");
        window.open("https://netflix.com/", "_blank");
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    }
    else if (message.includes("open yourself")) {
        speak("Opening porn for u darling...enjoy.. muahhhh");
        window.open("https://www.qorno.com/", "_blank");
    }
    else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    }


    else if (message.includes("time") || message.includes("What's the time right now")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The time is " + time);
    }
    else if (message.includes("date") || message.includes("What's the date today")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak("Today's date is " + date);
    }
    // New command to play video from a specific channel

    else if (message.includes("play the movie") || message.includes("find the movie")) {
        // Extract the movie title
        let movieTitle = message.replace("play the movie", "").replace("find the movie", "").trim();

        if (movieTitle) {
            speak(`Searching for the movie ${movieTitle}...`);

            // Search for the movie on YouTube
            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle + " full movie")}`;
            window.open(youtubeSearchUrl, "_blank");

            // Alternatively, you could add links for other platforms
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(movieTitle + " movie")}`;
            const netflixSearchUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movieTitle)}`;

            // Provide other options
            speak("I'll search for it on YouTube. You can also try finding it on Google or Netflix.");
            setTimeout(() => {
                window.open(googleSearchUrl, "_blank");
                window.open(netflixSearchUrl, "_blank");
            }, 2000); // Opens after YouTube for better organization
        } else {
            speak("Please specify the movie name you want to watch.");
        }
    }

    else {
        let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "") || message.replace("shifra", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "")}`, "_blank");
    }
}
