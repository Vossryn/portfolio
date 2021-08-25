import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.scss";

export default function Footer() {
  return (
    <div
      className={`pt-3 px-3 z-10 font-bold flex flex-row justify-between rounded-tr-2xl rounded-tl-2xl border-blue-300 border-t-2 border-b-0 sm:border-r-2 sm:border-l-2 ${styles.bgBlurBottom}`}
    >
      <div>
        <Link href="https://github.com/Vossryn" passHref>
          <a target="_blank" className="mr-4">
            <Image src="/images/GitHub-Mark-Light-32px.png" width={20} height={20} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/philip-flynt-21b4a722" passHref>
          <a target="_blank">
            <Image src="/images/linkedin-3-xxl.png" width={20} height={20} />
          </a>
        </Link>
      </div>
      <div>Philip Flynt</div>
    </div>
  );
}
