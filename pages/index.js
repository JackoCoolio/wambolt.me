import Head from "next/head"

import Banner from "../public/banner"
import { Container, Section } from "../public/container"
import Typing from "../public/typing"
import Link from "next/link"
import Cursor from "../public/cursor"

import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jackson Wambolt</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Hi!" />
        <meta name="author" content="Jackson Wambolt" />
      </Head>
      <Banner
        buttons={[
          {
            text: "About Me",
            section: "aboutme",
          },
          {
            text: "Projects",
            section: "projects",
          },
        ]}
      />
      <Container>
        <Section title="About Me" id="aboutme">
          <div className={styles.gallery}>
            <div className={styles.galleryColumn}>
              <div className={styles.galleryElement}>
                <div id={styles.aboutMePicture} />
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <div className={styles.galleryElement}>
                <div
                  style={{
                    fontFamily: "Fira Code",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                ></div>

                <h2 style={{ textAlign: "center", width: "100%" }}>
                  <Typing text="Hi! I'm Jackson." startDelay="2000" />
                  <Cursor />
                </h2>
                <div id={styles.aboutMeBody}>
                  <p>
                    I'm currently studying at the University of
                    Wisconsin–Madison, where I am majoring in Computer Science.
                    Web and software development has been a passion of mine ever
                    since elementary school, and I've followed that passion for
                    the past nine years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Projects" id="projects">
          <div className={styles.gallery}>
            <div className={styles.galleryColumn}>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link
                    href="https://github.com/JackoCoolio/harmony_v2"
                    passHref
                  >
                    <a>Harmony Engine</a>
                  </Link>{" "}
                  (Jan 2020 - Nov 2020)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  An OpenGL game engine written in C++.
                </h3>
                <p>
                  After three (four?) unsuccessful iterations of this project,
                  I've landed on one that I think is sustainable. Unimportant
                  boilerplate and technical code is abstracted away from the
                  developer, so they only have to worry about making a good
                  game.
                </p>
              </div>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link
                    href="https://github.com/JackoCoolio/starboard"
                    passHref
                  >
                    <a>Starboard</a>
                  </Link>{" "}
                  (Feb 2020 - Present)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  A Node.js Discord bot.
                </h3>
                <p>
                  Reacting to a message with a star emoji puts the message in a
                  designated "starboard" channel. I'm currently running this bot
                  on a Raspberry Pi for a personal Discord server.
                </p>
              </div>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link href="https://github.com/JackoCoolio/cheddar" passHref>
                    <a>Cheddar</a>
                  </Link>{" "}
                  (April 2021 - May 2021)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  A fun chess engine that doesn't <i>exactly</i> know the
                  objective of the game.
                </h3>
                <p>
                  After watching{" "}
                  <Link href="https://www.youtube.com/watch?v=DpXy041BIlA">
                    <a>this interesting video</a>
                  </Link>
                  , I was inspired to create my own version. I plan to make it
                  available online, for others to play against it. Currently,
                  I'm working on writing the engine and once I'm done, I'll get
                  to work on the website.
                </p>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link
                    href="https://github.com/JackoCoolio/wambolt.me"
                    passHref
                  >
                    <a>Personal Website</a>
                  </Link>{" "}
                  (Nov 2020 - Present)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  A website built with Next.js.
                </h3>
                <p>
                  Ever since I first learned HTML around nine years ago (to add
                  a <code>&lt;marquee&gt;</code> tag to my Weebly website) I
                  haven't bothered to touch web development, but React is such a
                  fun and intuitive library, that I couldn't escape it.
                </p>
              </div>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link
                    href="https://github.com/JackoCoolio/typing-test"
                    passHref
                  >
                    <a>Typing Test</a>
                  </Link>{" "}
                  (Jan 2021 - Mar 2021)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  A{" "}
                  <Link href="https://monkeytype.com/" passHref>
                    <a>Monkeytype</a>
                  </Link>
                  -reminiscent typing test built with Electron, React, and
                  Webpack.
                </h3>
                <p>
                  This has been one of my favorite projects to work on, because
                  React is such a fun library to use. I used this and{" "}
                  <Link href="https://typeracer.com">
                    <a>Typeracer</a>
                  </Link>{" "}
                  to learn the Dvorak keyboard layout.
                </p>
              </div>
              <div
                className={`${styles.galleryElement} ${styles.projectElement}`}
              >
                <h2 className={styles.galleryTitle}>
                  <Link href="https://github.com/JackoCoolio/blop" passHref>
                    <a>Blop</a>
                  </Link>{" "}
                  (Aug 2021 - Present)
                </h2>
                <h3 className={styles.gallerySubtitle}>
                  An online game platform built on Next.js and MongoDB.
                </h3>
                <p>
                  I'm working on this project to gain more experience with
                  database technology (in this case MongoDB). A very early
                  development build is currently hosted on Heroku at{" "}
                  <Link href="https://jackocoolio-blop.herokuapp.com/" passHref>
                    <a>jackocoolio-blop.herokuapp.com</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Section>
        <div id={styles.footer}>
          <h1>© 2021, Jackson Wambolt</h1>
        </div>
      </Container>
    </>
  )
}
