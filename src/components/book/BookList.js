import Book from '../../components/book/Book';
import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks/useBooks';

function BookList() {
  const { error, loading, books } = useBooks();
  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h1>Loading books...</h1>;
  return (
    <>
      <h1>Book List</h1>
      <Link to="/books">Return to Books List</Link>

      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
