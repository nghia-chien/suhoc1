import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Rooms } from "../components/Rooms";
import { Streets } from "../components/Streets";
import { Team } from "../components/Team";
import { Timeline } from "../components/Timeline";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Rooms />
        <Streets />
      </main>
      <Team />
    </>
  );
}
