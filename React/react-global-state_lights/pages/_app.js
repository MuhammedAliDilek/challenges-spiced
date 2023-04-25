import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Light 1", isOn: false },
    { id: "2", name: "Light 2", isOn: false },
    { id: "3", name: "Light 3", isOn: false },
  ]);

  function toggleLight(id) {
    setLights((prevState) =>
      prevState.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component lights={lights} toggleLight={toggleLight} {...pageProps} />
    </Layout>
  );
}
