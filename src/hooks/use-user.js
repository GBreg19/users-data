import axios from "axios";
import { useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  // infinite scroll

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  const scrollListener = () => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  };

  // fetching user list/user page/friends list

  const fetchUserData = async (type, userId = null, refresh = false) => {
    setIsLoading(true);
    try {
      let url;
      if (type === "users") {
        url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`;
        const response = await axios.get(url);
        const users = response.data.list;
        setUsers((prevState) => [...prevState, users]);
        setIsLoading(false);
      } else if (type === "user") {
        url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`;
        const response = await axios.get(url);
        const userInfo = response.data;
        setUser([userInfo]);
        setBreadCrumbs((prevState) => [...prevState, userInfo]);
        setIsLoading(false);
      } else {
        url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/${size}`;
        const response = await axios.get(url);
        const friends = response.data.list;
        if (refresh) {
          setFriendList(friends);
        } else {
          setFriendList((prevUsers) => [...prevUsers, ...friends]);
        }

        setIsLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      console.log(e);
    }
  };

  return {
    users,
    user,
    friendList,
    page,
    size,
    isLoading,
    error,
    scrollListener,
    fetchUserData,
    breadCrumbs,
  };
};

export default useUser;
