import Contact from './ButtonContact.jsx';
import ImageProfile from './ImageProfile.jsx';
import ImageLogos from './ImageLogos.jsx'

export default function Main() {
  return (
    <main className="flex flex-col gap-1 w-full md:max-w-3xl h-[84vh] mb-2 mt-2 bg-slate-600">
      <div className='flex flex-col bg-zinc-800 rounded-md items-center justify-center max-w-sm'>
        <h1 className="text-2xl font-bold text-white p-3">
          Desenvolvedor Full-Stack
        </h1>
        <ImageProfile />
        <p className="p-2 text-zinc-300 text-center m-1">
          Sou um desenvolvedor Full-Stack especializado no ecossistema JavaScript,
          com experiência em NextJS, NestJS, TailwindCSS e TypeScript. <br />
          Meu principal diferencial está no conhecimento sobre Docker, Linux e
          Shell Scripting.
        </p>
      </div>
      <div className='p-2 bg-zinc-800 rounded-md items-center justify-center max-w-sm'>
        <ImageLogos />
      </div>
      <Contact />
    </main>
  );
}
