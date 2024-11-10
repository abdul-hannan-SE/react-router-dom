// import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";
function Github() {
  // const [data, setData] = useState([]);
  // const { userId } = useParams();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/abdul-hannan-SE")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  const data = useLoaderData();

  return (
    <>
      <div className="bg-gray-600 flex-col mx-20  justify-center text-white">
        <img src={data?.avatar_url} width={200} alt="Could not load image" />
        <div>Abdul Hannan's Followers {data.followers}</div>
      </div>
    </>
  );
}

export default Github;
export const gitHubDataLoader = async () => {

  let res = await fetch("https://api.github.com/users/abdul-hannan-SE");
  return res.json();
};
