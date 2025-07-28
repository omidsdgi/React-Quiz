import Image from "next/image";

export function Header() {
  return (
    <header className='app-header'>
        <Image
            src="/logo512.png"
            alt="React logo"
            width={128}
            height={128}
        />
      <h1>
          The React Quiz
      </h1>
    </header>
  );
}


