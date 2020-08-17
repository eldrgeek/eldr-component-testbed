import React from "react";
// import { CurrentModule } from "../CurrentModule";
// import { useApp } from "../../app";
// import { H3 } from "./Typography";
// import Button from "@material-ui/core/Button";
import MoveableBox from "./MoveableBox";

const StreamBoxes = ({ streams }) => {
  // const { state } = useApp();
  const divRef = React.useRef(null)
  const [size, setSize] = React.useState({})
  React.useEffect(()=>{
console.log("Dimensions", divRef.current.style.width)
  },[divRef])
  return (
    <React.Fragment>
      <div ref={divRef}>
        {/* <MoveableContents stream={streams[0]} />} */}
        {streams.map((stream, index) => {
          // const member = state.rooms.members[key];
          console.log("Stream", stream.getVideoTracks()[0].getSettings());
          return (
            <div key={index}>
              <MoveableBox
                pos={index}
                Contents={() => <MoveableContents stream={stream} />}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
const MoveableContents = ({ stream }) => {
  // const { actions, state } = useApp();
  return (
    <React.Fragment>
      <video
        // width={"25%"}
        className="w-100"
        ref={(el) => {
          if (el && !el.srcObject && stream) el.srcObject = stream;
        }}
        autoPlay
      />
    </React.Fragment>
  );
};
const EditorPage = ({ streams }) => {
  // const { state, actions } = useApp();
  console.log("streams in ", streams);
  return (
    <div className="container mx-auto bg-blue-100">
      <div className="container h-100  mx-auto bg-red-100">
        Chat
        <StreamBoxes filter="none" streams={streams} />
      </div>
    </div>
  );
};
export default EditorPage;
