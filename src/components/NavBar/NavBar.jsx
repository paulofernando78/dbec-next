import Image from "next/image";
import Link from "next/link";
import navBar from "./NavBar.module.css";

import homeIcon from "../../assets/img/icon/home.png";

// Courses
import placementTest from "../../assets/img/icon/placement-test.png";
import beginner from "../../assets/img/icon/beginner.png";
import elementary from "../../assets/img/icon/elementary.png";
import preIntermediate from "../../assets/img/icon/pre-intermediate.png";
import intermediate from "../../assets/img/icon/intermediate.png";
import upperIntermediate from "../../assets/img/icon/upper-intermediate.png";
import advanced from "../../assets/img/icon/advanced.png";

// Extra
import grammarIcon from "../../assets/img/icon/grammar.png";
import listeningIcon from "../../assets/img/icon/listening.png";
import readingIcon from "../../assets/img/icon/reading.png";
import speakingIcon from "../../assets/img/icon/speaking.png";
import pronunciationIcon from "../../assets/img/icon/pronunciation.png";
import vocabularyIcon from "../../assets/img/icon/dictionary.png";

// Specific Purposes
import automobileIcon from "../../assets/img/icon/automobile.png";
import businessIcon from "../../assets/img/icon/business.png";
import chemistryIcon from "../../assets/img/icon/chemistry.png";
import codingIcon from "../../assets/img/icon/coding.png";
import cookingIcon from "../../assets/img/icon/cooking.png";
import dentistryIcon from "../../assets/img/icon/dentistry.png";
import geographyIcon from "../../assets/img/icon/geography.png";
import gymIcon from "../../assets/img/icon/gym.png";
import hairdressingIcon from "../../assets/img/icon/hairdressing.png";
import historyIcon from "../../assets/img/icon/history.png";
import lawIcon from "../../assets/img/icon/law.png";
import jobInterviewIcon from "../../assets/img/icon/job-interviews.png";
import medicineIcon from "../../assets/img/icon/medicine.png";
import travelIcon from "../../assets/img/icon/travel.png";
import scienceIcon from "../../assets/img/icon/science.png";
import stockMarketIcon from "../../assets/img/icon/stock-market.png";
import resumaotIcon from "../../assets/img/icon/dictionary.png";
import examsIcon from "../../assets/img/icon/exams.png";
import miscIcon from "../../assets/img/icon/misc.png";

const navBarLinks = [
  {
    label: "COURSES",
    links: [
      {
        imgSrc: placementTest,
        link: "/courses/placement-test",
        name: "Placement Test",
      },
      {
        imgSrc: beginner,
        link: "/courses/beginner",
        name: "Beginner (A1)",
      },
      {
        imgSrc: elementary,
        link: "/courses/elementary",
        name: "Elementary (A2)",
      },
      {
        imgSrc: preIntermediate,
        link: "/courses/pre-intermediate",
        name: "Pre-Inter. (A2-B1)",
      },
      {
        imgSrc: intermediate,
        link: "/courses/intermediate",
        name: "Intermediate (B1)",
      },
      {
        imgSrc: upperIntermediate,
        link: "/courses/upper-intermediate",
        name: "Upper-Inter. (B2)",
      },
      {
        imgSrc: advanced,
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
        link: "/extras/",
        name: "Grammar"
      },
      {
        imgSrc: listeningIcon,
        link: "/extras/",
        name: "Listening"
      },
      {
        imgSrc: readingIcon,
        link: "/extras/",
        name: "Reading"
      },
      {
        imgSrc: speakingIcon,
        link: "/extras/",
        name: "Speaking"
      },
      {
        imgSrc: pronunciationIcon,
        link: "/extras/",
        name: "Pronunciation"
      },
      {
        imgSrc: vocabularyIcon,
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
        link: "/specific-purposes/",
        name: "Automobile"
      },
      {
        imgSrc: businessIcon,
        link: "/specific-purposes/",
        name: "Business"
      },
      {
        imgSrc: chemistryIcon,
        link: "/specific-purposes/",
        name: "Chemistry"
      },
      {
        imgSrc: codingIcon,
        link: "/specific-purposes/",
        name: "Coding"
      },
      {
        imgSrc: cookingIcon,
        link: "/specific-purposes/",
        name: "Cooking"
      },
      {
        imgSrc: dentistryIcon,
        link: "/specific-purposes/",
        name: "Dentistry"
      },
      {
        imgSrc: geographyIcon,
        link: "/specific-purposes/",
        name: "Geography"
      },
      {
        imgSrc: gymIcon,
        link: "/specific-purposes/",
        name: "Gym"
      },
      {
        imgSrc: hairdressingIcon,
        link: "/specific-purposes/",
        name: "Hairdressing"
      },
      {
        imgSrc: historyIcon,
        link: "/specific-purposes/",
        name: "History"
      },
      {
        imgSrc: lawIcon,
        link: "/specific-purposes/",
        name: "Law"
      },
      {
        imgSrc: jobInterviewIcon,
        link: "/specific-purposes/",
        name: "Job Interview"
      },
      {
        imgSrc: medicineIcon,
        link: "/specific-purposes/",
        name: "Medicine"
      },
      {
        imgSrc: travelIcon,
        link: "/specific-purposes/travel",
        name: "Travel"
      },
      {
        imgSrc: scienceIcon,
        link: "/specific-purposes/",
        name: "Science"
      },
      {
        imgSrc: stockMarketIcon,
        link: "/specific-purposes/",
        name: "Stock Market"
      },
      {
        imgSrc: examsIcon,
        link: "/specific-purposes/",
        name: "Exams"
      },
      {
        imgSrc: miscIcon,
        link: "/specific-purposes/",
        name: "Miscellaneous"
      },
      {
        imgSrc: resumaotIcon,
        link: "/specific-purposes/",
        name: "Resumão"
      },
    ],
  },
];

export const NavBar = () => {
  return (
    <nav className={navBar["nav-bar"]}>
      <ul className="line-break">
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
                <b>HOME</b>
              </p>
            </Link>
          </li>
        </div>

        <div className="">
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

        {/* Drafts */}
        <Link href="/drafts">
          <p>Mock</p>
        </Link>
      </ul>
    </nav>
  );
};
