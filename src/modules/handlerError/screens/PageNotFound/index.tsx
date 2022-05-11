import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};
export default PageNotFound;
