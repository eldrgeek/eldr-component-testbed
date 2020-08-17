import React from "react";
import EditorPage from "./EditorPage";
// import { CurrentModule } from "../CurrentModule";
// import { useApp } from "../../app";
// import { H3 } from "./Typography";
// import Button from "@material-ui/core/Button";
import MoveableBox from "./MoveableBox";
const from = "chat";

const VideoEditor = () => {
  const [streams, setStreams] = React.useState([]);
  const openUserMedia = () => {
    const constraints = {
      audio: true,
      video: true
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        setStreams([stream, stream]);
        console.log("device", stream.getTracks());
      })
      .catch((e) => console.log(e.toString()));
  };
  React.useEffect(() => openUserMedia(), []);
  console.log("message");
  return <EditorPage streams={streams} />;
};
export default VideoEditor;
