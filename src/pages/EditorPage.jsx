import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [menu, setMenu] = useState(true);
  const [clients, setClients] = useState([
    // whenever user connects then we will get a socket id
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
  ]);

  //   fucntion for toggling Menu
  const toggleMenu = () => {
    setMenu(false);
  };

  return (
    <div className="flex w-full">
      {/* sidebar */}
      <div
        className={`max-w-[250px] ${
          !menu && "hidden"
        } h-screen p-5 max-sm:p-2 bg-[#1C1E29] flex flex-col justify-between`}
      >
        <div className="h-5/6 text-white">
          <div className="w-full relative h-1/4">
            <div className="w-full flex justify-between items-center">
              <div className="w-[80%] flex justify-start items-center">
                <img src="/code-sync.png" alt="" className="w-[80%]" />
              </div>
              <div
                className="w-[20%] flex justify-center items-center"
                onClick={toggleMenu}
              >
                <i
                  className="ri-menu-2-line text-lg bg-[#282A36] py-0.5 px-2 rounded-lg
                "
                ></i>
              </div>
            </div>
            <div className="absolute bottom-2 w-full">
              <h3 className=" text-sm">🟢Connected</h3>
              <hr className="bg-gray-600 mt-3" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 overflow-auto h-3/4 content-start">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <div className="h-1/6 flex flex-col justify-end items-center gap-2">
          <button className="bg-[#48EB86] text-sm font-medium cursor-pointer w-[150px] whitespace-nowrap px-5 py-1 rounded-sm">
            Copy ROOM ID
          </button>
          <button className="bg-[#E62727] text-sm font-medium cursor-pointer text-white w-[150px] whitespace-nowrap px-5 py-1 rounded-sm">
            Leave
          </button>
        </div>
      </div>

      {/* code area wrapper */}
      <div className="w-full h-screen">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
