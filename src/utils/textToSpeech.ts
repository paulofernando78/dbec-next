import { getAudioFromStorage, saveAudioToStorage } from "@/utils/audioStorage";

/**
 * Play an audio element and manage its state.
 */
export const playAudio = (
  audio: HTMLAudioElement,
  key: string,
  setPlayingAudios: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
) => {
  audio.onended = () => setPlayingAudios((prev) => ({ ...prev, [key]: false }));
  audio.play();
  setPlayingAudios((prev) => ({ ...prev, [key]: true }));
};

/**
 * Handle text-to-speech functionality, including fetching or generating audio.
 */
export const handleTextToSpeech = async (
  text: string,
  key: string,
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setPlayingAudios: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  playingAudios: { [key: string]: boolean }
) => {
  if (!text.trim()) return;
   // Prevent clicking if the audio is already playing
   if (playingAudios[key]) return;

  setIsGenerating(true);
  setError(null);

  try {
    const savedAudio = getAudioFromStorage(text);
    if (savedAudio) {
      playAudio(savedAudio, key, setPlayingAudios);
      return;
    }

    const response = await fetch("/api/elevenlabs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        voice: "9BWtsMINqrJLrRacOk9x",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to generate audio");
    }

    saveAudioToStorage(text, data.audio);
    const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
    playAudio(audio, key, setPlayingAudios);
  } catch (error: any) {
    console.error("Error generating audio:", error);
    setError(error.message || "Failed to generate audio. Please try again.");
  } finally {
    setIsGenerating(false);
  }
};