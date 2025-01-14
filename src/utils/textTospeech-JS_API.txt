interface SpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export const handleTextToSpeech = (text: string, options: SpeechOptions = {}) => {
  if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel(); // Stop ongoing speech
    }

    const speech = new SpeechSynthesisUtterance(text);

    // Default settings
    const {
      lang = "en-US",
      rate = 1.0,
      pitch = 0.9,
      volume = 1.0,
    } = options;

    const selectVoice = () => {
      const voices = window.speechSynthesis.getVoices();

      // Try to find an "en-US" voice
      let selectedVoice = voices.find((voice) => voice.lang === lang);

      // Fallback: Use the first available voice if no match
      if (!selectedVoice) {
        console.warn(`No voice found for lang: ${lang}. Using the first available voice.`);
        selectedVoice = voices[0];
      }

      speech.voice = selectedVoice;
      speech.lang = lang;
      speech.rate = rate;
      speech.pitch = pitch;
      speech.volume = volume;

      // Speak the text
      window.speechSynthesis.speak(speech);
    };

    // Handle dynamic voice loading
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = selectVoice;
    } else {
      selectVoice();
    }

    // Add event listeners for debugging or feedback
    speech.onstart = () => console.log("Speech started.");
    speech.onend = () => console.log("Speech finished.");
    speech.onerror = (e) => console.error("Speech synthesis error:", e);
  } else {
    console.error("Text-to-speech is not supported in this browser.");
  }
};