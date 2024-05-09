import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Components/Common/Container/Container";
import Navbar from "./Components/Navbar";
import FragsCalculator from "./Components/Pages/Calculators/FragsCalculator";
import GearCalculator from "./Components/Pages/Calculators/GearCalculator";
import Characters from "./Components/Pages/Characters";

const MyRouter = () => {
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
};

export default MyRouter;
