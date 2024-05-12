import { convertToComponent } from "@/utils/html";
import React, { use } from "react";

export default function page() {
  const data = use(
    fetch("http://localhost:3000/api/content/specific-purposes/cooking", {
      next: {
        revalidate: 1,
      },
    }).then((res) => res.json())
  );
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.map((d: any) => (
        <>
          <p>{convertToComponent(d.en)}</p>
          <p>{convertToComponent(d.pt)}</p>
        </>
      ))}
    </>
  );
}
