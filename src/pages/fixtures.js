import React from 'react';
import { Link } from 'react-router-dom';
import './fixtures.css'


export default function Fixtures() {
  const matches = [
    {
      time: '11:00',
      day: 'Wednesday',
      month: 'April 1',
      teamLeft: { name: 'Forest Rangers SC', score: 1 },
      teamRight: { name: 'Alien Soccer', score: 2}
    },
    {
      time: '11:00',
      day: 'Saturday',
      month: 'April 4',
      teamLeft: { name: 'Arctic Wolves SC', score: null },
      teamRight: { name: 'Golden Waves', score: null }
    },
    {
      time: '11:00',
      day: 'Wednesday',
      month: 'April 8',
      teamLeft: { name: 'Mystic Unicorns FC', score: null },
      teamRight: { name: 'Skyline Strikers FC', score: null }
    },
    {
      time: '11:00',
      day: 'Saturday',
      month: 'April 11',
      teamLeft: { name: 'Thunderbolts FC', score: null },
      teamRight: { name: 'Urban Knights FC', score: null }
    }
];


  // MatchItem component for each match
  const MatchItem = ({ time, day, month,  teamLeft, teamRight }) => (
    <div className="r18-items">
      <div className="r18-time">
        <div className="r18-hour">{time}</div>
        <div className="r18-text">
          <span>{day}</span>
          <span>{month}</span>
        </div>
      </div>

      <div className="r18-columns">
        <Team {...teamLeft} side="l" />
        <Team {...teamRight} side="r" />
      </div>
    </div>
  );

  // Team component for each team in a match
  const Team = ({ name, score, side }) => (
    <div className={`r18-team-${side}`} data-score={score}>
      <span className="r18-name">{name}</span>
      <span className="r18-score">{score}</span>
    </div>
  );

  return (
    <div>
    <Link to="/matchinfo">
    <button class="registerbutton">Detailed Match Info</button>
  </Link>
    <div className="r18-container">
      {matches.map((match, index) => (
        <MatchItem key={index} {...match} />
      ))}
    </div>
    </div>
  );
}
