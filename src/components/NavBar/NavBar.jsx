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

export const NavBar = () => {
  return (
    <nav className={navBar["nav-bar"]}>
      <ul>
        <div className={navBar["nav-list"]}>
          <Image src={homeIcon} alt="Home" className="icon-general" />
          <li>
            {/* Home */}
            <Link href="/">
              <p>
                <b>HOME</b>
              </p>
            </Link>
          </li>
        </div>
        <br />

        <p>
          <b>COURSES</b>
        </p>

        {/* Placement text */}
        <div className={navBar["nav-list"]}>
          <Image src={placementTest} alt="Book" className="icon-general" />
          <li>
            <Link href="/courses/placement-test" className={navBar["nav-bar-link"]}>
              <p>Placement text</p>
            </Link>
          </li>
        </div>

        {/* Beginner */}
        <div className={navBar["nav-list"]}>
          <Image src={beginner} alt="Book" className="icon-general" />
          <li>
            <Link href="#" className={navBar["nav-bar-link"]}>
              <p>Beginner (A1)</p>
            </Link>
          </li>
        </div>

        {/* Elementary */}
        <div className={navBar["nav-list"]}>
          <Image
            src={elementary}
            alt="Book"
            className="icon-general"
          />
          <li>
            <Link href="#" className={navBar["nav-bar-link"]}>
              <p>Elementary (A2)</p>
            </Link>
          </li>
        </div>

        {/* Pre-Intermediate */}
        <div className={navBar["nav-list"]}>
          <Image
            src={preIntermediate}
            alt="Book"
            className="icon-general"
          />
          <li>
            <Link href="/course/pre-intermediate" className={navBar["nav-bar-link"]}>
              <p style={{ fontSize: "1.07rem" }}>Pre-Intermediate (A2-B1)</p>
            </Link>
          </li>
        </div>

        {/* Intermediate */}
        <div className={navBar["nav-list"]}>
          <Image
            src={intermediate}
            alt="Book"
            className="icon-general"
          />
          <li>
            <Link href="#" className={navBar["nav-bar-link"]}>
              <p>Intermediate (B1)</p>
            </Link>
          </li>
        </div>

        {/* Upper-Intermediate */}
        <div className={navBar["nav-list"]}>
          <Image
            src={upperIntermediate}
            alt="Book"
            className="icon-general"
          />
          <li>
            <Link href="#" className={navBar["nav-bar-link"]}>
              <p style={{ fontSize: "1.1rem" }}>Upper-Intermediate (B2)</p>
            </Link>
          </li>
        </div>

        {/* Advanced */}
        <div className={navBar["nav-list"]}>
          <Image src={advanced} alt="Book" className="icon-general" />
          <li>
            <Link href="#" className={navBar["nav-bar-link"]}>
              <p>Advanced (C1)</p>
            </Link>
          </li>
        </div>
        <br />

        <div>
          <p>
            <b>EXTRAS</b>
          </p>
          <br />

          {/* Grammar */}
          <div className={navBar["nav-list"]}>
            <Image
              src={grammarIcon}
              alt="Grammar icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Grammar</p>
              </Link>
            </li>
          </div>

          {/* Listening */}
          <div className={navBar["nav-list"]}>
            <Image
              src={listeningIcon}
              alt="Listening icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Listening</p>
              </Link>
            </li>
          </div>

          {/* Reading */}
          <div className={navBar["nav-list"]}>
            <Image
              src={readingIcon}
              alt="Reading icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Reading</p>
              </Link>
            </li>
          </div>

          {/* Speaking */}
          <div className={navBar["nav-list"]}>
            <Image
              src={speakingIcon}
              alt="Speaking icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Speaking</p>
              </Link>
            </li>
          </div>

          {/* Pronunciation */}
          <div className={navBar["nav-list"]}>
            <Image
              src={pronunciationIcon}
              alt="Pronunciation"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Pronunciation</p>
              </Link>
            </li>
          </div>

          {/* Vocabulary */}
          <div className={navBar["nav-list"]}>
            <Image
              src={bookDictionaryIcon}
              alt="Book with letter A"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Vocabulary</p>
              </Link>
            </li>
          </div>

          {/* Expressions */}
          <div className={navBar["nav-list"]}>
            <Image
              src={bookDictionaryIcon}
              alt="Book with letter A"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Expressions / Idioms</p>
              </Link>
            </li>
          </div>

          <br />

          <p>
            <b>SPECIFIC PURPOSES</b>
          </p>
          <br />

          {/* Business */}
          <div className={navBar["nav-list"]}>
            <Image
              src={businessIcon}
              alt="Suitcase icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Business</p>
              </Link>
            </li>
          </div>

          {/* Coding */}
          <div className={navBar["nav-list"]}>
            <Image
              src={codingIcon}
              alt="Computer icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Coding</p>
              </Link>
            </li>
          </div>

          {/* Cooking */}
          <div className={navBar["nav-list"]}>
            <Image
              src={cookingIcon}
              alt="Utensils icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Cooking</p>
              </Link>
            </li>
          </div>

          {/* Dentistry */}
          <div className={navBar["nav-list"]}>
            <Image
              src={dentistryIcon}
              alt="Dentistry icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Dentistry</p>
              </Link>
            </li>
          </div>

          {/* Job Interviews */}
          <div className={navBar["nav-list"]}>
            <Image
              src={jobInterviewIcon}
              alt="Job interview icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Job Interviews</p>
              </Link>
            </li>
          </div>

          {/* Medicine */}
          <div className={navBar["nav-list"]}>
            <Image
              src={medicineIcon}
              alt="Medical icon"
              className="icon-general"
            />
            <li>
              <Link href="/specific-purposes/medicine" className={navBar["nav-bar-link"]}>
                <p>Medicine</p>
              </Link>
            </li>
          </div>

          {/* Exams */}
          <div className={navBar["nav-list"]}>
            <Image
              src={examsIcon}
              alt="Book icon"
              className="icon-general"
            />
            <li>
              <Link href="#" className={navBar["nav-bar-link"]}>
                <p>Exams</p>
              </Link>
            </li>
          </div>
          <br />

          {/* Drafts */}
          <Link href="/drafts">
            <p>Mock</p>
          </Link>
        </div>
      </ul>
    </nav>
  );
};
