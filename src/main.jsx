import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MainPage from "./routes/MainPage";
import NFT from "./routes/NFT";
import CreateNFT from "./routes/CreateNFT";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/main" element={<MainPage />}>
            <Route
              index
              element={
                <main>
                  <p>Select an NFT</p>
                </main>
              }
            />
            <Route path=":nftID" element={<NFT />} />
          </Route>
          <Route path="/create" element={<CreateNFT />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
