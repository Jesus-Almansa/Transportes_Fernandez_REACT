import React from "react";
import "./FlipCard.css";

const FlipCard = ({ frontImage, backText, icon }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={frontImage} alt="Front" className="card-image" />
                </div>
                <div className="flip-card-back">
                    <div className="icon-container">
                        {icon} {/* Render the icon directly */}
                    </div>
                    {backText}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
