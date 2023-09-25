import { useStates } from 'react-easier';

export default function ProductPage() {

  const g = useStates('globals');

  return <>
    <h2>Product List</h2>
    {g.products.map(({ productName, priceSEK, eco }) => <p>
      {productName} {priceSEK} kr {eco ? 'Ecological' : 'Non-ecological'}
    </p>)}
  </>;
}