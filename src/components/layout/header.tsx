import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <link href="/" className="text-2xl font-light text-gray-800">Bespoke Backdrops & Props</link>
        <div className="flex items-center gap-4">
          <span className="text-pink-600 font-medium">+27 66 206 7983</span>
          <link href="/cart" className="text-pink-600">Cart</link>
        </div>
      </nav>
    </header>
  );
}
