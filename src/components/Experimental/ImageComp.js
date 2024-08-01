import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common-styles.scss";

const Image = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  const UNSPLASH_ACCESS_KEY = "aX5DPvC4wSVau6LN1-04sDzRFG6r_F8PnbvDBWV7vpI";
  const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(UNSPLASH_API_URL, {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        });
        setImage(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchImage();
  }, [UNSPLASH_ACCESS_KEY]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching image: {error.message}</p>;

  return (
    <div className="image">
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || "No description available"}
        />
      )}
    </div>
  );
};

export default Image;

// this works but I ran out of free tokens.
