import { useState } from "react";
import RadioButton from "./Components/Common/RadioButton";
import CheckBoxButton from "./Components/Common/CheckBoxButton";
import Select from "./Components/Common/Select";
import SelectTwo from "./Components/Common/Select/selectTwo";
import Navbar from "./Components/Navbar";
import Container from "./Components/Common/Container/Container";
import Collapse from "./Components/Common/Collapse/Collapse";
import Characters from "./Components/Pages/Characters";
import GearCalculator from "./Components/Pages/Calculators/GearCalculator";
import FragsCalculator from "./Components/Pages/Calculators/FragsCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/charfragcalc" element={<FragsCalculator />} />
          <Route path="/gearcalc" element={<GearCalculator />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
