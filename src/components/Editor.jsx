import React, { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript"; // there are multiple this one in the codemirror, we have import acc. to our need

const Editor = () => {
  useEffect(() => {
    // Code Mirror working
    const init = async () => {
      Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    };
    init();
  }, []);

  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
