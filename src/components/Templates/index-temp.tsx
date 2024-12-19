import { Ribbon } from "../Molecules/Ribbon";
import { Whiteboard } from "../Molecules/Whiteboard";
import { Lesson } from "./LessonData/Lesson";

    
export const DynamicRender = ( props ) => {

  return (
    <div>
      {props.components.map((component:any, index:number) => {
        switch (component.component) {
          case "Whiteboard":
            return <Whiteboard key={index} {...component.data} />;
          case "Lesson":
           return <Lesson key={index} lesson={component.data} />;
          default:
            return null;
        }
      })}
    </div>
  );
};