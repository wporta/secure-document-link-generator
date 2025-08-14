import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ViewDocument() {
  const navigate = useNavigate();

  const location = useLocation();
  const { documentName } = location.state || {};

  const text = documentName
    ? `You are now securely viewing: ${documentName}`
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
