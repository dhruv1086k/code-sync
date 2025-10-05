import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  console.log(username);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-2">
      <Avatar name={username} size={50} round="14px" />
      <span className="text-white text-sm">{username}</span>
    </div>
  );
};

export default Client;
