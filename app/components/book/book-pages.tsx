import React, { useEffect, useState } from "react";
import type { Book } from "./book-types";
import "./book-pages.scss";
import { Link } from "react-router-dom";

interface BookPagesProps {
  book: Book;
}

export default function BookPages({ book }: BookPagesProps) {
  const [currentChapter, setCurrentChapter] = useState(book.chapters[0].id);
  const [chapterTitle, setChapterTitle] = useState(book.chapters[0].title);
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const chapter = book.chapters.find(c => c.id === currentChapter);
    setChapterTitle(chapter?.title || "");
    // Clear content before fetching new chapter
    setBookPages([]);
    setCurrentPage(0);
    if (chapter) {
      fetch(chapter.file)
        .then(res => {
          if (!res.ok) {
            if (res.status === 404) {
              setBookPages(["This chapter is in progress and will be added soon."]);
              setCurrentPage(0);
              return null;
            }
            throw new Error("Failed to fetch chapter");
          }
          return res.text();
        })
        .then(text => {
          if (!text) return;
          const lines = text.split('\n').map(line => line.trimEnd());
          const pages = [];
          for (let i = 0; i < lines.length; i += book.linesPerPage) {
            pages.push(lines.slice(i, i + book.linesPerPage).join('\n'));
          }
          setBookPages(pages);
          setCurrentPage(0);
        })
        .catch(() => {
          setBookPages(["This chapter is in progress and will be added soon."]);
          setCurrentPage(0);
        });
    }
  }, [currentChapter, book]);

  const handleChapterSwitch = (id: string) => setCurrentChapter(id);
  const prevPage = () => setCurrentPage(p => Math.max(0, p - 1));
  const nextPage = () => setCurrentPage(p => Math.min(bookPages.length - 1, p + 1));

  return (
    <div className="book-layout">
      <nav className="chapter-menu">
        <Link to="/books" className="back-link" style={{ marginBottom: "1.5rem" }}>
          &larr; Back to Book List
        </Link>
        <div className="menu-title">Chapters</div>
        <ul>
          {book.chapters.map(chap => (
            <li key={chap.id}>
              <button
                className={chap.id === currentChapter ? "active" : ""}
                onClick={() => handleChapterSwitch(chap.id)}
                type="button"
              >
                {chap.title.replace(/^Chapter \d+: /, "")}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-content">
        <div className="header">
          <h1 className="book-title">
            {chapterTitle}
          </h1>
        </div>
        <div id="book-content">
          <div className="book-page">
            <div className="page-header">
              <button className="nav-btn" onClick={prevPage} disabled={currentPage === 0}>
                &larr; Previous
              </button>
              <span className="page-number">
                Page {currentPage + 1} of {bookPages.length}
              </span>
              <button
                className="nav-btn"
                onClick={nextPage}
                disabled={currentPage === bookPages.length - 1}
              >
                Next &rarr;
              </button>
            </div>
            <div
              className="page-content"
              style={{
                whiteSpace: "pre-line",
                fontFamily: "Georgia, serif",
                fontSize: "1.1rem",
              }}
            >
              {bookPages[currentPage] || ""}
            </div>
            <div className="page-footer">
              <button className="nav-btn" onClick={prevPage} disabled={currentPage === 0}>
                &larr; Previous
              </button>
              <span className="page-number">
                Page {currentPage + 1} of {bookPages.length}
              </span>
              <button
                className="nav-btn"
                onClick={nextPage}
                disabled={currentPage === bookPages.length - 1}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}