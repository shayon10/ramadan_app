// src/components/HadithTips/HadithTips.js

import React, { useState, useEffect } from 'react';
import HadithPdf from '../../assets/pdfs/hadith.pdf'; // Example path, replace with your actual file path

function HadithTips() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // Fetch additional data or perform setup as needed
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="hadith-tips-container">
      <h2>Hadith Tips</h2>
      <div className="pdf-container">
        <iframe
          title="hadith-pdf"
          src={HadithPdf}
          width="100%"
          height="600"
          frameBorder="0"
        />
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default HadithTips;
