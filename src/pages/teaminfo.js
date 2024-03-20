import React, { useState } from "react";
import ForestRangersSC from './teamlogo/ForestRangersSC.jpeg'
import './teaminfo.css'
const TeamMember = ({ name, position, imageUrl }) => (
    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
      <div className="card">
        <img className="card-img" src={imageUrl} alt={name} />
        <p className="text-blk name">{name}</p>
        <p className="text-blk position">{position}</p>
      </div>
    </div>
  );
export default function TeamInfo() {
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle favorite status
  const toggleFavorite = () => setIsFavorite(!isFavorite);
    return (
        <div className="responsive-container-block outer-container">
        <div className="responsive-container-block inner-container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
            <p className="text-blk heading-text">Meet Forest Rangers SC </p>
            <img className="winnerlogo" src={ForestRangersSC} alt="Forest Rangers SC" />
            {/* Favorite Button */}
          <button
            className="favorite-btn"
            onClick={toggleFavorite}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
          </div>
          <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
            <TeamMember
              name="Gustavo Workman"
              position="COACH"
              imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"
            />
            {/* Repeat for each team member */}
            <TeamMember
              name="Gustavo Workman"
              position="CF"
              imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"
            />
            <TeamMember name="Alejandro Rivera" position="GK" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft1.svg" />
<TeamMember name="Bruno Martins" position="LB" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft2.svg" />
<TeamMember name="Carlos Silva" position="CB" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft3.svg" />
<TeamMember name="Diego López" position="CB" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft4.svg" />
<TeamMember name="Eduardo Vargas" position="RB" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft5.svg" />
<TeamMember name="Fernando Gomes" position="LM" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft6.svg" />
<TeamMember name="Giovanni Rossi" position="CM" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft7.svg" />
<TeamMember name="Hector Fernandez" position="CM" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft8.svg" />
<TeamMember name="Ivan Petrov" position="RM" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft9.svg" />
<TeamMember name="Jorge Mendez" position="ST" imageUrl="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft10.svg" />
            
            {/* Add more TeamMember components as needed */}
          </div>
        </div>
      </div>
    );
}