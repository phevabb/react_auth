import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("no way");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myToken")}`,
          },
        });
        const user = response.data;
        setMessage(`hi ${user.first_name} ${user.last_name}`);
      } catch (e) {
        setMessage("no way");
      }
    })();
  }, []);

  return <div>{message}</div>;
};

export default Home;
