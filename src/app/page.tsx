import { SpirographAnimation } from "@/components/SpirographAnimation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[60vh] justify-between">
      <div className="space-y-12">
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-100 tracking-tight leading-tight italic">
          Hi, I'm Aditya.
        </h1>
        <div className="space-y-8 text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-prose">
          <p>
            This is my digital garden where I collect what I find beautiful and meaningful.
          </p>
          <p>
            Welcome to my corner of the internet.
          </p>
        </div>
      </div>
      
      <SpirographAnimation />
    </div>
  );
}
