import React from "react";

const Home = () => {
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
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="bg-white mt-5 p-1 rounded-sm outline-none"
          />
          <button className="bg-[#4aee88] px-10 self-end mt-2 py-1 rounded-sm font-semibold">
            Join
          </button>
          <span className="text-white text-sm text-center mt-5">
            If you don't have an invite then create &nbsp;
            <a href="#" className="text-[#4aee88] underline">
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
