import "./styles.css";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Link from "./Components/Link";
import Logo from "./Components/Logo";
import Avatar from "./Components/Avatar";

export default function App() {
  return (
    <>
      <Header>
      <Logo />
        <Navigation>
          <Link navigationLink="#home">Home</Link>
          <Link navigationLink="#about">About</Link>
          <Link navigationLink="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
