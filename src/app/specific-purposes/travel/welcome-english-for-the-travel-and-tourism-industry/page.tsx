import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Different kinds of people",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-1",
            linkLabel: "Unit 1 • Working in travel and tourism",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-2",
            linkLabel: "Unit 2 • Being friendly and helpful",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-3",
            linkLabel: "Unit 3 • When in Rome",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-4",
            linkLabel: "Unit 4 • Dealing with en enquiries",
          }
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "International travel",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-5",
            linkLabel: "Unit 5 • Different ways of travelling",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-6",
            linkLabel: "Unit 6 • Asking questions",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-7",
            linkLabel: "Unit 7 • Taking a booking",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-8",
            linkLabel: "Unit 8 • The best way to get there...",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-9",
            linkLabel: "Unit 9 • Around thw world",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-10",
            linkLabel: "Unit 10 • Organising a trip",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Phone calls",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-11",
            linkLabel: "Unit 11 • Using the phone",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-12",
            linkLabel: "Unit 12 • How may I helo you?",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-13",
            linkLabel: "Unit 13 • Answering enquiries",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-14",
            linkLabel: "Unit 14 • Taking messages",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Food and drinks",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-15",
            linkLabel: "15 • Good morning!",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-16",
            linkLabel: "Unit 16 • Explaing dishes",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-17",
            linkLabel: "Unit 17 • May I take your order?",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-18",
            linkLabel: "Unit 18 • Drinks, snacks and desserts",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-19",
            linkLabel: "Unit 19 • Eating habits",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-20",
            linkLabel: "Unit 20 • Welcome to our restaurant",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Letters and faxes",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-21",
            linkLabel: "Unit 21 • Responding to enquiries",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-22",
            linkLabel: "Unit 22 • Confirming reservations",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-23",
            linkLabel: "Unit 23 • Avoiding mistakes",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-24",
            linkLabel: "Unit 24 • We are very sorry",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Accomodation",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-25",
            linkLabel: "Unit 25 • Reservations",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-26",
            linkLabel: "Unit 26 • Checking in",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-27",
            linkLabel: "Unit 27 • Facilities: Enjoy your stay!",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-28",
            linkLabel: "Unit 28 • Giving information",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-29",
            linkLabel: "Unit 29 • The best hotel for you",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-30",
            linkLabel: "Unit 30 • The perfect hotel",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Money",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-31",
            linkLabel: "Unit 31 • How would you like to pay?",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-32",
            linkLabel: "Unit 32 • Chaning money",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-33",
            linkLabel: "Unit 33 • Explaing the bill",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-34",
            linkLabel: "Unit 34 • Is service included?",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Travelling around.",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-35",
            linkLabel: "Unit 35 • To and from the airport",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-36",
            linkLabel: "Unit 36 • Local knowledge",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-37",
            linkLabel: "Unit 37 • Offering and requesting",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-38",
            linkLabel: "Unit 38 • Car rental",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-39",
            linkLabel: "Unit 39 • Motoring",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-40",
            linkLabel: "Unit 40 • The best way to get there",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Problems",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-41",
            linkLabel: "Unit 41 • Is there anythyinh I can do?",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-42",
            linkLabel: "Unit 42 • Dealing with complaints",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-43",
            linkLabel: "Unit 43 • Better safe than sorry",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-44",
            linkLabel: "Unit 44 • Difficult customers?",
          },
        ],
      },
      {
        bgColor: "black",
        textColor: "white",
        label: "Attractions and activities",
        contents: [
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-45",
            linkLabel: "Unit 45 • Seeing the sights",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-46",
            linkLabel: "Unit 46 • Making suggestions and giving advice",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-47",
            linkLabel: "Unit 47 • Sun, sea and sand?",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-48",
            linkLabel: "Unit 48 • History and folklore",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-49",
            linkLabel: "Unit 49 • A nice day out",
          },
          {
            link: "/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry/Unit-50 ",
            linkLabel: "Unit 50 • The future of tourism",
          },
        ],
      },
    ],
  },
];

export default function Travel() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Travel" descriptions={["Welcome - English for the travel and industry (Cambridge)"]}/>
      <div className="line-break">
        <ContentCard contents={contents} />
        <p>Communication activites</p>
      </div>
    </>
  );
}
