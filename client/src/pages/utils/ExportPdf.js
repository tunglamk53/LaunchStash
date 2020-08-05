import React from 'react'
import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server";

const ExportPdf = (item) => {
    
    const Print = () => (
      <div>
        <p>CSIS 4495 - Applied Research Project</p>
        <br/>
        <br/>
        <br/>

        <h1><i>Checklist: {item.name}</i></h1>
        <br/>
        <h2>Pre-Launch</h2>
        <ul>
          {item.step1.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        <h2>Beta Access</h2>
        <ul>
          {item.step2.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        <h2>Launch</h2>
        <ul>
          {item.step3.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        <h2>After Launch</h2>
        <ul>
          {item.step4.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

      </div>
    )

    const string = renderToString(<Print />);
    const pdf = new jsPDF();
    pdf.fromHTML(string);
    pdf.save("checklist-pdf");

  }

  export default ExportPdf