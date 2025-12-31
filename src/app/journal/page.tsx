const entries = [
  {
    date: "Dec 29, 2025",
    title: "Four Months In",
    slug: "four-months-in",
    preview: `Four months have passed since I began work. The number feels unreal. Time moves with a velocity I cannot grasp, carrying with it something I'm not yet ready to relinquish: my youth, slipping away like water through cupped hands. My days and nights blur together in service of something larger than myself, something that dwarfs my individual concerns and aspirations.

Yet there is grace in this surrender. I find myself surrounded by people who possess both brilliance and warmth, minds that cut through complexity with ease and hearts that extend generosity without hesitation. To work alongside them, to share not just office hours but the unstructured time beyond, has been a kind of education I never anticipated.

Now, as the year draws toward its close, I feel compelled to stop. To stand still for a moment and bear witness to all that has unfolded in these twelve months, to honor the fullness and weight of what this calendar year has held.`,
  },
  {
    date: "Aug 10, 2025",
    title: "Summer's End",
    slug: "art-of-typography",
    preview: `Summer has vanished, slipped through my fingers like sand. The freedom I possessed these past months, that rare and precious gift of unstructured time, of days without obligation or expectation, is coming to its inevitable close. Tomorrow I step into what people call "real life," into the rhythm of work and routine. I find myself suspended between anticipation and fear, between eagerness and reluctance.

So many moments went unrecorded, uncaptured. Whole afternoons dissolved into memory without witness, without preservation. It's a peculiar cruelty of time, how we only recognize the weight of these fleeting days when they're nearly behind us, when it's almost too late to hold them close.`,
  },
  {
    date: "May 06, 2025",
    title: "Last Day of College",
    slug: "last-day-of-college",
    preview: `The realization arrived as I crossed the threshold for the last time: this chapter was ending. The hallways stretched before me, quieter than I remembered, as though the walls themselves were holding the accumulated weight of years within their silence. I had imagined this moment would bring joy, a surge of triumph or relief, but instead I felt only the heaviness of conclusion, the strange gravity of an ending. 
    
    How odd it is to leave a place that has shaped the contours of your daily existence, that has been as familiar as your own reflection. These corridors, once traversed without thought, will never receive my footsteps again.`,
  },
];

export default function Journal() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-serif text-stone-100 italic border-b border-stone-800 pb-4">Journal</h1>
      <div className="grid gap-12">
        {entries.map((entry) => (
          <article key={entry.slug} className="border-l-2 border-transparent pl-0">
            <div className="flex flex-col space-y-4">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-medium text-stone-200">
                  {entry.title}
                </h2>
                <span className="text-xs font-mono text-stone-600 shrink-0 ml-4">
                  {entry.date}
                </span>
              </div>
              <div className="text-stone-500 font-light text-sm md:text-base max-w-xl space-y-4">
                {entry.preview.split(/\n\s*\n/).map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
