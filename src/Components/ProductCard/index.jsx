import "./index.css"


const ProductCard = (props)=>{
    return(
        <>
            <div className="card" key={props.id}>
                <div><img src={props.image} alt="" className="img"/></div>
                <div className="productdetailsec">
                <p>{props.category}</p>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h4>Price : {props.price}</h4></div>
            </div>
        </>
    )
}

export default ProductCard;