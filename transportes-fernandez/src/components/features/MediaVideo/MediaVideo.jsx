import React from 'react';
import './MediaVideo.css';

const Media = ({ content, className }) => {
  // Generate a YouTube embed URL, including privacy-enhanced mode
  const getYouTubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com')) {
        const videoId = urlObj.searchParams.get('v');
        if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
      if (urlObj.hostname.includes('youtu.be')) {
        const videoId = urlObj.pathname.slice(1);
        if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
    } catch (error) {
      console.error('Invalid YouTube URL:', url);
    }
    return null; // Return null if invalid
  };

  const embedUrl = content.includes('youtube.com') || content.includes('youtu.be') ? getYouTubeEmbedUrl(content) : null;
  const isMp4File = content.endsWith('.mp4');

  return (
    <div className={`media_video-container ${className}`}>
      <div className="media_video-wrapper">
        {isMp4File ? (
          // Render MP4 video
          <video className="media_video" controls>
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : embedUrl ? (
          // Render YouTube embed
          <iframe
            className="media_video"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        ) : (
          // Fallback: Invalid media type or invalid URL
          <div className="media_video-error">
            <p>Unsupported media type or invalid URL.</p>
            <img className="media_video" src={content} alt="Media not supported" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
