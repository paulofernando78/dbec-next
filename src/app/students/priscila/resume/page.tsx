import { AudioPlayer } from "@/components/Audioplayer";
import { Card } from "@/components/Cards/Card";
import React from "react";

export default function PriscilaTanaca() {
  return (
    <div className="line-break">
      <Card bgColor="black" textColor="white">
        <p className="bold">RESUMÉ / CV</p>
      </Card>
      <Card bgColor="lightgray">
        <p className="bold">EXECUTIVE SUMMARY</p>
      </Card>
      <p>
        <span className="bold">
          I have over twenty years of experience across various
        </span>{" "}
        Legal subsystems with executive performance and expertise in Labor and
        Social Security, Union Relations, Compliance, Contracts, and LGPD in
        large multinational companies in the healthcare, consumer goods,
        chemical, agribusiness, among other sectors.
      </p>
      <p>
        <span className="bold">
          Additionally
        </span>{" "}
        , I have a solid academic background, <span className="bold">having served as a</span>{" "}
        Lecturer, Master Professor and Speaker in Specialization Courses on
        Social Security and Labor Law.
      </p>
      <p>
        <span className="bold">I have</span> solid leadership in managing challenging projects
        with strategic and preventive knowledge for legal and Compliance issues
        to mitigate legal and reputational risks. <span className="bold">I also have</span>{" "}
        experience in business restructuring, process management, implementation
        of labor policies, contracts, audits (due diligence) and internal
        investigations.
      </p>
      <p>
        <span className="bold">I've developed a</span> reputation for strategy and communication
        skills leading multidisciplinary projects, aiming to ensure normative
        compliance, mitigate labor/social security risks, and promote an ethical
        and transparent organizational culture, consistently demonstrating
        commitment to excellence and integrity in all activities.
      </p>
    </div>
  );
}
