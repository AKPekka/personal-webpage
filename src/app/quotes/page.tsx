const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
  },
  {
    text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
];

export default function Quotes() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-serif text-stone-100 italic border-b border-stone-800 pb-4">Quotes</h1>
      <div className="grid gap-16">
        {quotes.map((quote, index) => (
          <blockquote key={index} className="flex flex-col space-y-4 group">
            <p className="text-xl md:text-2xl font-serif text-stone-300 italic leading-relaxed group-hover:text-stone-100 transition-colors duration-500">
              "{quote.text}"
            </p>
            <cite className="text-xs tracking-[0.2em] text-stone-600 not-italic uppercase group-hover:text-stone-500 transition-colors">
              — {quote.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
