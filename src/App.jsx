import { Footer } from "./containers/Footer";
import { Headers } from "./containers/Headers";
import { Infor } from "./containers/Infor";
import { Newsletter } from "./containers/Newsletter";
import { OurFounder } from "./containers/OurFounder";
import { Sponsor } from "./containers/Sponsor";
import { StandOut } from "./containers/StandOut";

function App() {
  return (
    <div>
      <Headers />
      <Sponsor />
      <Infor />
      <StandOut />
      <OurFounder />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
