import React, { useState } from 'react';
import './Goalspage.css';

const Goals = () => {
    const [goals, setGoals] = useState({});
    const [goalText, setGoalText] = useState('');
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDate, setGoalDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (goalText.trim() === '' || goalTitle.trim() === '' || goalDate.trim() === '') return;

        const key = `${goalTitle}-${goalDate}`;
        const newGoals = { ...goals };

        if (!newGoals[key]) {
            newGoals[key] = { title: goalTitle, date: goalDate, goals: [] };
        }

        newGoals[key].goals.push({ text: goalText, completed: false });

        setGoals(newGoals);
        setGoalText('');
        setGoalTitle('');
        setGoalDate('');
    };

    const handleCheckboxChange = (groupKey, index) => {
        const newGoals = { ...goals };
        newGoals[groupKey].goals[index].completed = !newGoals[groupKey].goals[index].completed;
        setGoals(newGoals);
    };

    return (
        <div className="container">
            <div className="vertical-title">Dream. <br /> Plan. <br />Do.</div>
            <h1>My Goals</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={goalTitle}
                    onChange={(e) => setGoalTitle(e.target.value)}
                    placeholder="Enter goal title"
                    required
                />
                <input
                    type="text"
                    value={goalText}
                    onChange={(e) => setGoalText(e.target.value)}
                    placeholder="Enter a new goal"
                    required
                />
                <input
                    type="date"
                    value={goalDate}
                    onChange={(e) => setGoalDate(e.target.value)}
                    required
                />
                <button type="submit">Add Goal</button>
            </form>
            {Object.keys(goals).map((groupKey) => (
                <div key={groupKey} className="goal-group">
                    <div className="goal-title">{goals[groupKey].title}</div>
                    <div className="goal-date">({goals[groupKey].date})</div>
                    <ul>
                        {goals[groupKey].goals.map((goal, index) => (
                            <li key={index} className={goal.completed ? 'completed' : ''}>
                                <input
                                    type="checkbox"
                                    checked={goal.completed}
                                    onChange={() => handleCheckboxChange(groupKey, index)}
                                />
                                {goal.text}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Goals;
