import Image from 'next/image';

export default function ImageLogos() {
  return (
    <div className='flex flex-row items-center justify-center gap-4 flex-wrap'>
        <Image
        src="/tailwind.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/nextjs.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/react.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/nest.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/ubuntu.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/bash.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
        <Image
        src="/docker.svg"
        alt="Tailwind CSS logo"
        width={50}
        height={50}
        priority
        />
    </div>
  );
}
