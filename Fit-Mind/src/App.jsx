import React from 'react';
import { useState } from 'react';
import './App.css';
import ChallengeBox from './Components/ChallengeBox';
import Goals from './Components/GoalsPage';

const challenges = [
  {
    day: "Monday",
    mentalChallenges: ["Meditate for 10 minutes", "Read a chapter of a book"],
    physicalChallenges: ["Go for a 30-minute walk", "Do 20 push-ups", "Stretch for 15 minutes", "Drink 2 liters of water", "Eat a healthy breakfast"]
  },
  {
    day: "Tuesday",
    mentalChallenges: ["Practice deep breathing", "Write in a journal"],
    physicalChallenges: ["Go for a run", "Do 30 sit-ups", "Stretch for 10 minutes", "Avoid sugar for a day", "Eat a fruit salad"]
  },
  {
    day: "Wednesday",
    mentalChallenges: ["Watch a TED talk", "Write down your goals"],
    physicalChallenges: ["Do yoga for 20 minutes", "Take a walk in nature", "Drink a green smoothie", "Do 15 squats", "Get 8 hours of sleep"]
  },
  {
    day: "Thursday",
    mentalChallenges: ["Practice gratitude", "Read an article"],
    physicalChallenges: ["Go for a bike ride", "Do a HIIT workout", "Stretch for 15 minutes", "Drink herbal tea", "Avoid processed foods"]
  },
  {
    day: "Friday",
    mentalChallenges: ["Meditate for 10 minutes", "Listen to a podcast"],
    physicalChallenges: ["Go swimming", "Do 20 lunges", "Stretch for 15 minutes", "Stay hydrated", "Eat a salad"]
  },
  {
    day: "Saturday",
    mentalChallenges: ["Journal your thoughts", "Do a puzzle"],
    physicalChallenges: ["Go for a hike", "Do 50 jumping jacks", "Stretch for 10 minutes", "Drink 2 liters of water", "Have a balanced meal"]
  },
  {
    day: "Sunday",
    mentalChallenges: ["Plan your week", "Read a book"],
    physicalChallenges: ["Do a home workout", "Take a walk with family", "Stretch for 20 minutes", "Eat a healthy brunch", "Avoid caffeine"]
  },
];

function App() {
  return (
    <div className="App">
      {/* <Goals /> */}
      <h1>Daily Challenges</h1>
      <div className="main-container">
        <div className="challenges-container">
          {challenges.map((challenge, index) => (
            <ChallengeBox key={index} challenge={challenge} />
          ))}
        </div>
        <div className="congratulations-container">
          <p className="congratulations">Congratulations for making it through the week!</p>
        </div>
      </div>
    </div>
  );
}

export default App;

