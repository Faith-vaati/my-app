import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.scss"
import { useRef } from "react";
import { useState } from "react";


export default function Dashboard(){
    function ProductCategoryRow({category}){
        return(
           <tr>
            <th>
               {category}
            </th>
           </tr>
        );
    }

    function ProductRow({product}){
        const name = product.stocked ? product.name : 
        <span style={{color: 'red'}}>
        {product.name}
        </span>;


        return(
         <tr>
            <td>{name}</td>
            <td>{product.price}</td>
         </tr>
        );
    }
     
    function ProductTable(products){
      const rows = [];
      let lastCategory = null;

      products.forEach((product) => {
        if(product.category !== lastCategory){
            rows.push(
              <ProductCategoryRow 
              category={product.category}
              key = {product.category}
              />
            );
        }
        rows.push(
            <ProductRow
            product={product}
            key = {product.name}
            />
        );
         lastCategory=product.category
      });
    }
    
    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
        <div className="statetest">
            
        </div>
    </div>
    );
}