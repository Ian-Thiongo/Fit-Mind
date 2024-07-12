import React from 'react';
import './ChallengeBox.css';

const ChallengeBox = ({ challenge }) => {
  return (
    <div className="challenge-box">
      <h2>{challenge.day}</h2>
      <div>
        <h3>Mental Challenges</h3>
        <ul>
          {challenge.mentalChallenges.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Physical Challenges</h3>
        <ul>
          {challenge.physicalChallenges.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChallengeBox;
