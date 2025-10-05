import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const uid = uuidv4();
    setRoomId(uid);
    toast.success("New room created");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-[#282a36] p-4 rounded-2xl w-[400px] max-sm:w-11/12">
        <img src="/code-sync.png" alt="code-sync-logo" className="w-1/2" />
        <h4 className="mt-8 text-sm text-white">Paste invitation ROOM ID</h4>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="ROOM ID"
            className="bg-white mt-5 p-1 rounded-sm outline-none"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)} // if user copy paste id then store it in state var
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="bg-white mt-5 p-1 rounded-sm outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="bg-[#4aee88] hover:bg-[#2eba64] px-10 cursor-pointer transition-all duration-250 ease-in-out self-end mt-2 py-1 rounded-sm font-semibold">
            Join
          </button>
          <span className="text-white text-sm text-center mt-5">
            If you don't have an invite then create &nbsp;
            <a
              href="#"
              onClick={createNewRoom}
              className="text-[#4aee88] border-b-2"
            >
              new room
            </a>
          </span>
        </div>
      </div>
      <footer className="fixed bottom-2">
        <h4 className="text-white">
          Built with 💚 by{" "}
          <a
            href="https://www.linkedin.com/in/dhruv1086k/"
            className="text-[#4aee88]"
          >
            Dhruv
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
