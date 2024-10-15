import Link from "next/link";

export function PublicLayoutFooter() {
  return (
    <footer className="min-h-[300px] bg-slate-800 p-8 flex max-md:flex-col max-md:items-center max-md:gap-12 max-md:text-center">
      <div className="space-y-4 max-md:space-y-2 flex-1">
        <h4 className="text-lime-400 font-semibold text-lg">Social media</h4>

        <ul>
          <li>
            <Link href="https://github.com/devpgcs/" className="text-slate-100">
              Github
            </Link>
          </li>

          <li>
            <Link href="https://www.linkedin.com/in/devpgcs/" className="text-slate-100">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4 max-md:space-y-2 flex-1">
        <h4 className="text-lime-400 font-semibold text-lg">Portfolio</h4>

        <ul>
          <li>
            <Link href="https://devpgcs.github.io/expo-google-places/" target="_blank" className="text-slate-100">
              Expo Google Places
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4 max-md:space-y-2 flex-1">
        <h4 className="text-lime-400 font-semibold text-lg">Contact information</h4>

        <address className="text-slate-100">
          Colombia, Bogotá
          <br />
          Carrera 79, #19-20
          <br />
          110931
        </address>

        <div className="text-slate-100">
          <ul>
            <li>
              <a href="tel:+573112282942">+57 311 228 2942</a>
            </li>
            <li>
              <a href="mailto:devpgcs@hotmail.com">devpgcs@hotmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
