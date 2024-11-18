import React from 'react';
import './MediaBox.css';

const MediaBox = ({ content, className }) => {
  const getYouTubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com')) {
        return `https://www.youtube.com/embed/${urlObj.searchParams.get('v')}`;
      }
      if (urlObj.hostname.includes('youtu.be')) {
        return `https://www.youtube.com/embed/${urlObj.pathname.slice(1)}`;
      }
    } catch (error) {
      console.error('Invalid URL:', url);
    }
    return null;
  };

  const embedUrl = content.includes('youtube.com') || content.includes('youtu.be') ? getYouTubeEmbedUrl(content) : null;
  const isMp4File = content.endsWith('.mp4');

  return (
    <div className={`media-container ${className}`}>
      <div className="media-wrapper">
        {isMp4File ? (
          <video className="media" controls>
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : embedUrl ? (
          <iframe
            className="media"
            src={embedUrl}
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
