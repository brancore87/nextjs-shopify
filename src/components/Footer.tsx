export default function Footer() {
  const date = new Date();
  return (
    <footer className="px-7 py-5 fixed bottom-0 w-full bg-teal-900/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-center">
      <small className="opacity-50">
        &copy; BRANCODE <time>{date.getFullYear().toString()}</time> | All
        rights reserved
      </small>
    </footer>
  );
}
