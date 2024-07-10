import React, { useState } from 'react';
import './GoalsPage.css';

const Goal = () => {
    const [goals, setGoals] = useState([]);
    const [goalText, setGoalText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (goalText.trim() === '') return;
    setGoals([...goals, { text: goalText, completed: false }]);
    setGoalText('');
};

const handleCheckboxChange = (index) => {
    const newGoals = goals.map((goal, i) => {
        if (i === index) {
            return { ...goal, completed: !goal.completed };
        }
        return goal;
    });
    setGoals(newGoals);
};

return (
  
    <div className="container">
        <h1>My Goals</h1>
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                placeholder="Enter a new goal"
                required
            />
            <button type="submit">Add Goal</button>
        </form>
        <ul>
            {goals.map((goal, index) => (
                <li key={index} className={goal.completed ? 'completed' : ''}>
                    <input
                        type="checkbox"
                        checked={goal.completed}
                        className='box'
                        onChange={() => handleCheckboxChange(index)}
                    />
                    {goal.text}
                </li>
            ))}
        </ul>
    </div>
    
);
};

export default Goal;