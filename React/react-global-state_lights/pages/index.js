import Link from "../components/Link";
import { useState } from "react";
import Lights from "../components/Lights";
//import { useState, useContext } from "react";
import React, { useContext, useMemo } from "react";
//import { LightContext } from "../components/LightContext";

export default function HomePage() {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: true },
    { id: "3", name: "Bedroom", isOn: false },
  ]);

  function handleToggle(id) {
    setLights((prevState) =>
      prevState.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const turnedOnLights = lights.filter((light) => light.isOn);

  return (
    <div>
      <h1>Home</h1>
      <p>{turnedOnLights.length} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
      <Lights lights={lights} onToggle={handleToggle} />
    </div>
  );
}
