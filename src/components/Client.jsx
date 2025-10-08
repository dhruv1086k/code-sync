import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-24 bg-[#282A36] m-1 flex flex-col items-center justify-center p-1.5 sm:p-2 gap-1 rounded-2xl">
      <Avatar
        name={username}
        size={window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 36 : 44}
        round="14px"
      />
      <span className="text-white text-[10px] sm:text-xs md:text-sm truncate max-w-full px-0.5">
        {username}
      </span>
    </div>
  );
};

export default Client;
