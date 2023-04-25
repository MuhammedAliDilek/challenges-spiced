import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights lights={lights} toggleLight={toggleLight} />
    </>
  );
}

import styled from "styled-components";

/* const StyledLight = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: ${(props) => (props.isOn ? "yellow" : "gray")};
`; */

//export default function Light({ isOn, name, onToggle }) {
//return (
//<StyledLight isOn={isOn} onClick={onToggle}>
//{name}
//</StyledLight>
//);
//}
