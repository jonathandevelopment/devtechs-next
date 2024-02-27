import Image from "next/image";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main >
      <Masthead />
      <Services />
      
      <TechStack />
    </main>
  );
}
