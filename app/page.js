import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/images-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Nextlevel foods for Nextlevel foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore the meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
