import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
    const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState("");
    const[category,setCategory]=React.useState("");
    const[company,setCompany]=React.useState("");
    const params=useParams();
    const navigate = useNavigate();

   useEffect(()=>{
        getProductDetials();
    },[])

    const getProductDetials=async()=>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }

     const updateProduct=async()=>{
        console.log(name,price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result =await result.json()
        navigate("/")
        console.log(result);
    }
    
    return (
        <div className="product">
            <h1>Update product</h1>
            <input type="text" placeholder="search product" className="search-product-box"/>
            <input type="text" placeholder="Enter product Name" className="inputBox"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            
            <input type="text" placeholder="Enter product Price" className="inputBox"
            value={price} onChange={(e)=>setPrice(e.target.value)}/>
            
            <input type="text" placeholder="Enter product category" className="inputBox"
            value={category} onChange={(e)=>setCategory(e.target.value)}/>
           
            <input type="text" placeholder="Enter product Company" className="inputBox"
            value={company} onChange={(e)=>setCompany(e.target.value)}/>
            
            <button  onClick={updateProduct} className="appButton">UpdateProduct</button>
        </div>
    )
}

export default UpdateProduct;