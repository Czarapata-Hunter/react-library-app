import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import { Link } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path={'/'}>
          <h1>Library Catalog</h1>
          <Link to="/books">Book List</Link>
        </Route>
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
