const entries = [
  {
    date: "Dec 01, 2023",
    title: "On Minimalism",
    slug: "on-minimalism",
    preview: "Why less is often more in design and life. The pursuit of clarity through subtraction.",
  },
  {
    date: "Nov 15, 2023",
    title: "Digital Gardens",
    slug: "digital-gardens",
    preview: "Cultivating a personal space on the web that grows over time, rather than a stream of temporary content.",
  },
  {
    date: "Oct 20, 2023",
    title: "The Art of Typography",
    slug: "art-of-typography",
    preview: "Exploring the nuances of type selection and the impact it has on reading experience.",
  },
  {
    date: "Sep 05, 2023",
    title: "Slow Web",
    slug: "slow-web",
    preview: "Resisting the attention economy by building slower, more thoughtful online spaces.",
  },
];

export default function Journal() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-serif text-stone-100 italic border-b border-stone-800 pb-4">Journal</h1>
      <div className="grid gap-8">
        {entries.map((entry) => (
          <article key={entry.slug} className="group border-l-2 border-transparent hover:border-stone-700 pl-0 hover:pl-6 transition-all duration-300">
            <div className="flex flex-col space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-medium text-stone-200 group-hover:text-white transition-colors">
                  {entry.title}
                </h2>
                <span className="text-xs font-mono text-stone-600 shrink-0 ml-4">
                  {entry.date}
                </span>
              </div>
              <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base max-w-xl group-hover:text-stone-400 transition-colors">
                {entry.preview}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
