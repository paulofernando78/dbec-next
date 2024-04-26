import "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

import homeIcon from "/public/img/icon/home.png";

// Courses
import beginner from "/public/img/icon/beginner.png"
import elementary from "/public/img/icon/elementary.png"
import preIntermediate from "/public/img/icon/pre-intermediate.png"
import intermediate from "/public/img/icon/intermediate.png"
import upperIntermediate from "/public/img/icon/upper-intermediate.png"
import advanced from "/public/img/icon/advanced.png"

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
    <nav className="navBar">
      <ul>
        <div className="navList">
          <Image src={homeIcon} alt="Home" className="navBarIconSize" />
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
        <br />

        {/* Beginner */}
        <div className="navList">
          <Image src={beginner} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="#">
              <p>Beginner (A1)</p>
            </Link>
          </li>

          {/* Elementary */}
        </div>
        <div className="navList">
          <Image src={elementary} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="#">
              <p>Elementary (A2)</p>
            </Link>
          </li>
        </div>

        {/* Pre-Intermediate */}
        <div className="navList">
          <Image src={preIntermediate} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="/course/pre-intermediate">
              <p style={{ fontSize: "1.07rem" }}>Pre-Intermediate (A2-B1)</p>
            </Link>
          </li>
        </div>

        {/* Intermediate */}
        <div className="navList">
          <Image src={intermediate} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="#">
              <p>Intermediate (B1)</p>
            </Link>
          </li>
        </div>

        {/* Upper-Intermediate */}
        <div className="navList">
          <Image src={upperIntermediate} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="#">
              <p style={{ fontSize: "1.1rem" }}>Upper-Intermediate (B2)</p>
            </Link>
          </li>
        </div>

        {/* Advanced */}
        <div className="navList">
          <Image src={advanced} alt="Book" className="navBarIconSize" />
          <li>
            <Link href="#">
              <p>Advanced (C1)</p>
            </Link>
          </li>
        </div>
        <br />

        <div>
          <p>
            <b>EXTRA</b>
          </p>
          <br />

          {/* Grammar */}
          <div className="navList">
            <Image
              src={grammarIcon}
              alt="Grammar icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Grammar</p>
              </Link>
            </li>
          </div>

          {/* Listening */}
          <div className="navList">
            <Image
              src={listeningIcon}
              alt="Listening icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Listening</p>
              </Link>
            </li>
          </div>

          {/* Reading */}
          <div className="navList">
            <Image
              src={readingIcon}
              alt="Reading icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Reading</p>
              </Link>
            </li>
          </div>

          {/* Speaking */}
          <div className="navList">
            <Image
              src={speakingIcon}
              alt="Speaking icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Speaking</p>
              </Link>
            </li>
          </div>

          {/* Pronunciation */}
          <div className="navList">
            <Image
              src={pronunciationIcon}
              alt="Pronunciation"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Pronunciation</p>
              </Link>
            </li>
          </div>

          {/* Vocabulary */}
          <div className="navList">
            <Image
              src={bookDictionaryIcon}
              alt="Book with letter A"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Vocabulary</p>
              </Link>
            </li>
          </div>

          {/* Expressions */}
          <div className="navList">
            <Image
              src={bookDictionaryIcon}
              alt="Book with letter A"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
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
          <div className="navList">
            <Image
              src={businessIcon}
              alt="Suitcase icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Business</p>
              </Link>
            </li>
          </div>

          {/* Coding */}
          <div className="navList">
            <Image
              src={codingIcon}
              alt="Computer icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Coding</p>
              </Link>
            </li>
          </div>

          {/* Cooking */}
          <div className="navList">
            <Image
              src={cookingIcon}
              alt="Utensils icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Cooking</p>
              </Link>
            </li>
          </div>

          {/* Dentistry */}
          <div className="navList">
            <Image
              src={dentistryIcon}
              alt="Dentistry icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Dentistry</p>
              </Link>
            </li>
          </div>

          {/* Job Interviews */}
          <div className="navList">
            <Image
              src={jobInterviewIcon}
              alt="Job interview icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Job Interviews</p>
              </Link>
            </li>
          </div>

          {/* Medicine */}
          <div className="navList">
            <Image
              src={medicineIcon}
              alt="Medical icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
                <p>Medicine</p>
              </Link>
            </li>
          </div>

          {/* Exams */}
          <div className="navList">
            <Image
              src={examsIcon}
              alt="Book icon"
              className="navBarIconSize"
            />
            <li>
              <Link href="#">
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