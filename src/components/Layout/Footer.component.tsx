import styles from "./Layout.module.scss";

export default function Footer() {
  return (
    <div
      className={`p-3 z-10 font-bold flex flex-row justify-between relative w-full sm:w-9/12 mx-auto rounded-tr-2xl rounded-tl-2xl border-blue-300 border-t-2 border-b-0 sm:border-r-2 sm:border-l-2 ${styles.bgBlurBottom}`}
    >
      <div>Linkedin | Github</div>
      <div>Philip Flynt</div>
    </div>
  );
}
