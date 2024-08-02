import React from "react";
import "../styles/common-styles.scss";

const ProfileCard = ({ profile }) => {
  const handleAction = () => {
    console.log(`Action clicked for ${profile.name}`);
  };

  return (
    <div className="profile-card">
      <div className="title-container">
        <div className="profile-image">
          <img src={profile.imageUrl} alt={profile.name} />
        </div>
        <div className="profile-details">
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      </div>
      <img src={profile.logoUrl} alt="Logo" className="profile-logo" />
      <button onClick={handleAction}>Action</button>
    </div>
  );
};

export default ProfileCard;
