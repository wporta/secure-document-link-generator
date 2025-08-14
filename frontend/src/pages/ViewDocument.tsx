import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../utils/index';

export default function ViewDocument() {
  const [docName, setDocName] = useState<string | null>(null);

  const navigate = useNavigate();

  const location = useLocation();
  const { token } = location.state || {};

  const getDocumentName = async () => {
    try {
      const res = await fetch(`${API_BASE}/docs/view/${token}`);

      if (!res.ok) {
        throw new Error(`Invalid or expired link`);
      }
      const data = await res.json();
      setDocName(data['documentName']);
    } catch (error) {
      console.error(error);
      alert('An error has ocurred.');
    }
  };

  useEffect(() => {
    getDocumentName();
  }, []);

  const text = docName
    ? `You are now securely viewing: ${docName}`
    : 'Invalid or expired link';

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h3>{text}</h3>
      <button onClick={handleClick}>Go back</button>
    </>
  );
}
