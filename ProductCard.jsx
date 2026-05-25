export default function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="product-image-wrap">
                <img className="product-image" src={props.image} alt={props.name} />
            </div>
            <div className="product-info">
                <h2>{props.name}</h2>
                <h3>₹ {props.price}</h3>
                <p>{props.details}</p>
            </div>
        </div>
    )

}
