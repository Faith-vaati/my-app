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
      return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
      );
    }

    function SearchBar(){
        return(
        <form>
            <input type="text" placeholder= "Search"/>
            <label>
                <input type="checkbox" />
                Only Show Products in Stock
                {' '}
            </label>
        </form>
        );
    }

    function FilterableProductTable(products){
        return(
            <div>
                <SearchBar/>
                <ProductTable products={products}/>
            </div>
        );
    }
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];
    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
        <div className="statetest">
        <FilterableProductTable products={PRODUCTS} />
        </div>
    </div>
    );
}