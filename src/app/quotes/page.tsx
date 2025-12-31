const quotes = [
  {
    text: "Life swings like a pendulum backward and forward between pain and boredom.",
    author: "Arthur Schopenhauer",
  },
  {
    text: "There is no greater sorrow than to recall happiness in times of misery.",
    author: "Dante Alighieri",
  },
  {
    text: "I have spent all my life resisting the desire to end it.",
    author: "Franz Kafka",
  },
  {
    text: "Man can do what he wills but he cannot will what he wills.",
    author: "Arthur Schopenhauer",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "It's not miracles that dispose realists to belief. The genuine realist, if he is an unbeliever, will always find strength and ability to disbelieve in the miraculous, and if he is confronted with a miracle as an irrefutable fact he would rather disbelieve his own senses than admit the fact.",
    author: "Fyodor Dostoevsky",
  },
  {
    text: "You never know how strong you are until being strong is the only choice you have.",
    author: "Bob Marley",
  } 
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
