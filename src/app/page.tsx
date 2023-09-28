import { Nav } from "../components/Nav/Nav";
import { VDSphere } from "../components/VDSphere/VDSphere";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="h-[625px]">
        <VDSphere />
      </div>
      <Footer />
    </main>
  )
}
