import React, { useEffect, useState } from 'react';
import { generic_fetch } from '../utils/Generic_Fetch';

interface Profit_Quantity {
  Profit: number;
  Quantity: number;
}

export function Profit_Overview() {
  const [profitQuantity, setProfitQuantity] = useState<Profit_Quantity>({
    Profit: 0,
    Quantity: 0,
  });

  const load_data = async () => {
    const data = await generic_fetch(
      `query Total_Profits_Quantities {
        get_total_profits_quantities {
                Profit
                Quantity
            }
        }
        `,
      'get_total_profits_quantities'
    );
    setProfitQuantity(data[0]);
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <section className='overview-card'>
      <h1>Profit: {profitQuantity.Profit}</h1>
      <h1>Quantity: {profitQuantity.Quantity}</h1>
    </section>
  );
}
