import express from 'express';
import mongoose from 'mongoose';
import Book from"./models/Book.js"

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/books', 
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/books', async (req, res) => {
  try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.get('/books', async (req, res) => {
  try {
      const books = await Book.find();
      res.json(books);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.get('/books/:id', async (req, res) => {
  try {
      const book = await Book.findById(req.params.id);
      if (!book) {
          return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!book) {
          return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (book) {
        return res.status(200).json( 'Book has been deleted' );
      }
        else {
          return res.status(404).json({ error: 'Book not found' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.post('/authors', async (req, res) => {
  try {
      const author = new Author(req.body);
      await author.save();
      res.status(201).json(author);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.get('/authors', async (req, res) => {
  try {
      const authors = await Author.find();
      res.json(authors);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.get('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findById(req.params.id);
      if (!author) {
          return res.status(404).json({ error: 'Author not found' });
      }
      res.json(author);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.put('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!author) {
          return res.status(404).json({ error: 'Author not found' });
      }
      res.json(author);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.delete('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findByIdAndDelete(req.params.id);
      if (author) {
        return res.status(200).json( 'Author has been deleted' );
      }
        else {
          return res.status(404).json({ error: 'Author not found' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.post('/publishers', async (req, res) => {
  try {
      const publisher = new Publisher(req.body);
      await publisher.save();
      res.status(201).json(publisher);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.get('/publishers', async (req, res) => {
  try {
      const publishers = await Publisher.find();
      res.json(publishers);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.get('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findById(req.params.id);
      if (!publisher) {
          return res.status(404).json({ error: 'Publisher not found' });
      }
      res.json(publisher);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.put('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!publisher) {
          return res.status(404).json({ error: 'Book not found' });
      }
      res.json(publisher);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

app.delete('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findByIdAndDelete(req.params.id);
      if (publisher) {
        return res.status(200).json( 'publisher has been deleted' );
      }
        else {
          return res.status(404).json({ error: 'publisher not found' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});