import React, {useState} from "react";

function ExerciseForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
    }
}  
