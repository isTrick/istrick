export default function Footer() {
  return (
    <footer className="flex flex-row items-center gap-4 w-full max-w-3xl h-[5vh] p-7 bg-zinc-800 justify-center rounded-md text-zinc-300">
      <a className="hover:text-zinc-400 bg-zinc-700 p-2 rounded" href="github.com">
        GitHub
      </a>
      <a className="hover:text-zinc-400 bg-zinc-700 p-2 rounded" href="linkedin.com">
        Linkedin
      </a>
      <a className="hover:text-zinc-400 bg-zinc-700 p-2 rounded" href="instagram.com">
        Instagram
      </a>
    </footer>
  );
}
