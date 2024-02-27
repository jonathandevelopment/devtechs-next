import Image from "next/image";
import Masthead from "./components/Masthead";
import Services from "./components/Services";

export default function Home() {
  return (
    <main >
      <Masthead />
      <Services />
    </main>
  );
}
