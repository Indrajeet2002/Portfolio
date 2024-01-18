import React from "react";
import "./resume.css"
//import resume from "./Resume New.pdf"
import {pdfjs} from "react-pdf"
//import {Document} from "react-pdf"
//import {Page} from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
    return(
        <div className="res">
            {/* <h2 className="heading">Resume</h2>
            <Document
                file={resume}
                onLoadError={console.error}
                style={{width: "100vw", height: "auto"}}
            >
                <Page pageIndex={0}/>
            </Document> */}
            <a href="https://drive.google.com/file/d/1CPqUU96kMNw5wN-8wVw0zpTZGO6ZpNFQ/view" className="res-format" target="_blank" rel="noreferrer">Resume</a>
        </div>
    )
}

export default Resume