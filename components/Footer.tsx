import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-parchment-dark">
      <div className="text-[0.85rem] text-driftwood">
        <span className="block">&copy; 2026 Argazo SL</span>
        <span className="block italic mt-1">A Coruña, España</span>
        <Link
          href="/privacidad"
          className="block mt-2 text-driftwood no-underline hover:text-sea-mid hover:underline"
        >
          Política de Privacidad
        </Link>
      </div>
    </footer>
  );
}
