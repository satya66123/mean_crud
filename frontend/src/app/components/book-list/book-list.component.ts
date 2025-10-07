import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error('Error fetching books', err)
    });
  }

  editBook(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/edit-book', id]);
    }
  }

  deleteBook(id: string | undefined): void {
    if (!id) return;
    this.bookService.deleteBook(id).subscribe({
      next: () => this.loadBooks(),
      error: (err) => console.error('Delete failed', err)
    });
  }
}
