import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { sample } from "lodash";

// Search API

// Image URL
const sampleImageUrl =
  "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_t.jpg";

// Detail Page URL
const sampleImagePageUrl = "https://www.flickr.com/photos/{user-id}/{photo-id}";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSearch = async () => {
    try {
      const sampleSearchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=45f3250ea1007f942d0e60c3d600da01&text=${userInput}&format=json&nojsoncallback=1`;
      const response = await fetch(sampleSearchUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log(data.photos.photo);
      setPhotos(data.photos.photo);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <div className="App">
      <h1>Photo Search</h1>
      <input
        type="text"
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <div className="grid">
        {photos.map((photo) => (
          <div className="grid-item" key={photo.id}>
            <a
              href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`}
              target="_blank"
            >
              <img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
