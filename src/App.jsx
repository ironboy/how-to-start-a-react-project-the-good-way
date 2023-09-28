import { Link, Outlet } from 'react-router-dom';
import { useStates, useFetch, useAutoKeys, useDebug } from 'react-easier';

export default function App() {

  useDebug(); // turn on debugging
  useAutoKeys(); // automatically sets keys for lists

  useStates('globals', {
    products: useFetch('/products.json')
  });

  return <>
    <header>
      <h1>I am the header</h1>
      <nav>
        <Link to="/">Start page</Link>&nbsp;
        <Link to="/about-us">About us</Link>&nbsp;
        <Link to="/products">Our products</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <h2>I am the footer!</h2>
    </footer>
  </>
}