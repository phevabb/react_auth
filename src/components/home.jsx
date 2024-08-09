import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("no way");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("user/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log(response);
        const user = response.data;
        setMessage(`hi ${user.first_name} ${user.last_name}`);
      } catch (e) {
        setMessage("no way");
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default Home;
