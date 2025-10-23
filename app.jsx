import {  Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Visualizer from './Component/Visualizer'
import Pricing from './Component/Pricing'

function App() {
  return (
      <>
      {/* Force black background */}
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "black", color: "white" }}>
        {/* Navbar at top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Visualizer" element={<Visualizer />} />
            <Route path="/Pricing" element={<Pricing />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
