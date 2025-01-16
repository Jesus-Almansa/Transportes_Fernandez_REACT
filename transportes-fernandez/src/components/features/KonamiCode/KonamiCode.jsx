import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KonamiCode = () => {
  const navigate = useNavigate(); // React Router hook para redirigir
  const konamiSequence = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let userInput = []; // Almacena las teclas presionadas por el usuario

  useEffect(() => {
    const handleKeyDown = (event) => {
      userInput.push(event.key);
      userInput = userInput.slice(-konamiSequence.length); // Limita el tamaño del array

      // Verifica si la secuencia coincide
      if (JSON.stringify(userInput) === JSON.stringify(konamiSequence)) {
        console.log('¡Código Konami detectado!');
        navigate('/konami'); // Redirige al endpoint secreto
      }
    };

    // Escucha eventos de teclado
    window.addEventListener('keydown', handleKeyDown);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null; // Este componente no tiene salida visual
};

export default KonamiCode;