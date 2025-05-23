import React from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "~/components/book/book-config";
import type { Book } from "~/components/book/book-types";
import "./view-book.scss";
import TopBar from "~/components/bar/top-bar";
import BookPages from "~/components/book/book-pages";

export default function ViewBook() {
  const { id } = useParams<{ id: string }>();
  const book: Book | undefined = books.find(b => b.id === id);

  if (!book) {
    return (
      <>
        <TopBar title="Book Not Found" />
        <section className="book-not-found">
          <h2>Book not found</h2>
          <p>
            Sorry, we couldn't find the requested book.
            <br />
            <Link to="/books" className="back-link">&larr; Back to Book List</Link>
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <TopBar title={book.title} />
      <section className="book-section">
        <BookPages book={book} />
      </section>
    </>
  );
}