export interface TextData {
  title: string;
  subTitle: string;
  descriptions: string[];
}

export const fetchTextData = (): Promise<TextData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Courses",
          subTitle: "Beginner",
          descriptions: ["43 lessons"],
        },
        {
          title: "Courses",
          subTitle: "Beginner",
          descriptions: ["Lesson 2", "Flipped What's your name? (Cycle 1)"],
        },
        {
          title: "Courses",
          subTitle: "Beginner",
          descriptions: ["Lesson 3", "Flipped What's your name? (Cycle 2)"],
        },
      ]);
    }, 1000);
  });
};
