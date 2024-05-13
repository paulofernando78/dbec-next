import Image from "next/image";
import Link from "next/link";

import navBar from "./NavBar.module.css";

import homeIcon from "../../../public/assets/img/icon/home.png";
import dictionaryIcon from "../../../public/assets/img/icon/dictionary.png";

// Courses
import placementTest from "../../../public/assets/img/icon/placement-test.png";
import beginner from "../../../public/assets/img/icon/beginner.png";
import elementary from "../../../public/assets/img/icon/elementary.png";
import preIntermediate from "../../../public/assets/img/icon/pre-intermediate.png";
import intermediate from "../../../public/assets/img/icon/intermediate.png";
import upperIntermediate from "../../../public/assets/img/icon/upper-intermediate.png";
import advanced from "../../../public/assets/img/icon/advanced.png";

// Extra
import grammarIcon from "../../../public/assets/img/icon/grammar.png";
import listeningIcon from "../../../public/assets/img/icon/listening.png";
import readingIcon from "../../../public/assets/img/icon/reading.png";
import speakingIcon from "../../../public/assets/img/icon/speaking.png";
import pronunciationIcon from "../../../public/assets/img/icon/pronunciation.png";
import vocabularyIcon from "../../../public/assets/img/icon/dictionary.png";

// Specific Purposes
import automobileIcon from "../../../public/assets/img/icon/automobile.png";
import businessIcon from "../../../public/assets/img/icon/business.png";
import chemistryIcon from "../../../public/assets/img/icon/chemistry.png";
import codingIcon from "../../../public/assets/img/icon/coding.png";
import cookingIcon from "../../../public/assets/img/icon/cooking.png";
import dentistryIcon from "../../../public/assets/img/icon/dentistry.png";
import gamesIcon from "../../../public/assets/img/icon/games.png";
import geographyIcon from "../../../public/assets/img/icon/geography.png";
import workoutIcon from "../../../public/assets/img/icon/workout.png";
import hairdressingIcon from "../../../public/assets/img/icon/hairdressing.png";
import historyIcon from "../../../public/assets/img/icon/history.png";
import lawIcon from "../../../public/assets/img/icon/law.png";
import jobInterviewIcon from "../../../public/assets/img/icon/job-interviews.png";
import medicineIcon from "../../../public/assets/img/icon/medicine.png";
import travelIcon from "../../../public/assets/img/icon/travel.png";
import scienceIcon from "../../../public/assets/img/icon/science.png";
import songsIcon from "../../../public/assets/img/icon/songs.png";
import sportsIcon from "../../../public/assets/img/icon/sports.png";
import stockMarketIcon from "../../../public/assets/img/icon/stock-market.png";
import resumaotIcon from "../../../public/assets/img/icon/dictionary.png";
import examsIcon from "../../../public/assets/img/icon/exams.png";
import miscIcon from "../../../public/assets/img/icon/misc.png";

const navBarLinks = [
  {
    label: "COURSES",
    links: [
      {
        imgSrc: placementTest,
        altName: "Book icon",
        link: "/courses/placement-test",
        name: "Placement Test",
      },
      {
        imgSrc: beginner,
        altName: "Book icon",
        link: "/courses/beginner",
        name: "Beginner (A1)",
      },
      {
        imgSrc: elementary,
        altName: "Book icon",
        link: "/courses/elementary",
        name: "Elementary (A2)",
      },
      {
        imgSrc: preIntermediate,
        altName: "Book icon",
        link: "/courses/pre-intermediate",
        name: "Pre-Int. (A2-B1)",
      },
      {
        imgSrc: intermediate,
        altName: "Book icon",
        link: "/courses/intermediate",
        name: "Intermediate (B1)",
      },
      {
        imgSrc: upperIntermediate,
        altName: "Book icon",
        link: "/courses/upper-intermediate",
        name: "Upper-Inter. (B2)",
      },
      {
        imgSrc: advanced,
        altName: "Book icon",
        link: "/courses/advanced",
        name: "Advanced (C1)",
      },
    ],
  },
  {
    label: "EXTRAS",
    links: [
      {
        imgSrc: grammarIcon,
        altName: "Grammar icon",
        link: "/extras/grammar",
        name: "Grammar"
      },
      {
        imgSrc: listeningIcon,
        altName: "Listening icon",
        link: "/extras/listening",
        name: "Listening"
      },
      // {
      //   imgSrc: readingIcon,
      //   altName: "reading icon",
      //   link: "/extras/reading",
      //   name: "Reading"
      // },
      {
        imgSrc: speakingIcon,
        altName: "Speaking icon",
        link: "/extras/speaking",
        name: "Speaking"
      },
      {
        imgSrc: pronunciationIcon,
        altName: "Pronunciation icon",
        link: "/extras/pronunciation",
        name: "Pronunciation"
      },
      {
        imgSrc: vocabularyIcon,
        altName: "Book a-z icon",
        link: "/extras/vocabulary",
        name: "Vocabulary"
      },
    ],
  },
  {
    label: "SPECIFIC PURPOSES",
    links: [
      {
        imgSrc: automobileIcon,
        altName: "Automobile icon",
        link: "/specific-purposes/automobile",
        name: "Automobile"
      },
      {
        imgSrc: businessIcon,
        altName: "Business icon",
        link: "/specific-purposes/business",
        name: "Business"
      },
      {
        imgSrc: chemistryIcon,
        altName: "Chemistry icon",
        link: "/specific-purposes/chemistry",
        name: "Chemistry"
      },
      {
        imgSrc: codingIcon,
        altName: "Coding icon",
        link: "/specific-purposes/coding",
        name: "Coding"
      },
      {
        imgSrc: cookingIcon,
        altName: "Cooking icon",
        link: "/specific-purposes/cooking",
        name: "Cooking"
      },
      {
        imgSrc: dentistryIcon,
        altName: "Dentistry icon",
        link: "/specific-purposes/dentistry",
        name: "Dentistry"
      },
      {
        imgSrc: gamesIcon,
        altName: "Games icon",
        link: "/specific-purposes/games",
        name: "Games"
      },
      {
        imgSrc: geographyIcon,
        altName: "Geography icon",
        link: "/specific-purposes/geography",
        name: "Geography"
      },
      {
        imgSrc: workoutIcon,
        altName: "Workout icon",
        link: "/specific-purposes/workout",
        name: "Workout"
      },
      {
        imgSrc: hairdressingIcon,
        altName: "Hairdressing icon",
        link: "/specific-purposes/hairdressing",
        name: "Hairdressing"
      },
      {
        imgSrc: historyIcon,
        altName: "History icon",
        link: "/specific-purposes/history",
        name: "History"
      },
      {
        imgSrc: jobInterviewIcon,
        altName: "Job interview icon",
        link: "/specific-purposes/job-interviews",
        name: "Job Interview"
      },
      {
        imgSrc: lawIcon,
        altName: "Law icon",
        link: "/specific-purposes/law",
        name: "Law"
      },
      {
        imgSrc: medicineIcon,
        altName: "Medicine icon",
        link: "/specific-purposes/medicine",
        name: "Medicine"
      },
      {
        imgSrc: travelIcon,
        altName: "Travel icon",
        link: "/specific-purposes/travel",
        name: "Travel"
      },
      {
        imgSrc: scienceIcon,
        altName: "Science icon",
        link: "/specific-purposes/science",
        name: "Science"
      },
      {
        imgSrc: songsIcon,
        altName: "Songs icon",
        link: "/specific-purposes/songs",
        name: "Songs"
      },
      {
        imgSrc: sportsIcon,
        altName: "Sports icon",
        link: "/specific-purposes/sports",
        name: "Sports"
      },
      {
        imgSrc: stockMarketIcon,
        altName: "Stock market icon",
        link: "/specific-purposes/stock-market",
        name: "Stock Market"
      },
      {
        imgSrc: examsIcon,
        altName: "Exam icon",
        link: "/specific-purposes/exams",
        name: "Exams"
      },
      {
        imgSrc: miscIcon,
        altName: "Ellipsis icon",
        link: "/specific-purposes/misc",
        name: "Miscellaneous"
      },
      {
        imgSrc: resumaotIcon,
        altName: "Book a-z icon",
        link: "/specific-purposes/resumao",
        name: "Resumão"
      },
    ],
  },
];

export const NavBar = () => {
  return (
    <nav className={navBar["nav-bar"]}>
      <ul className="line-break">
        <div>
          <div className={navBar["nav-list"]}>
            <Image
              src={homeIcon}
              alt="Home"
              className={navBar["nav-icon-size"]}
            />
            <li>
              {/* Home */}
              <Link href="/">
                <p>
                  <b>Home</b>
                </p>
              </Link>
            </li>
          </div>
          <div className={navBar["nav-list"]}>
            <Image
              src={dictionaryIcon}
              alt="Home"
              className={navBar["nav-icon-size"]}
            />
            <li>
              {/* Home */}
              <Link href="/dictionary">
                <p>
                  <b>Dictionary</b>
                </p>
              </Link>
            </li>
          </div>
        </div>

        <div className="line-break">
          {navBarLinks.map((navBarLink, index) => (
            <div key={index} className="line-break">
              <p className="bold">{navBarLink.label}</p>
              <div>
                {navBarLink.links.map((link, linkIndex) => (
                  <div key={linkIndex} className={navBar["nav-list"]}>
                    <Image
                      src={link.imgSrc}
                      alt={link.altName}
                      className={navBar["nav-icon-size"]}
                    />
                    <Link href={link.link} className={navBar["nav-bar-link"]}>
                      <p>{link.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ul>
    </nav>
  );
};
