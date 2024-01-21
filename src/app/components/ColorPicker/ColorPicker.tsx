import React from "react";
import styles from "./styles.module.scss";
import { Colors } from "@/app/enums/colors";

interface propsType {
  changeColor: (color: Colors) => void;
}

export default function ColorPicker(props: propsType) {
  const { changeColor } = props;

  return (
    <ul className={styles.container}>
      {Object.values(Colors).map((color, index) => {
        let style;
        if (color === Colors.WHITE) {
          style = {
            backgroundColor: color,
            border: "1px solid lightgrey",
          };
        } else {
          style = {
            backgroundColor: color,
          };
        }

        return <li key={index} value={color} style={style} onClick={() => changeColor(color)}></li>;
      })}
    </ul>
  );
}
