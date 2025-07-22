import { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.wrap}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleInputChange}
            className={s.input}
          />
          <button type="submit" className={s.button} aria-label="Search">
            <FaSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
