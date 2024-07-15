import React, { useState } from 'react';
import './FitnessChallenge.css';


const beginnerExercises = [
  'Push-ups - 3 sets of 10 reps',
  'Bodyweight Squats - 3 sets of 15 reps',
  'Plank - 3 sets of 30 seconds',
  'Jumping Jacks - 3 sets of 20 reps',
  'Lunges - 3 sets of 10 reps each leg',
  'Sit-ups - 3 sets of 15 reps',
  'Mountain Climbers - 3 sets of 20 reps',
  'Glute Bridges - 3 sets of 15 reps',
  'Superman - 3 sets of 15 reps',
  'Calf Raises - 3 sets of 20 reps',
  'Bicycle Crunches - 3 sets of 20 reps',
  'Wall Sit - 3 sets of 30 seconds',
  'Tricep Dips (on a chair) - 3 sets of 12 reps',
  'High Knees - 3 sets of 20 reps'
];

const advancedExercises = [
  'Handstand Push-ups - 3 sets of 5 reps',
  'Pistol Squats - 3 sets of 10 reps each leg',
  'One-arm Plank - 3 sets of 30 seconds each side',
  'Burpees - 3 sets of 20 reps',
  'Muscle-ups - 3 sets of 5 reps',
  'Dragon Flags - 3 sets of 10 reps',
  'Single-leg Deadlifts - 3 sets of 12 reps each leg',
  'One-arm Push-ups - 3 sets of 5 reps each arm',
  'Front Lever - 3 sets of 10 seconds',
  'Sprints - 3 sets of 30 seconds',
  'Clap Push-ups - 3 sets of 10 reps',
  'Hanging Leg Raises - 3 sets of 15 reps',
  'Box Jumps - 3 sets of 15 reps',
  'Pull-ups - 3 sets of 15 reps'
  
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
    <div className="fitness">
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
    </div>
  );
};

export default FitnessChallenge;