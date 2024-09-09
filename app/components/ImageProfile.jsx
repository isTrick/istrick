import Image from 'next/image';

export default function ImageProfile() {
  return (
    <Image
      src="https://media.licdn.com/dms/image/v2/D4D03AQHoSiZ7S8xU0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715864540580?e=2147483647&v=beta&t=OOYFynsiA64UB_SPLxF7KZcs9fe-8YQMoBjPKjkupZA"
      alt="Image de perfil do autor da página."
      width={200}
      height={200}
      className="rounded-full p-2"
    />
  );
}
