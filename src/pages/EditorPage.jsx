import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { initSocket } from "../socket";
import { ACTIONS } from "../Actions.js";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";

const EditorPage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      //   run these function when there is an error
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("Socket error ", e);
        toast.error("Socket connection failed, try again later");
        reactNavigator("/");
      }

      //   after connection we are emitting an action
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username, // we have passed this value while redirecting in home.jsx
      });
    };
    init();
  }, []);

  const [menu, setMenu] = useState(false);
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Dhruv Pal" },
    { socketId: 3, username: "John Doe" },
  ]);

  if (!location.state) {
    return <Navigate to="/" />;
  }

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="flex w-full">
      {/* ============================== SIDEBAR =============================== */}
      <div
        className={`${
          menu ? "w-[100px]" : "max-w-[250px]"
        } h-screen p-5 max-sm:p-2 bg-[#1C1E29] flex flex-col justify-between transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className="h-5/6 text-white flex flex-col">
          <div className="w-full relative h-1/4 flex-shrink-0">
            <div className="w-full flex justify-between items-center">
              <div
                className={`flex-1 flex justify-start items-center overflow-hidden transition-all duration-500 ${
                  menu ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                <img
                  src="/code-sync.png"
                  alt="Code Sync Logo"
                  className="w-[80%]"
                />
              </div>

              {/* ============================== MENU TOGGLE BUTTON =============================== */}
              <button
                onClick={toggleMenu}
                className={`flex sm:hidden justify-center items-center transition-all duration-500 ${
                  menu ? "w-full" : "w-auto"
                }`}
                aria-label="Toggle menu"
              >
                <i className="ri-menu-2-line text-lg bg-[#282A36] py-0.5 px-2 rounded-lg hover:bg-[#363844] transition-colors" />
              </button>
            </div>

            <div
              className={`absolute bottom-2 w-full transition-all duration-200 ${
                menu ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
            >
              <h3 className="text-sm">🟢 Connected</h3>
              <hr className="bg-gray-600 mt-3 border-0 h-px" />
            </div>
          </div>

          <div
            className={`grid overflow-x-hidden gap-3 sm:gap-4 grid-cols-2 overflow-auto h-3/4 content-start ${
              menu ? "max-sm:grid-cols-1" : "grid-cols-2"
            }`}
          >
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        {/* ============================== SIDEBAR BOTTOM BUTTONS =============================== */}
        <div
          className={`h-1/6 flex flex-col justify-end items-center gap-2 max-sm:justify-start`}
        >
          <button
            className={`bg-[#48EB86] text-sm font-medium cursor-pointer px-5 py-2 rounded-sm hover:bg-[#3dd474] ${
              menu ? "w-12 h-10" : "w-[150px]"
            } flex justify-center items-center`}
            aria-label={menu ? "Copy Room ID" : undefined}
          >
            {menu ? (
              <i className="ri-file-copy-line text-base" />
            ) : (
              "Copy ROOM ID"
            )}
          </button>

          <button
            className={`bg-[#E62727] text-sm font-medium cursor-pointer text-white px-5 py-2 rounded-sm hover:bg-[#d11f1f] ${
              menu ? "w-12 h-10" : "w-[150px]"
            } flex justify-center items-center`}
            aria-label={menu ? "Leave room" : undefined}
          >
            {menu ? <i className="ri-logout-box-line text-base" /> : "Leave"}
          </button>
        </div>
      </div>

      {/* ============================== CODE AREA WRAPPER =============================== */}
      <div className="w-full h-screen">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
