import { Author } from './author';

export class Book {
  id: string;
  title: string;
  description: string;
  author: Author;
  publishedYear: Date;
}
