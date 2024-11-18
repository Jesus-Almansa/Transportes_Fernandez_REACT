import React from 'react';
import './MediaBox.css';

const MediaBox = ({ content, className }) => {
  const getYouTubeEmbedUrl = (url) => {
    const urlObj = new URL(url);
    let videoId = '';

    if (urlObj.hostname.includes('youtube.com')) {
      videoId = urlObj.searchParams.get('v');
    } else if (urlObj.hostname.includes('youtu.be')) {
      videoId = urlObj.pathname.slice(1);
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const isYouTubeUrl = content.includes('youtube.com') || content.includes('youtu.be');
  const isMp4File = content.endsWith('.mp4');
  const embedUrl = isYouTubeUrl ? getYouTubeEmbedUrl(content) : null;

  return (
    <div className={`media-container ${className}`}>
      <div className="media-wrapper">
        {isMp4File ? (
          <video className="media" controls>
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : isYouTubeUrl && embedUrl ? (
          <iframe
            className="media"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        ) : (
          <img className="media" src={content} alt="media" />
        )}
      </div>
    </div>
  );
};

export default MediaBox;
