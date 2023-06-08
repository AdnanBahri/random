import React from "react";

const Client = ({ data }) => {
  return (
    <div className="w-full py-8 px-4 rounded-md bg-white text-slate-900 flex items-center justify-center">{`${data.name} : ${data.address}`}</div>
  );
};

export default Client;
