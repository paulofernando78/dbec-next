import { Whiteboard } from "@/components";
import { Iframe } from "@/components/index";
import React from "react";

export default function Students() {
  return (
    <div>
      <Whiteboard title="Students Dashboard" />
      <Iframe src="https://docs.google.com/document/d/1y1UNSOv37eaWUiCkcheYHykO5MQTIr4vXZ0ripN7lG0/edit?usp=sharing" />
    </div>
  );
}
