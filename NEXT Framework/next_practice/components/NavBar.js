import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
}
