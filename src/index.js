import React from 'react';
import ReactDOM from 'react-dom';
// import Product from './Product';
// import './array-product.css';
//import Soot from './Soot';
//import Toggle from './Toggle';
import './main.css';
import ProductArr from './ProductArr';

ReactDOM.render(
//<Soot/>,
<div className = "multiple-product">
{/* <Toggle/> */}
{/* <Toggle status = {true}/>
<Toggle status = {false}/> */}
{/* <Product id = {5} status = {true} />
<Product id = {6} status = {false} />
<Product id = {2} status = {true} />
<Product id = {8} status = {true} />
<Product id = {7} status = {false} />
<Product id = {2} status = {true} />
<Product id = {8} status = {false} />
<Product id = {7} status = {true} /> */}
<ProductArr/>

</div>,
  document.getElementById('root')
);

