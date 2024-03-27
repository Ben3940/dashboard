import React, { useEffect, useState } from 'react';
import { generic_fetch } from '../utils/Generic_Fetch';

export function Table() {
  const get_products = async () => {
    const data = await generic_fetch(
      `
    query Products{
      products{
        ID,
        Category,
        Sub_Category,
        Quantity
      }
    }
  `,
      'products'
    );
    setProducts(data);
  };

  useEffect(() => {
    get_products();
  }, []);

  const [products, setProducts] = useState([]);
  return (
    <table id='table'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Category</th>
          <th scope='col'>Sub_Category</th>
          <th scope='col'>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr>
              <td>{product.ID}</td>
              <td>{product.Category}</td>
              <td>{product.Sub_Category}</td>
              <td>{product.Quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
