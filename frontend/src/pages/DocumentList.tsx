import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DocumentList() {
  const API_BASE = 'http://localhost:3000/api';

  const [links, setLinks] = useState<{ [doc: string]: string }>({});
  const navigate = useNavigate();

  const documents = [
    '2024-Q3-Statement.pdf',
    '2023-Tax-Form-1099.pdf',
    '2025-Annual-Report.pdf',
  ];

  const generateLink = async (documentName: string) => {
    try {
      const res = await fetch(`${API_BASE}/generate-link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentName }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setLinks((prev) => ({ ...prev, [documentName]: data.link }));
    } catch (error) {
      console.error(error);
      alert('Error generating link');
    }
  };

  const handleClick = (link: string, documentName: string) => {
    const parts = link.split('/');
    const token = parts[parts.length - 1];
    navigate(`/docs/view/${token}`, { state: { documentName } });
  };

  return (
    <>
      <h1>Secure Link Generator</h1>
      <h2>Document List</h2>
      {documents.map((doc) => (
        <div key={doc} style={{ marginBottom: '1rem' }}>
          <span>
            <strong style={{ padding: '5px' }}>{doc}</strong>
            <button onClick={() => generateLink(doc)}>
              Generate Secure Link
            </button>
            {links[doc] && (
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(links[doc], doc);
                  }}
                >
                  {links[doc]}
                </a>
              </div>
            )}
          </span>
        </div>
      ))}
    </>
  );
}
