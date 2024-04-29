import navBar from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

import homeIcon from "/public/img/icon/home.png";

// Courses
import placementTest from "/public/img/icon/placement-test.png";
import beginner from "/public/img/icon/beginner.png";
import elementary from "/public/img/icon/elementary.png";
import preIntermediate from "/public/img/icon/pre-intermediate.png";
import intermediate from "/public/img/icon/intermediate.png";
import upperIntermediate from "/public/img/icon/upper-intermediate.png";
import advanced from "/public/img/icon/advanced.png";

// Extra
import grammarIcon from "/public/img/icon/grammar.png";
import listeningIcon from "/public/img/icon/listening.png";
import readingIcon from "/public/img/icon/reading.png";
import speakingIcon from "/public/img/icon/speaking.png";
import pronunciationIcon from "/public/img/icon/pronunciation.png";
import bookDictionaryIcon from "/public/img/icon/dictionary.png";

// Specific Purposes
import businessIcon from "/public/img/icon/business.png";
import codingIcon from "/public/img/icon/coding.png";
import cookingIcon from "/public/img/icon/cooking.png";
import dentistryIcon from "/public/img/icon/dentistry.png";
import jobInterviewIcon from "/public/img/icon/job-interviews.png";
import medicineIcon from "/public/img/icon/medicine.png";
import examsIcon from "/public/img/icon/exams.png";

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
        name: "Beginer (A1)",
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
        imgSrc: "",
        link: "/extras/",
        name: "Grammar"
      },
      {
        imgSrc: "",
        link: "/extras/",
        name: "Listening"
      },
      {
        imgSrc: "",
        link: "/extras/",
        name: "Reading"
      },
      {
        imgSrc: "",
        link: "/extras/",
        name: "Speaking"
      },
      {
        imgSrc: "",
        link: "/extras/",
        name: "Pronunciation"
      },
      {
        imgSrc: "",
        link: "/extras/vocabulary",
        name: "Vocabulary"
      },
    ],
  },
  {
    label: "SPECIFIC PURPOSES",
    links: [
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Automobile"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Business"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Chemistry"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Coding"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Cooking"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Dentistry"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Geography"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Gym"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Hair"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "History"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Law"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Job Interview"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Medicine"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Travel"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Science"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Stock Market"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Exams"
      },
      {
        imgSrc: "",
        link: "/specific-purposes/",
        name: "Miscellaneous"
      },
      {
        imgSrc: "",
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
