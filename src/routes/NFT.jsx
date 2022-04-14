import { useParams, useSearchParams } from "react-router-dom";
import "./nft.css";

export default function NFT() {
  const [searchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);

  return (
    <>
      NFT id: {useParams().nftID}
      <div className="nft">
        <div className="minter">
          <span>Minter: {currentParams.minter}</span>
        </div>
        <p className="content">{currentParams.content}</p>
        <div className="price">
          <span>Author: {currentParams.author}</span>
          <span>Price: {currentParams.price} Wei</span>
        </div>
      </div>
    </>
  );
}
