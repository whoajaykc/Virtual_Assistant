# Virtual_Assistant
A virtual assistant is a software agent or AI-driven system that performs tasks or services for users based on commands or requests.

# Shifra - Virtual Assistant with Speech Recognition and Synthesis
      Shifra is a customizable virtual assistant designed to interact with users through speech recognition and synthesis. It performs tasks like greeting the user,         answering questions, providing information, opening websites, and more. Shifra can recognize voice commands, engage in conversations, and even perform basic web searches or media playback actions.

# Key Features
    1. Voice Interaction: Users can interact with Shifra by speaking commands or questions, and Shifra will respond with spoken text.
    2. Speech Synthesis: Shifra speaks using the browser’s built-in speech synthesis API to make conversations more engaging and dynamic.
    3. Speech Recognition: The assistant listens to user commands through the browser’s speech recognition API.
    4. Contextual Greetings: Shifra greets the user based on the time of day, with customizable responses for morning, afternoon, and evening.

# Command Execution: 
    Shifra can:
        1. Open popular websites (YouTube, Netflix, Facebook, Instagram).
        2. Respond to queries about the current time and date.
        3. Perform searches on Google and YouTube for specific terms, such as movies.
        4. Movie Search: Shifra can search for movies on YouTube, Google, or Netflix based on user requests.
# Example Usage
    Click the button to start speech recognition.
    Say commands like:
          "Hello Shifra" or "Introduce yourself" to get a response.
          "Open YouTube" to launch YouTube in a new tab.
          "What's the time?" to know the current time.
          "Play the movie Inception" to search for the movie online.

# How It Works
    1. Speech Recognition: Captures user input via the browser's speech recognition APIs (SpeechRecognition or webkitSpeechRecognition).
    2. Speech Synthesis: Uses SpeechSynthesisUtterance to convert text responses into speech.
    3. Command Handling: Processes recognized text and triggers actions such as opening websites or responding to specific queries.
    4. Web Search: If Shifra cannot process the command directly, it defaults to performing a Google search with the given input.
