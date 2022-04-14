import { Outlet } from "react-router-dom";
import "./main-page.css";
import LoadingSpinner from "../components/loading-spinner/LoadingSpinner";
import React, { useState, useEffect } from "react";
import getData from "../utils/getDataFromContract";
import { useNavigate } from "react-router-dom";
import NFTCard from "../components/nft-card/NFTCard";

function MainPage() {
  const [nftArr, setNftArr] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    getData().then((data) => {
      setNftArr(data);
    });
  }, []);

  const nav = useNavigate();
  function handleClick(id, minter, content, author, price) {
    nav(
      `/main/${id}?minter=${minter}&content=${content}&author=${author}&price=${price}`
    );
    setSelectedCard(id);
  }
  const selectedCardStyles = {
    backgroundColor: "#ddd",
    color: "#555",
  };
  return (
    <div className="main-page">
      <h3>NFT's</h3>
      <section className="nft-holder">
        {nftArr.map((el, indx) => {
          return (
            <NFTCard
              styles={
                indx === selectedCard
                  ? selectedCardStyles
                  : { backgroundColor: "white" }
              }
              show={() =>
                handleClick(indx, el[1], el.content, el.author, el.price)
              }
              id={indx}
              key={indx}
              minter={el[1]}
              content={el.content}
              author={el.author}
              price={el.price._hex}
            />
          );
        })}
      </section>
      <section id="section-outlet">
        <Outlet />
      </section>
    </div>
  );
}

export default MainPage;
