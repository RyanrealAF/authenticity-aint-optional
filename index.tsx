import Hero from "./Hero";
import Manifesto from "./Manifesto";
import Tactics from "./Tactics";
import Community from "./Community";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-void text-stone">
      <Hero />
      <Manifesto />
      <Tactics />
      <Community />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
