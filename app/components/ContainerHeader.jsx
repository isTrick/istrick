export default function Header() {
  return (
    <header className="flex items-center w-full max-w-3xl h-[5vh] bg-zinc-800 justify-between p-7 rounded-md">
      <a className="text-white hover:text-zinc-300 font-semibold" href="">
        Patrick Girardi
      </a>
      <div className="flex flex-row gap-4 sm:gap-7 text-zinc-300">
        <a className="hover:text-zinc-400" href="">
          Blog
        </a>
        <a className="hover:text-zinc-400" href="">
          Portfólio
        </a>
        <a className="hover:text-zinc-400" href="">
          Contato
        </a>
      </div>
    </header>
  );
}
