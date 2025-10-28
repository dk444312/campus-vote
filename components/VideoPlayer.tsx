
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  return (
    <div className="w-full max-w-lg">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl shadow-gray-900/10 border-2 border-gray-200">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
    </div>
  );
};

export default VideoPlayer;
