import React from 'react';
import './team.css';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'Lead Developer' },
        { id: 2, name: 'Jane Smith', role: 'Designer' },
        { id: 3, name: 'Mike Johnson', role: 'Product Manager' },
    ];

    return (
        <div className="team-container">
            <h2 className="team-title">Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <div className="team-avatar"></div>
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;