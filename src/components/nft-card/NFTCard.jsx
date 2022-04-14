import "./nft-card.css";
export default function NFTCard(props) {
  return (
    <div style={props.styles} onClick={props.show} className="card">
      <div className="card-upper">
        <span>{props.minter}</span>
      </div>
      <p className="card-content">{props.content}</p>
      <span id="author">Author: {props.author}</span>

      <div className="card-lower">
        <span>Price: {parseInt(props.price)} Wei</span>
      </div>
    </div>
  );
}
