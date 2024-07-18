import React, { useState } from "react";
import "./profile.css";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Ali");
  const [bio, setBio] = useState("Short bio here...");
  const [hobbies, setHobbies] = useState("List hobbies here...");
  const [nationality, setNationality] = useState("Your nationality...");
  const [gender, setGender] = useState("Your preferred gender here...");
  const [email, setEmail] = useState("Your email...");
  
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    
    <div className="profile-page">
      <div className="title">Profile</div>
      <div className="profile-container">
        <div className="header">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              {avatar ? (
                <img src={avatar} alt="avatar" className="avatar" />
              ) : (
                "Upload Photo"
              )}
            </div>
            <input
              type="file"
              id="avatarUpload"
              className="file-input"
              onChange={handleAvatarChange}
            />
          </div>
          <FiEdit className="edit-icon" onClick={toggleEdit} />
        </div>
        <div className="details">
          <div className="detail-item">
            <span className="label">Name:</span>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <span className="content">{name}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="label">Gender:</span>
            {editing ? (
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            ) : (
              <span className="content">{gender}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="label">Nationality:</span>
            {editing ? (
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            ) : (
              <span className="content">{nationality}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="label">Bio:</span>
            {editing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            ) : (
              <span className="content">{bio}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="label">Hobbies:</span>
            {editing ? (
              <input
                type="text"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
              />
            ) : (
              <span className="content">{hobbies}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            {editing ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span className="content">{email}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;