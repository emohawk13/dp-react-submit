import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [homePlanet, setHomePlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://www.swapi.tech/api/people/${id}`
        );
        setUser(response.data.result.properties);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleAboutClick = async () => {
    if (loading || details) return;

    setLoading(true);
    try {
      const planetResponse = await axios.get(user.homeworld);
      setHomePlanet(planetResponse.data.result.properties.name);

      setDetails({
        description: "A person within the Star Wars universe",
        eye_color: user.eye_color,
        birth_year: user.birth_year,
        gender: user.gender,
        hair_color: user.hair_color,
      });
    } catch (error) {
      console.error("Error fetching details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="users">
        {user ? (
          <div>
            <h1>{user.name}</h1>
            {details ? (
              <div>
                {homePlanet && <p>Home Planet: {homePlanet}</p>}
                <p>Description: {details.description}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Birth Year: {details.birth_year}</p>
                <p>Gender: {details.gender}</p>
                <p>Hair Color: {details.hair_color}</p>
              </div>
            ) : (
              <button onClick={handleAboutClick} disabled={loading || details}>
                {loading ? "Loading..." : "About"}
              </button>
            )}
            <button onClick={() => navigate("/")}>Go Home</button>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </div>
  );
};

export default User;
