import { useState } from "react";
import ProductList from "../../../products/components/product-list/ProductList";
import './App.css';

function App() {

  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {
        show && <ProductList />
      }
      <br />
      <button onClick={
        () => setShow((status) => !status)
      }>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;
