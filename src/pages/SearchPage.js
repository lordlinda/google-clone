import Search from "./Search";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import ImageIcon from "@material-ui/icons/Image";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//https://developers.google.com/custom-serach/v1/using_rest
//https://cse.google.com/cse/create/new
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https:www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__options">
        <div className="searchPage__optionsLeft">
          <div className="searchPage__option">
            <SearchIcon />
            <NavLink to="/search">All</NavLink>
          </div>
          <div className="searchPage__option">
            <DescriptionIcon />
            <NavLink to="/search">News</NavLink>
          </div>
          <div className="searchPage__option">
            <ImageIcon />
            <NavLink to="/search">Images</NavLink>
          </div>
          <div className="searchPage__option">
            <LocalOfferIcon />
            <NavLink to="/search">Shopping</NavLink>
          </div>
          <div className="searchPage__option">
            <LocationOnIcon />
            <NavLink to="/search">maps</NavLink>
          </div>
          <div className="searchPage__option">
            <MoreVertIcon />
            <NavLink to="/search">more</NavLink>
          </div>
        </div>
        <div className="searchPage__optionsRight">
          <div className="searchPage__option">
            <NavLink to="/search">Settings</NavLink>
          </div>

          <div className="searchPage__option">
            <NavLink to="/search">Tools</NavLink>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults}{" "}
            formattedTotalResults ({data?.searchInformation.formattedSearchTime}{" "}
            seconds) for {term}
          </p>
          {data?.items?.map((item) => (
            <div className="searchPage__result" key={item.cacheId}>
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
