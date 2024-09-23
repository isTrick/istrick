import Image from "next/image";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Page() {
  const widgetStyle =
    "flex items-center justify-center w-fit h-fit bg-neutral-900 border border-neutral-600 rounded-lg p-3 m-3 text-neutral-50";

  return (
    <div className="grid max-w-full md:p-16  min-h-screen bg-zinc-950">
      <div className={`${widgetStyle}`}>
        <Image className="rounded-full mr-5" src="/myimage.jpg" alt="My photo" width={200} height={100} />
        <div className="flex flex-col">
          <h1 className=" text-2xl">Hello, I'm <b>Patrick Girardi</b></h1>
          <p>
            Front-end developer passionated about deliver amazing user experiences.
          </p>
          <div className="flex flex-row gap-2">
            <a className="bg-neutral-50 text-neutral-700 rounded-md border border-neutral-700 p-2" href=""><FaInstagramSquare /></a>
            <a className="bg-neutral-50 text-neutral-700 rounded-md border border-neutral-700 p-2"href=""><FaGithubSquare /></a>
            <a className="bg-neutral-50 text-neutral-700 rounded-md border border-neutral-700 p-2" href=""><FaLinkedin /></a>
            <a className="bg-neutral-50 text-neutral-700 rounded-md border border-neutral-700 p-2" href="">Personal Blog</a>
          </div>
        </div>
      </div>
      <div className={`${widgetStyle}`}>
        <h2>My stack</h2>
        <p>Tools I work with</p>
      </div>
    </div>
  );
}
