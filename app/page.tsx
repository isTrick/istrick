/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaDiscord,
  FaMastodon,
} from "react-icons/fa";

export default function Page() {
  const widgetStyle =
    "flex items-center justify-center w-fit h-fit bg-neutral-900 border border-neutral-600 rounded-lg p-3 text-neutral-50 w-full h-full";
  const linkStyle =
    "rounded-md border border-neutral-700 flex items-center justify-center h-10 w-10 text-neutral-100";

  return (
    <div className="md:grid md:grid-cols-4 md:grid-rows-4 max-w-full md:p-36  min-h-screen bg-zinc-950 gap-3">
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
            experiences. My experience is all around it.
          </p>
        </div>
      </div>
      <div className={`${widgetStyle} row-span-3 flex flex-col`}>
        <h2 className="text-xl font-semibold">My experience</h2>
        <p className="text-neutral-300 mb-3">What I've done in my jobs so far</p>
      </div>
      <div className={`${widgetStyle} row-span-3 flex flex-col`}>
        <h2 className="text-xl font-semibold">Portfólio</h2>
        <p className="text-neutral-300 mb-3">Some cool freelancer and side projects I've made</p>
        <p>daath-api - a simple API with random stoic quotes</p>
      </div>
      <div className={`${widgetStyle} flex-col text-center`}>
        <h2 className="text-xl font-semibold">Contact details</h2>
        <p>
          Wanna talk with me? Just send me an e-mail or connect in the socials
          below.
        </p>
        <p>dev.patrickgirardi@gmail.com</p>
      </div>
      <div className={`${widgetStyle} row-span-2 flex-col gap-2 justify-around`}>
        <h2 className="text-xl font-semibold">Latest blog posts</h2>
        <ol className="text-center">
          <li>Latest blog post, cool post</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
          <li>Blog post 2 unordered random theme</li>
        </ol>
      </div>
      <div className={`${widgetStyle}`}>
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <a className={`${linkStyle} bg-violet-800 border-violet-300`} href="">
            <FaDiscord />
          </a>
          <a className={`${linkStyle} bg-purple-800 border-purple-300`} href="">
            <FaInstagram />
          </a>
          <a className={`${linkStyle} bg-blue-800 border-blue-300`} href="">
            <FaLinkedinIn />
          </a>
          <a
            className={`${linkStyle} bg-neutral-800 border-neutral-300`}
            href=""
          >
            <FaGithub />
          </a>
          <a className={`${linkStyle} bg-amber-800 border-amber-300`} href="">
            <FaMailBulk />
          </a>
          <a className={`${linkStyle} bg-indigo-800 border-indigo-300`} href="">
            <FaMastodon />
          </a>
        </div>
      </div>
      <div className={`${widgetStyle} col-span-2 gap-3`}>
        <Image
          src={"/react.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/nextjs.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/express.png"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/nest.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/mongo.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/docker.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
        <Image
          src={"/bash.svg"}
          alt="Next.js logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
