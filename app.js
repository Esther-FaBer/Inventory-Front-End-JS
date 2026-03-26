import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getArtworks } from "./Api.jsx";
import './App.css';
import ArtworkGrid from "./Components/ArtworkGrid.jsx";
import ArtworkDetail from "./Components/ArtworkDetail.jsx";
import Header from "./Components/Header.jsx";

function App() {
  const [artworks, setArtworks] = useState([]); 
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [hasErrored, setHasErrored] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [activeCategory, setActiveCategory] = useState("All");
 
  const CATEGORIES = ["All", "Painting", "Sculpture", "Print & Photography", "Mixed Media"];
 
  // fetch all artworks from the api
  const fetchArtworks = async () => {
    try {
      const data = await getArtworks();
      setArtworks(data);
      setFilteredArtworks(data); 
      setIsLoading(false);
    } catch (err) {
      setHasErrored(err);
      setIsLoading(false);
    }
  };
 
  // fetch artworks as soon as the app mounts
  useEffect(() => {
    fetchArtworks();
  }, []);
 
  // re-filter whenever the search query or active category changes
  useEffect(() => {
    let results = artworks;
 
    if (activeCategory !== "All") {
      results = results.filter(
        (artwork) => artwork.medium === activeCategory
      );
    }
 
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(query) ||
          artwork.artist.toLowerCase().includes(query)
      );
    }
 
    setFilteredArtworks(results);
  }, [searchQuery, activeCategory, artworks]);
 
  if (isLoading) {
    return <p>Loading...</p>;
  }
 
  if (hasErrored) {
    return <p>Error: {hasErrored.message}</p>;
  }
 
  return (
    <>
      <div className="App">
        <Header />
        <header className="Title">
          <h1>Art Inventory</h1>
 
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by title or artist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
 
          {/* Category filter buttons */}
          <nav className="category-filters">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </nav>
        </header>
 
        <Routes>
          {/* Main grid — passes filtered artworks down to ArtworkGrid */}
          <Route
            path="/"
            element={<ArtworkGrid artworks={filteredArtworks} />}
          />
          {/* Detail page — passes artwork id via URL param to ArtworkDetail */}
          <Route
            path="/artwork/:id"
            element={<ArtworkDetail artworks={artworks} />}
          />
        </Routes>
      </div>
    </>
  );
}
 
export default App;