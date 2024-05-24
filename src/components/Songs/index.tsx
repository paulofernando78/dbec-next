interface Song {
  enLine: string;
  ptLine: string;
}

interface SongsProps {
  songs: Song[];
}

export const Songs = ({ songs }: SongsProps) => {
  return (
    <div>
      {songs.map((song, index) => (
        <div key={index} className="margin-bottom">
          <p>{song.enLine}</p>
          <p className="portuguese">{song.ptLine}</p>
        </div>
      ))}
    </div>
  );
};
