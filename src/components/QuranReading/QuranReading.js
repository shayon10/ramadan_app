// src/components/QuranReading/QuranReading.js

import React, { useState, useEffect } from 'react';
import QuranPdf from '../../assets/pdfs/quran.pdf'; // Example path, replace with your actual file path

function QuranReading() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // Fetch additional data or perform setup as needed
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="quran-reading-container">
      <h2>Quran Reading</h2>
      <div className="pdf-container">
        <iframe
          title="quran-pdf"
          src={QuranPdf}
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

export default QuranReading;
