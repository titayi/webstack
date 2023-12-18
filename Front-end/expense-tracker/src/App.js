import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Navigation from "./components/navigation/nav";
import React, { useState } from "react";
import Home from "./components/home/home";
import Income from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { useGlobalContext } from "./content/globalCntxt";
import Orb from "./components/obj/obj";

const bg = require( "./image/bg.jpg");

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Home />
      case 2:
        return <Home />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Home />
    }
  }
  
  return (
    <AppStyle bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main className="main">
          {displayData()}
        </main>
      </MainLayout>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100hv;
  background-image: url(${props => props.bg});
  position: relative;
  .main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    font-size: 16px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
  }
`;

export default App;
