import { Header } from './layout/Header';
import { ProductInfo } from './page/ProductInfo';

import { productData } from './helpers/productData';

function App() {

  return (
    <>
      <Header />
      <ProductInfo productData={ productData } />
    </>
  );

}

export default App;
