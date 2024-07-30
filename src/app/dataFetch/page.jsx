import React from "react";

const getPost = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

const getpostpage = async () => {
  const alldata = await getPost();
  return (
    <div>
      {alldata?.map((data, idx) => (
        <p key={idx}>{data.name.common}</p>
      ))}
    </div>
  );
};
export default getpostpage;
