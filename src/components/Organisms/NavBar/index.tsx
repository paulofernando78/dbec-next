"use client";

// Components
import Link from "next/link";
import Image from "next/image";

// Hooks
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Styles
import styles from "./styles.module.css";

// Images
import {
  // Courses
  placementTest,
  beginner,
  elementary,
  preIntermediate,
  intermediate,

  // Extras
  listeningIcon,
  pronunciationIcon,
  grammarIcon,
  vocabularyIcon,

  // Specific Purposes
  aviationIcon,
  automobileIcon,
  businessIcon,
  chemistryIcon,
  codingIcon,
  foodDrinkIcon,
  dentistryIcon,
  gamesIcon,
  geographyIcon,
  workoutIcon,
  hairdressingIcon,
  historyIcon,
  lawIcon,
  jobInterviewIcon,
  mathIcon,
  medicineIcon,
  travelIcon,
  scienceIcon,
  songsIcon,
  sportsIcon,
  stockMarketIcon,
  technologyIcon,
  examsIcon,
  miscIcon,
} from "@/img/index";

// Types
import { NavBarProps } from "./types";
import { ThemeSwitch } from "../ThemeSwitch";

const navBarLinks = [
  // Courses
  {
    label: "COURSES",
    links: [
      {
        imgSrc: placementTest,
        altName: "Book icon",
        link: "/materials/courses/placement-test",
        name: "Placement Test",
      },
      {
        imgSrc: beginner,
        altName: "Book icon",
        link: "/materials/courses/beginner",
        name: "Beginner (A1)",
      },
      {
        imgSrc: elementary,
        altName: "Book icon",
        link: "/materials//courses/elementary",
        name: "Elementary (A2)",
      },
      {
        imgSrc: preIntermediate,
        altName: "Book icon",
        link: "/materials//courses/pre-intermediate",
        name: "Pre-Int. (A2-B1)",
      },
      {
        imgSrc: intermediate,
        altName: "Book icon",
        link: "/materials//courses/intermediate",
        name: "Intermediate (B1)",
      },
      // {
      //   imgSrc: upperIntermediate,
      //   altName: "Book icon",
      //   link: "/courses/upper-intermediate",
      //   name: "Upper-Inter. (B2)",
      // },
      // {
      //   imgSrc: advanced,
      //   altName: "Book icon",
      //   link: "/courses/advanced",
      //   name: "Advanced (C1)",
      // },
    ],
  },
  // Extras
  {
    label: "EXTRAS",
    links: [
      {
        imgSrc: listeningIcon,
        altName: "Listening icon",
        link: "/materials/extras/audiobooks",
        name: "Audiobooks",
      },
      {
        imgSrc: pronunciationIcon,
        altName: "Pronunciation icon",
        link: "/materials//extras/pronunciation",
        name: "Pronunciation",
      },
      {
        imgSrc: grammarIcon,
        altName: "Grammar icon",
        link: "/materials//extras/grammar",
        name: "Grammar",
      },
      {
        imgSrc: vocabularyIcon,
        altName: "Book a-z icon",
        link: "/materials//extras/vocabulary",
        name: "Vocabulary",
      },
    ],
  },
  // Specific Purposes
  {
    label: "SPECIFIC PURPOSES",
    links: [
      // {
      //   imgSrc: aviationIcon,
      //   altName: "Aviation icon",
      //   link: "/materials/specific-purposes/aviation",
      //   name: "Aviation",
      // },
      {
        imgSrc: businessIcon,
        altName: "Business icon",
        link: "/materials//specific-purposes/business",
        name: "Business",
      },
      // {
      //   imgSrc: chemistryIcon,
      //   altName: "Chemistry icon",
      //   link: "/materials//specific-purposes/chemistry",
      //   name: "Chemistry",
      // },
      // {
      //   imgSrc: codingIcon,
      //   altName: "Coding icon",
      //   link: "/materials//specific-purposes/coding",
      //   name: "Coding",
      // },
      // {
      //   imgSrc: foodDrinkIcon,
      //   altName: "Cooking icon",
      //   link: "/materials//specific-purposes/food-drink",
      //   name: "Food / Drink",
      // },
      // {
      //   imgSrc: gamesIcon,
      //   altName: "Games icon",
      //   link: "/materials//specific-purposes/games",
      //   name: "Games",
      // },
      // {
      //   imgSrc: geographyIcon,
      //   altName: "Geography icon",
      //   link: "/materials//specific-purposes/geography",
      //   name: "Geography",
      // },
      // {
      //   imgSrc: workoutIcon,
      //   altName: "Workout icon",
      //   link: "/materials//specific-purposes/workout",
      //   name: "Workout",
      // },
      // {
      //   imgSrc: hairdressingIcon,
      //   altName: "Hairdressing icon",
      //   link: "/materials//specific-purposes/hairdressing",
      //   name: "Hairdressing",
      // },
      // {
      //   imgSrc: historyIcon,
      //   altName: "History icon",
      //   link: "/materials//specific-purposes/history",
      //   name: "History",
      // },
      {
        imgSrc: jobInterviewIcon,
        altName: "Job interview icon",
        link: "/materials//specific-purposes/job-interviews",
        name: "Job Interview",
      },
      // {
      //   imgSrc: lawIcon,
      //   altName: "Law icon",
      //   link: "/materials//specific-purposes/law",
      //   name: "Law",
      // },
      // {
      //   imgSrc: mathIcon,
      //   altName: "Math icon",
      //   link: "/materials//specific-purposes/math",
      //   name: "Math",
      // },
      // {
      //   imgSrc: medicineIcon,
      //   altName: "Medicine icon",
      //   link: "/materials//specific-purposes/medicine",
      //   name: "Medicine",
      // },
      {
        imgSrc: travelIcon,
        altName: "Travel icon",
        link: "/materials//specific-purposes/travel",
        name: "Travel",
      },
      // {
      //   imgSrc: scienceIcon,
      //   altName: "Science icon",
      //   link: "/materials//specific-purposes/science",
      //   name: "Science",
      // },
      {
        imgSrc: songsIcon,
        width: "25px",
        altName: "Songs icon",
        link: "/materials//specific-purposes/songs",
        name: "Songs",
      },
      // {
      //   imgSrc: sportsIcon,
      //   altName: "Sports icon",
      //   link: "/materials//specific-purposes/sports",
      //   name: "Sports",
      // },
      // {
      //   imgSrc: stockMarketIcon,
      //   altName: "Stock market icon",
      //   link: "/materials//specific-purposes/stock-market",
      //   name: "Stock Market",
      // },
      {
        imgSrc: examsIcon,
        altName: "Exam icon",
        link: "/materials//specific-purposes/exams",
        name: "Exams",
      },
      // {
      //   imgSrc: miscIcon,
      //   altName: "Ellipsis icon",
      //   link: "/materials//specific-purposes/misc",
      //   name: "Miscellaneous",
      // }
    ],
  },
];

export const NavBar = ({ show, toggleShow }: NavBarProps) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return show || !isSmallDevice ? (
    <nav className={styles["nav-bar"]}>
      <ThemeSwitch />
      <ul className="line-break margin-top">
        {/* <input type="text" placeholder="search" /> */}

        <div className="line-break">
          {navBarLinks.map((navBarLink, index) => (
            <div key={index} className="margin-bottom">
              <p className="font-bold">{navBarLink.label}</p>
              <div>
                {navBarLink.links.map((link, linkIndex) => (
                  <div key={linkIndex} className={styles["nav-list"]}>
                    <Image
                      src={link.imgSrc}
                      alt={link.altName}
                      className={styles["nav-icon-size"]}
                      style={{ width: link.width }}
                    />
                    <Link
                      href={link.link}
                      className={styles["nav-bar-link"]}
                      onClick={() => toggleShow()}
                    >
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
  ) : (
    ""
  );
};
