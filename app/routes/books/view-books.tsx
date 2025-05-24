import React from "react";
import { Meta } from "react-router";
import "./view-books.scss";
import TopBar from "~/components/bar/top-bar";
import type { Book } from "~/components/book/book-types";
import { books } from "~/components/book/book-config";
import { Link } from "react-router-dom";

// SEO meta function
export function meta() {
  return [
    { title: "Books | Software Craftsmanship Series - Nikolay Nenkov" },
    {
      name: "description",
      content:
        "Explore the Software Craftsmanship book series by Nikolay Nenkov. Practical insights and best practices for software professionals across the entire development lifecycle.",
    },
  ];
}

export default function ViewBooks() {
  return (
    <>
      <Meta />
      <TopBar title="Software Craftsmanship: In the Life of a Project" />
      <section className="books-section">
        <p>
          <strong>Software Craftsmanship</strong> is a practical book series for
          software professionals, sharing real-world insights and best practices
          across the entire software development lifecycle. Each volume dives into
          a key aspect of building, maintaining, and evolving successful software
          projects.
        </p>
        <div className="books-gallery">
          {books.map((book, idx) => (
            <Link to={`/book/${book.id}`} className="book-card" key={book.id}>
              <div className="book-cover">
                <div className="book-number">{idx + 1}</div>
                <div className="book-title">{book.title}</div>
              </div>
              {/* Optionally, add a placeholder for a future description or cover image */}
            </Link>
          ))}
        </div>
        <p className="books-note">
          <em>
            This series covers the project lifecycle, technical domains (backend,
            frontend, security, data, cloud, AI), and essential soft skills. If
            you want to help prioritize, suggest topics, or get involved, let us
            know!
          </em>
        </p>
      </section>
    </>
  );
}