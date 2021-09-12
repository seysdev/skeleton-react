import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  return (
    <header className="header flex justify-between items-center py-8 bg-primary px-4">
      <strong className="text-3xl">LOGO</strong>
      <Nav />
    </header>
  );
}
