import React, { useState } from "react";
import "../searchbar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const items = [
    "Aarav",
    "Aisha",
    "Bhavesh",
    "Bhumika",
    "Chirag",
    "Chhaya",
    "Dev",
    "Diya",
    "Eshaan",
    "Ekta",
    "Farhan",
    "Fatima",
    "Gautam",
    "Gayatri",
    "Hitesh",
    "Heena",
    "Ishan",
    "Indira",
    "Jay",
    "Jyoti",
    "Karan",
    "Kavita",
    "Lakshya",
    "Leela",
    "Mohan",
    "Meera",
    "Nikhil",
    "Neha",
    "Om",
    "Ojaswini",
    "Pranav",
    "Priya",
    "Qamar",
    "Quasar",
    "Rahul",
    "Ritu",
    "Sameer",
    "Sunita",
    "Tarun",
    "Tanvi",
    "Uday",
    "Urvashi",
    "Vikram",
    "Vaishali",
    "Waqar",
    "Waheeda",
    "Xavier",
    "Xyla",
    "Yash",
    "Yogita",
    "Zahir",
    "Zara",
    "Prakriti Gupta",
    "Bhuvnesh Gupta",
    "Ujjawal Karma",
    "Purnesh Vishnole",
    "Mudit Tiwari",
    "Raghav Kadam",
    "Rajat Malviya",
    "Udit Bhawsar",
    "Bhupendra Solanki",
    "Amit Mahajan",
    "Aditya Goswami",
    "Utkarsh Thakur",
    "Puran Vishnole",
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    if (value) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
        className="search-bar"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
