import React from "react";
import "./technicalWriting.css"
import buffer from "./Buffer Overflow Attacks.pdf"
import crc from "./CRC Cards Paper Summary.pdf"
import {Document, Page, pdfjs} from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Technicalwriting = () => {
    return(
        
        <div className="res">
            <h2 className="heading">Technical Writing</h2>
            {/* <Document
                file={buffer}
                onLoadError={console.error}
                style={{width: "100vw", height: "auto"}}
            >
                <Page pageIndex={0}/>
            </Document>
            <Document
                file={crc}
                onLoadError={console.error}
                style={{width: "100vw", height: "auto"}}
            >
                <Page pageIndex={0}/>
            </Document> */}
            <a href="https://drive.google.com/file/d/1hOSVO2mKmXuDOW753yE6F-P4XLR44gpX/view" target="_blank">Buffer Overflow Attacks</a>
            <a href="https://drive.google.com/file/d/1MuUlPsbO4mStJ8teKEWyYoF55rWHf1VI/view?usp=sharing" target="_blank">CRC Cards Paper</a>
        </div>
    )
}

export default Technicalwriting