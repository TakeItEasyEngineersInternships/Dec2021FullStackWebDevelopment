import React, { useRef } from "react";

import html2canvas from "html2canvas";
import "./sems.css";
import {calculateSgpa} from "../../GradePointCalc";
import TextField from "@mui/material/TextField";
import { jsPDF } from "jspdf";
function FirstSemPhy() {
  const [sub1, setSub1] = React.useState();
  const [sub2, setSub2] = React.useState();
  const [sub3, setSub3] = React.useState();
  const [sub4, setSub4] = React.useState();
  const [sub5, setSub5] = React.useState();
  const [sub6, setSub6] = React.useState();
  const [sub7, setSub7] = React.useState();
  const [sub8, setSub8] = React.useState();
  const [ans, setAns] = React.useState();

  const calc = () => {
    setAns(
      calculateSgpa(
        sub1,
        4,
        sub2,
        4,
        sub3,
        3,
        sub4,
        3,
        sub5,
        3,
        sub6,
        1,
        sub7,
        1,
        sub8,
        1
      )
    );
  };
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1080, 1920],
      });
      pdf.addImage(imgData, "JPEG", 1, 1);
      pdf.save("Results.pdf");
    });
  };

  return (
    <div ref={inputRef} className="cnt2 ">
      <h1>1st & 2nd Semister Physics Cycle</h1>

      <div className="txtFld">
        <TextField
          id="outlined-basic"
          label="18MAT11/21"
          variant="outlined"
          value={sub1}
          onChange={(e) => setSub1(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18PHY12/22"
          variant="outlined"
          value={sub2}
          onChange={(e) => setSub2(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18ELE13/23"
          variant="outlined"
          value={sub3}
          onChange={(e) => setSub3(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18CIV14/24"
          variant="outlined"
          value={sub4}
          onChange={(e) => setSub4(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18EGDL15/25"
          variant="outlined"
          value={sub5}
          onChange={(e) => setSub5(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18PHYL16/26"
          variant="outlined"
          value={sub6}
          onChange={(e) => setSub6(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18ELEL17/27"
          variant="outlined"
          value={sub7}
          onChange={(e) => setSub7(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="18EGH18/28(ENGLISH)"
          variant="outlined"
          value={sub8}
          onChange={(e) => setSub8(e.target.value)}
        />

        <button onClick={calc} className="css-button-rounded--rose">
          Calculate SGPA
        </button>
        <button onClick={printDocument} className="css-button-rounded--rose">
          Download results
        </button>
      </div>
      {ans ? (
        <div className="result">
          <h2>SGPA:&nbsp;&nbsp;{ans.toFixed(2)}</h2>
          <h2>Percentage:&nbsp;&nbsp;{ans ? ((ans - 0.75) * 10).toFixed(2) : 0}%</h2>
        </div>
      ) : (
        <div className="result"></div>
      )}
    </div>
  );
}

export default FirstSemPhy;
