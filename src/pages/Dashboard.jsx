import React from "react";
import Header from "../components/Header";
import "../styles/pages.scss"
import { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
      filterText = {filterText}
      inStockOnly = {inStockOnly}
      onfilterTextChange = {setFilterText}
      oninStockOnlyChange = {setInStockOnly}/>
      <ProductTable 
      products={products} 
      filterText = {filterText}
      inStockOnly = {inStockOnly} />
    </div>
  );
}



function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
  
  function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      )
      {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
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
  
  function SearchBar({
    filterText,
    inStockOnly,
    onfilterTextChange,
    oninStockOnlyChange
  }) {
    return (
      <form>
        <input type="text" value={filterText} placeholder="Search..." 
        onChange={(e) => onfilterTextChange(e.target.value)}/>
        <br/>
        <label>
          <input type="checkbox" value={inStockOnly}
          onChange={(e) => oninStockOnlyChange(e.target.value)}/>
          {' '}
          Only show products in stock
        </label>
      </form>
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
  
  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

  
  export default function Dashboard() {
    return (
            <div className="dashboard">
                <Header />
                <div className=" statetest">
                <p>I am a Dashboard</p>
                <FilterableProductTable products={PRODUCTS} />
                <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
                </div>
         
            </div>
            );
  }
