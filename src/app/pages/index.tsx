import { playAudio } from '../client/audioPlayer';

// ...existing code...

function handlePlayAudio() {
  const text = "Your text here";
  playAudio(text);
}

// ...existing code...
<button onClick={handlePlayAudio}>Play Audio</button>
// ...existing code...
