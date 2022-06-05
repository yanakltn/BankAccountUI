import React from "react";
import Home from "./pages/home";
import styled from "styled-components";
import BackgroundSpec from "./BackgroundSpec.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import SendMoney from "./pages/send-money";

const Layout = styled.div`
  background-color: #f1f1f1;
  background-image: url(${BackgroundSpec});
  background-repeat: no-repeat;
  background-position: -3% -7.4%;
  background-size: 89.5% 122.8%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
