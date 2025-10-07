import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone:false,
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.css']
})
export class BookFormComponent implements OnInit {
  book: Book = { title: '', author: '', year: new Date().getFullYear() };
  isEdit = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.bookService.getBook(id).subscribe({
        next: (data) => this.book = data,
        error: (err) => console.error('Error loading book', err)
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit && this.book._id) {
      this.bookService.updateBook(this.book._id, this.book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (err) => console.error('Update failed', err)
      });
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (err) => console.error('Create failed', err)
      });
    }
  }
}
