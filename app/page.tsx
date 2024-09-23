/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  const widgetStyle =
    "flex items-center justify-center w-fit h-fit bg-neutral-900 border border-neutral-600 rounded-lg p-3 m-3 text-neutral-50 w-full h-full";
  const linkStyle =
    "bg-neutral-50 rounded-md border border-neutral-700 flex items-center justify-center h-10 w-10 text-neutral-100";

  return (
    <div className="md:grid md:grid-cols-4 md:grid-rows-4 max-w-full md:p-32  min-h-screen bg-zinc-950 gap-3">
      <div className={`${widgetStyle} col-span-2 row-span-2`}>
        <Image
          className="rounded-lg border border-amber-600 mr-5"
          src="/myimage.jpg"
          alt="My photo"
          width={200}
          height={100}
        />
        <div className="flex flex-col">
          <h1 className=" text-2xl">
            Hello, I'm <b>Patrick Girardi</b>
          </h1>
          <p className="text-neutral-300 text-lg">Front-end developer</p>
          <p>
            Front-end developer passionated about deliver amazing user
            experiences. My experience is
          </p>
          <div className="flex flex-row items-center  gap-2">
            <a
              className={`${linkStyle} bg-purple-800 border-purple-300`}
              href=""
            >
              <FaInstagram />
            </a>
            <a className={`${linkStyle} bg-blue-800 border-blue-300`} href="">
              <FaLinkedinIn />
            </a>
            <a
              className={`${linkStyle} bg-neutral-800 border-neutral-300 text-neutral-100`}
              href=""
            >
              <FaGithub />
            </a>
            <a className={`${linkStyle} w-28 text-neutral-600`} href="">
              Personal Blog
            </a>
          </div>
        </div>
      </div>
      <div className={`${widgetStyle} row-span-3 flex`}>
        <h2 className="text-xl font-semibold">My stack</h2>
        <p>Tools I work with</p>
      </div>
      <div className={`${widgetStyle} row-span-3`}>
        <h2 className="text-xl font-semibold">Portfólio</h2>
      </div>
      <div className={`${widgetStyle}`}>
        <h2 className="text-xl font-semibold">Contact details</h2>
      </div>
      <div className={`${widgetStyle} row-span-2`}>
        <h2 className="text-xl font-semibold">Latest blog posts</h2>
      </div>
      <div className={`${widgetStyle}`}>
        <h2 className="text-xl font-semibold">Socials</h2>
      </div>
      <div className={`${widgetStyle} col-span-2`}>
        <Image
          src={"/nextjs.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
