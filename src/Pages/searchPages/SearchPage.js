import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Feed from "../../components/feed/Feed";

const SearchPage = () => {
  const location = useLocation();
  const searchReasult = location.state && location.state.searchResults;
  console.log(searchReasult);

  return (
    <div>
      <Header />
      <div className="app_body">
        <Sidebar  />
        {
          <Feed fed={searchReasult}/>
        }
        <Widget  />
      </div>
    </div>
  );
};

export default SearchPage;
