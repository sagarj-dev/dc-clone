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

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Characters />
      </Container>
    </div>
  );
}

export default App;
