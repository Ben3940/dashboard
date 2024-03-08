import React, { useEffect, useState } from 'react';
import { generic_fetch } from '../utils/Generic_Fetch';

export function Table() {
  const get_products = async () => {
    const products = await generic_fetch(
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
    setData(products);
  };

  useEffect(() => {
    get_products();
  }, []);

  const [data, setData] = useState([]);
  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}

export default Table;
