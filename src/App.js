import React from "react";
import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import profiles from "./data";
import "./styles/common-styles.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="profile-cards">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <footer className="footer">&copy; 2024 Dauhson Capps</footer>
    </div>
  );
};

export default App;
