import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './team.css'
import AlienScoccer from './teamlogo/AlienSoccer.jpg'
import ArcticWolvesSC from './teamlogo/ArcticWolvesSC.jpg'
import ForestRangersSC from './teamlogo/ForestRangersSC.jpeg'
import GoldenWaves from './teamlogo/GoldenWaves.jpg'
import MysticUnicornsFC from './teamlogo/MysticUnicornsFC.jpg'
import SkylineStrikersFC from './teamlogo/SkylineStrikersFC.jpg'
import ThunderboltsFC from './teamlogo/ThunderboltsFC.jpg'
import UrbanKnightsFC from './teamlogo/UrbanKnightsFC.jpg'


// Define a TeamMember component to display individual team member details
const TeamLogo = ({ name, photo }) => (
  <div className="team-logo-cover">
    <Link to={`/teaminfo/${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <img className="teamimg" src={photo} alt={name} />
      <h3>{name}</h3>
    </Link>
  </div>
);


export default function Team() {
  const teamLogo = [
    { name: "Forest Rangers SC",photo :ForestRangersSC},
    { name: "Alien Soccer", photo: AlienScoccer },
    { name: "Arctic Wolves SC", photo: ArcticWolvesSC },
    { name: "Golden Waves", photo: GoldenWaves },
    { name: "Mystic Unicorns FC", photo: MysticUnicornsFC },
    { name: "Skyline Strikers FC", photo:SkylineStrikersFC  },
    { name: "Thunderbolts FC", photo: ThunderboltsFC },
    { name: "Urban Knights FC", photo: UrbanKnightsFC },
  ];

  return (
    <div className="team-section">
      <h1>Teams</h1>
      <div className="team-logo">
        {teamLogo.map((member, index) => (
          <TeamLogo
            key={index}
            name={member.name}
            photo={member.photo}
          />
        ))}
        </div>
      </div>
  );
}
