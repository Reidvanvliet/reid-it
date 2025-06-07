import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { selectCommunities, isLoading } from "./communitiesSlice";
import { getCommunities } from "../../api/Api";
import Spinner from "../../components/Spinner";

const CommunitiesSidebar = () => {
  const dispatch = useDispatch();
  const communitiesRaw = useSelector(selectCommunities);
  const isLoadingCommunities = useSelector(isLoading);
  const defaultImage = require('../../media/redditIcon.png')

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);

  if (isLoadingCommunities) {
    return (
      <div className="side-bar" id="sidebar">
        <Spinner />
      </div>
    );
  }

  const communities = {};

  communitiesRaw.data.children.map((community) => {
    if (!Object.hasOwn(communities, community.data.id)) {
      communities[community.data.id] = {
        id: community.data.id,
        name: community.data.display_name,
      };
      community.data.icon_img
        ? (communities[community.data.id].icon = community.data.icon_img)
        : (communities[community.data.id].icon = defaultImage)
    }
  });

  return (
    <>
      <div className="side-bar" id="sidebar">
        {Object.keys(communities).map((community) => {
          return (
            <div key={communities[community].id} className="community-sidebar">
              <img className="community-thumbnail" src={communities[community].icon} />
              <Link to={`/r/${communities[community].name}`}>
                <h3>{communities[community].name}</h3>
              </Link>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommunitiesSidebar;
