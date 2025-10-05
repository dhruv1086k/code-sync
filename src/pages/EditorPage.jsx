import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    // whenever user connects then we will get a socket id
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
  ]);

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-[250px] h-screen p-5 bg-[#282a36] flex flex-col justify-between">
        <div className="h-5/6 text-white">
          <div className="w-full h-1/4">
            <img src="/code-sync.png" alt="" className="w-4/5" />
            <h3 className="mt-3">🟢Connected</h3>
            <hr className="bg-gray-600 mt-3" />
          </div>
          <div className="flex flex-wrap mt-5 overflow-auto h-3/4">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <div className="h-1/6 flex flex-col justify-end items-center gap-2">
          <button className="bg-[#48EB86] text-sm cursor-pointer w-[150px] whitespace-nowrap px-5 py-1 rounded-sm">
            Copy ROOM ID
          </button>
          <button className="bg-[#E62727] text-sm cursor-pointer text-white w-[150px] whitespace-nowrap px-5 py-1 rounded-sm">
            Leave
          </button>
        </div>
      </div>

      {/* code area wrapper */}
      <div>
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
