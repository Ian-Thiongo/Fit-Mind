import React, { useState } from 'react';
import './FitnessChallenge.css';


const beginnerExercises = [
  'Push-ups - 3 sets of 10 reps',
  'Bodyweight Squats - 3 sets of 15 reps',
  'Plank - 3 sets of 30 seconds',
  'Jumping Jacks - 3 sets of 20 reps'
];

const advancedExercises = [
  'Handstand Push-ups - 3 sets of 5 reps',
  'Pistol Squats - 3 sets of 10 reps each leg',
  'One-arm Plank - 3 sets of 30 seconds each side',
  'Burpees - 3 sets of 20 reps'
];

const FitnessChallenge = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const renderExercises = () => {
    const exercises = selectedLevel === 'beginner' ? beginnerExercises : advancedExercises;

    return (
      <div className="exercise-list">
        <h2>{selectedLevel === 'beginner' ? 'Beginner Exercises' : 'Advanced Exercises'}</h2>
        <div className="exercise-container">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-box">{exercise}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fitness-challenge">
      <h1>Fitness Challenge</h1>
      <p>Welcome to your fitness challenge! Choose your level to see a list of exercises.</p>
      <p>Choose your fitness level:</p>
      <div className="button-container">
        <button className="level-button" onClick={() => handleLevelSelect('beginner')}>Beginner</button>
        <button className="level-button" onClick={() => handleLevelSelect('advanced')}>Advanced</button>
      </div>
      {selectedLevel && renderExercises()}
    </div>
  );
};

export default FitnessChallenge;