type Book = {
  title: string;
  author: string;
  status: "Reading" | "Read" | "Want to Read";
};

const books: Book[] = [
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", status: "Reading" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", status: "Read" },
  { title: "Hamlet", author: "William Shakespeare", status: "Read" },
  { title: "1984", author: "George Orwell", status: "Read" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Read" },
  { title: "The Crucible", author: "Arthur Miller", status: "Read" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", status: "Read" },
  { title: "The Odyssey", author: "Homer", status: "Read" },
  { title: "Inferno", author: "Dante Alighieri", status: "Read" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", status: "Read" },
  { title: "The Billion Dollar Spy", author: "David E. Hoffman", status: "Read" },
  { title: "The Hot Zone", author: "Richard Preston", status: "Read" },
  { title: "Macbeth", author: "William Shakespeare", status: "Read" },
  { title: "The Things They Carried", author: "Tim O'Brien", status: "Read" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", status: "Read" },
  { title: "Hamilton", author: "Ron Chernow", status: "Read" },
  { title: "Frankenstein", author: "Mary Shelley", status: "Read" },
  { title: "Empire of the Moghul series", author: "Alex Rutherford", status: "Read" },
  { title: "The Masterpiece", author: "Emile Zola", status: "Read" },
  { title: "Metamorphosis", author: "Franz Kafka", status: "Read" },
];

export default function Books() {
  const reading = books.filter((b) => b.status === "Reading");
  const read = books.filter((b) => b.status === "Read");
  const wantToRead = books.filter((b) => b.status === "Want to Read");

  return (
    <div className="space-y-20">
      {/* Featured Section for Current Reading */}
      {reading.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-stone-100 italic opacity-90 border-b border-stone-800 pb-4">
            Currently Reading
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {reading.map((book) => (
              <div key={book.title} className="group relative overflow-hidden bg-stone-900/30 rounded-lg p-6 border border-stone-800 hover:border-stone-700 transition-all duration-500">
                 <div className="flex flex-col gap-2">
                    <span className="text-2xl font-serif text-stone-100 italic">
                      {book.title}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
                      by {book.author}
                    </span>
                 </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grid Layout for Read Books */}
      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-100 italic opacity-90 border-b border-stone-800 pb-4">
          Read
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {read.map((book) => (
            <li key={book.title} className="group flex flex-col gap-1 transition-opacity hover:opacity-100 opacity-70">
              <span className="text-lg font-serif text-stone-200 leading-snug group-hover:text-white group-hover:underline decoration-stone-700 underline-offset-4 decoration-1 transition-all">
                {book.title}
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-400 transition-colors">
                {book.author}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Want to Read */}
       {wantToRead.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-stone-100 italic opacity-90 border-b border-stone-800 pb-4">
            Want to Read
          </h2>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {wantToRead.map((book) => (
              <li key={book.title} className="group flex flex-col gap-1">
                 <span className="text-lg font-serif text-stone-400 group-hover:text-stone-300 transition-colors">
                  {book.title}
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-600">
                  {book.author}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
