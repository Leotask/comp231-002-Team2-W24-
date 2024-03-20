import React from 'react';
import './matchinfo.css'

const matchResults = [
  {
    id: 1,
    date: '2024-02-20',
    time: '15:00',
    venue: 'Stadium A',
    homeTeam: 'Team A',
    awayTeam: 'Team B',
    result: '3-2',
    homegoalPlayers: ['Player 1', 'Player 2', 'Player B1'],
    awaygoalPlayers: ['Player 1', 'Player 2'],
    yellowCards: 2,
    redCards: 0,
    referee: 'Referee A',
  },
  {
    id: 2,
    date: '2024-02-21',
    time: '18:00',
    venue: 'Stadium B',
    homeTeam: 'Team C',
    awayTeam: 'Team D',
    result: '1-1',
    homegoalPlayers: ['Player C1'],
    awaygoalPlayers: ['Player 1'],
    yellowCards: 1,
    redCards: 1,
    referee: 'Referee B',
  },
];

export default function MatchInfo() {
  return (
    <div>
          <table className="match-info-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Result</th>
                <th>Home Team Goal Players</th>
                <th>Away Team Goal Players</th>
                <th>Yellow Cards</th>
                <th>Red Cards</th>
                <th>Referee</th>
              </tr>
            </thead>
            <tbody>
              {matchResults.map((match) => (
                <tr key={match.id}>
                  <td>{match.date}</td>
                  <td>{match.time}</td>
                  <td>{match.venue}</td>
                  <td>{match.homeTeam}</td>
                  <td>{match.awayTeam}</td>
                  <td>{match.result}</td>
                  <td>{match.homegoalPlayers.join(', ')}</td>
                  <td>{match.awaygoalPlayers.join(', ')}</td>
                  <td>{match.yellowCards}</td>
                  <td>{match.redCards}</td>
                  <td>{match.referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        );
    }