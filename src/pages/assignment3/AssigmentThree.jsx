import React from 'react'
import './AssigmentThree.css'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function AsigmentThree() {
  const obj = {
    id: '10002',
    name: 'Eco-Friendly Water Bottle',
    description: 'Stay hydrated with our durable, eco-friendly water bottle.',
    price: 14.99,
    currency: 'USD',
    imageURL: 'https://example.com/images/product-10002.jpg',
  };

  const list = (
    <table>

        <tr>
          <th>Key</th>
          <th colSpan="2">Value</th>
        </tr>

{Object.entries(obj).reduce((acc, [key, value],index) => {
 
  return acc.concat(
    <tr>
      <td>{key}</td>
      <td>{value}</td>
      <td>{index}</td>
    </tr>
  )
},[])}
     
    </table>
  );
  return(
    <>
    <Header />
    <div className='table-container'>{list}</div>;
    <Footer />
    </>
  ) 

}

export default AsigmentThree

