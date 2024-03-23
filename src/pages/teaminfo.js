import React, { useState } from "react";
import './teaminfo.css';
import ForestRangersSC from './teamlogo/ForestRangersSC.jpeg';

const TeamMember = ({ id, name, position, imageUrl, onDelete }) => (
  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
    <div className="card">
      <img className="card-img" src={imageUrl} alt={name} />
      <p className="text-blk name">{name}</p>
      <p className="text-blk position">{position}</p>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  </div>
);

export default function TeamInfo() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alejandro Rivera", position: "GK", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft1.svg" },
    { id: 2, name: "Bruno Martins", position: "LB", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft2.svg" },
    { id: 3, name: "Carlos Silva", position: "CB", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft3.svg" },
    { id: 4, name: "Diego López", position: "CB", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft4.svg" },
    { id: 5, name: "Eduardo Vargas", position: "RB", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft5.svg" },
    { id: 6, name: "Fernando Gomes", position: "LM", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft6.svg" },
    { id: 7, name: "Giovanni Rossi", position: "CM", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft7.svg" },
    { id: 8, name: "Hector Fernandez", position: "CM", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft8.svg" },
    { id: 9, name: "Ivan Petrov", position: "RM", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft9.svg" },
    { id: 10, name: "Jorge Mendez", position: "ST", imageUrl: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft10.svg" },
  ]);
  const [newMember, setNewMember] = useState({ name: '', position: '' });
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const handleAddMember = () => {
    if (newMember.name && newMember.position ) {
      setTeamMembers([...teamMembers, { ...newMember, id: Date.now() }]);
      setNewMember({ name: '', position: ''}); 
    } else {
      alert('Please fill in all fields for the new member.');
    }
  };

  const handleDeleteMember = (memberId) => {
    setTeamMembers(teamMembers.filter(member => member.id !== memberId));
  };

  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
          <p className="text-blk heading-text">Meet Forest Rangers SC</p>
          <img className="winnerlogo" src={ForestRangersSC} alt="Forest Rangers SC" />
          <button className="favorite-btn" onClick={toggleFavorite}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
        <div className="add-player-form">
          <input
            type="text"
            placeholder="Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Position"
            value={newMember.position}
            onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
          />
          <button onClick={handleAddMember}>Add Player</button>
        </div>
        <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
          {teamMembers.map(member => (
            <TeamMember
              key={member.id}
              id={member.id}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              onDelete={handleDeleteMember}
            />
          ))}
        </div>
       
      </div>
    </div>
  );
}