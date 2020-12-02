import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className={`search__buttons ${hideButtons && "hidden"}`}>
        <Button variant="outlined" onClick={search} type="submit">
          Google Search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
    </form>
  );
}

export default Search;
