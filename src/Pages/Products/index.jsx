import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import ProductCard from "../../Components/ProductCard";
import "./index.css";


const Products = ()=>{
    const [ProductList,setProductList]=useState([]);
    const [search,setSearch]=useState("");

    const fetchProducts = async()=>{
        try{
            const res = await axios.get("https://fakestoreapi.com/products")
            setProductList(res.data);
        }catch(e){
            console.log("Error",e)
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredProducts = ProductList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSort = (type) => {
        let sortedProducts = [...ProductList];
        switch (type) {
          case "price_asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            console.log("sortdone");
            break;
          case "price_desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            console.log("sortdone");
            break;
          case "title_asc":
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            console.log("sortdone");
            break;
          case "title_desc":
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
            console.log("sortdone");
            break;
          default:
            break;
        }
        setProductList(sortedProducts);
      };

    return(
        <>
            <button className="sortbtn" onClick={() => handleSort("price_asc")}>
                Price Low To High
            </button>
            <button className="sortbtn" onClick={() => handleSort("price_desc")}>
                Price High To Low
            </button>
            <input className="searchproductinput" type="text" onChange={handleSearchChange} placeholder="Search Product Here"/>
            <button className="sortbtn" onClick={() => handleSort("title_asc")}>
                Ascending A to Z
            </button>
            <button className="sortbtn" onClick={() => handleSort("title_desc")}>
                Descending Z to A
            </button>
            

            {filteredProducts.map((data)=>{
                return <ProductCard key={data.id} title={data.title} price={data.price} category={data.category} description={data.description} image={data.image}/>
            })}
        </>
    )
}

export default Products;