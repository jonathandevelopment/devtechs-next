import Image from "next/image";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Masthead />
      <Services />
      <TechStack />
      <Experience />
      <Footer />
    </main>
  );
}
