export default function Footer() {
  return (
    <footer>
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm md:px-6">
        <li>
          Copyright &copy; 2022, {" "}
          <a
            href="https://twitter.com/SoRoWeekly/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            SoRo Weekly
          </a>
        </li>
      </ul>
    </footer>
  );
}
