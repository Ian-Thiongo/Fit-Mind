import React, { useState } from 'react';
import './mindfulness.css';

const initialSessions = [
  {
    id: 1,
    title: 'Loving-Kindness Meditation (Metta)',
    description: 'Cultivates an attitude of love and kindness towards oneself and others.',
    instructions: 'Silently repeat phrases like “May I be happy,” “May you be safe,” gradually extending these wishes to others.',
  },
  {
    id: 2,
    title: 'Body Scan Meditation',
    description: 'Enhances body awareness and relaxation.',
    instructions: 'Mentally scan your body from head to toe, notice any tension or sensations, and allow them to release.',
  },
  {
    id: 3,
    title: 'Transcendental Meditation',
    description: 'Uses a mantra to settle the mind into a state of restful awareness.',
    instructions: 'Repeat a specific word or phrase (mantra) silently for 15-20 minutes twice a day.',
  },
  {
    id: 4,
    title: 'Zen Meditation (Zazen)',
    description: 'Seeks to achieve insight and calm through seated meditation.',
    instructions: 'Sit in a specific posture, focus on your breath, and sometimes count breaths or practice koans (paradoxical questions).',
  },
  {
    id: 5,
    title: 'Vipassana Meditation',
    description: 'Aims to gain insight into the true nature of reality through mindfulness and self-observation.',
    instructions: 'Observe your thoughts and sensations with the goal of seeing things as they really are, often practiced during intensive retreats.',
  },
  {
    id: 6,
    title: 'Chakra Meditation',
    description: 'Focuses on balancing the body’s energy centers (chakras).',
    instructions: 'Concentrate on each of the seven chakras, visualize them, and use specific sounds or mantras associated with each.',
  },
  {
    id: 7,
    title: 'Yoga Nidra',
    description: 'A guided meditation that induces a state of deep relaxation and conscious awareness.',
    instructions: 'Lie down and follow a guided script that takes you through stages of relaxation and body awareness.',
  },
  {
    id: 8,
    title: 'Guided Meditation',
    description: 'Uses a guide or recorded voice to lead the practitioner through a meditation session.',
    instructions: 'Follow instructions that may involve visualization, body scans, or affirmations.',
  },
  {
    id: 9,
    title: 'Qigong Meditation',
    description: 'Combines movement, breath control, and meditation to cultivate and balance energy (qi).',
    instructions: 'Perform slow, deliberate movements with focused breathing and visualization.',
  },
  {
    id: 10,
    title: 'Mantra Meditation',
    description: 'Involves the repetition of a word or phrase to focus the mind.',
    instructions: 'Silently or audibly repeat a chosen mantra, which can be a word, phrase, or sound.',
  },
  {
    id: 11,
    title: 'Sound Meditation',
    description: 'Uses sound to focus the mind and achieve relaxation.',
    instructions: 'Listen to instruments like gongs, singing bowls, or even recorded nature sounds.',
  },
];

const MindfulnessSessions = () => {
  const [sessions, setSessions] = useState(initialSessions);
  const [selectedSession, setSelectedSession] = useState(null);
  const [newSessionTitle, setNewSessionTitle] = useState('');
  const [newSessionDescription, setNewSessionDescription] = useState('');
  const [newSessionInstructions, setNewSessionInstructions] = useState('');
  const [newSessionTime, setNewSessionTime] = useState('');
  const [newSessionDuration, setNewSessionDuration] = useState('');
  const [newSessionDifficulty, setNewSessionDifficulty] = useState('');

  const handleClick = (session) => {
    setSelectedSession(session);
  };

  const addSession = () => {
    if (
      newSessionTitle.trim() !== '' &&
      newSessionDescription.trim() !== '' &&
      newSessionInstructions.trim() !== '' &&
      newSessionTime.trim() !== '' &&
      newSessionDuration.trim() !== '' &&
      newSessionDifficulty.trim() !== ''
    ) {
      const newSession = {
        id: sessions.length + 1,
        title: newSessionTitle,
        description: newSessionDescription,
        instructions: newSessionInstructions,
        time: newSessionTime,
        duration: newSessionDuration,
        difficulty: newSessionDifficulty,
      };
      setSessions([...sessions, newSession]);
      setNewSessionTitle('');
      setNewSessionDescription('');
      setNewSessionInstructions('');
      setNewSessionTime('');
      setNewSessionDuration('');
      setNewSessionDifficulty('');
    }
  };

  return (
    <div className='mindfulness-body'>
      <h1>Mindfulness Sessions</h1>
      <div className="sessions-grid">
        {sessions.map((session) => (
          <div key={session.id} className="session-card" onClick={() => handleClick(session)}>
            <h2>{session.title}</h2>
            {selectedSession === session && (
              <div className="session-details">
                <p><strong>Description:</strong> {session.description}</p>
                <p><strong>Instructions:</strong> {session.instructions}</p>
                {session.time && <p><strong>Time:</strong> {session.time}</p>}
                {session.duration && <p><strong>Duration:</strong> {session.duration}</p>}
                {session.difficulty && <p><strong>Difficulty:</strong> {session.difficulty}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default MindfulnessSessions;
