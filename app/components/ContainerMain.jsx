import Contact from './ButtonContact.jsx';
import ImageProfile from './ImageProfile.jsx';

export default function Main() {
  return (
    <main className="flex items-center flex-col w-full max-w-3xl h-4/5 bg-zinc-800 rounded-md mb-2 mt-2">
      <h1 className="text-lg font-bold text-white p-3">
        Desenvolvedor Full-Stack
      </h1>
      <ImageProfile />
      <p className="p-2 text-zinc-300 text-center m-1">
        Sou um desenvolvedor Full-Stack especializado no ecossistema JavaScript,
        com experiência em NextJS, NestJS, TailwindCSS e TypeScript. <br />
        Meu principal diferencial está no conhecimento sobre Docker, Linux e
        Shell Scripting.
      </p>
      <Contact />
    </main>
  );
}
