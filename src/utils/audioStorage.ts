export function saveAudioToStorage(key: string, base64Audio: string) {
  try {
    localStorage.setItem(key, base64Audio);
    console.log(`Audio saved with key: ${key}`);
  } catch (error) {
    console.error("Failed to save audio to storage:", error);
  }
}

export function getAudioFromStorage(key: string): HTMLAudioElement | null {
  try {
    const audio = localStorage.getItem(key);
    if (audio) {
      console.log(`Audio retrieved for key: ${key}`);
      return new Audio(`data:audio/mpeg;base64,${audio}`);
    
    } else {
      console.warn(`No audio found for key: ${key}`);
      return null;
    }
  } catch (error) {
    console.error("Failed to retrieve audio from storage:", error);
    return null;
  }
}