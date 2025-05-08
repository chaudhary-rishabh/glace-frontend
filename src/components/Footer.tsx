import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-green-900 py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Phea. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Terms</Link>
          <Link href="/services" className="hover:underline">Policy</Link>
          <Link href="/contact" className="hover:underline">help</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;