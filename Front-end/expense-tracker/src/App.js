import styled from "styled-components";
import { MainLayout } from "./styles/layout"

function App() {
  return (
    <AppStyle className="App">
      <MainLayout>
        <h1>Hello Abeiby</h1>
      </MainLayout>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100hv;
`;

export default App;
