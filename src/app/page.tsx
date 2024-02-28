import Image from "next/image";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main >
      <Masthead />
      <Services />
      <TechStack />
      <Experience />
    </main>
  );
}
