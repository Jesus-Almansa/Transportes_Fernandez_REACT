import React from 'react';

const Team = () => {
    return (
        <div>
            <h1>Meet Our Team</h1>
            <div className="team-member">
                <h2>John Doe</h2>
                <p>CEO</p>
                <p>John has over 20 years of experience in the transportation industry...</p>
            </div>
            <div className="team-member">
                <h2>Jane Smith</h2>
                <p>Operations Manager</p>
                <p>Jane is responsible for overseeing the day-to-day operations...</p>
            </div>
            <div className="team-member">
                <h2>Mike Johnson</h2>
                <p>Logistics Coordinator</p>
                <p>Mike ensures that all logistics are handled efficiently...</p>
            </div>
            {/* Add more team members as needed */}
        </div>
    );
};

export default Team;