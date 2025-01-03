import React from 'react';

function MapLocation() {
  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto' }}>
      <iframe
        title="Ubicación - Transportes Fernández"
        // Armamos la URL manualmente con lat, lng, y un zoom alto (z=17 o 18).
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.2591705616403!2d-2.5895389538417457!3d39.27649388861484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6887c6bf44c6b1%3A0xbe2e2435eddf6f8c!2sTRANSPORTES%20FERN%C3%81NDEZ!5e0!3m2!1ses!2ses!4v1735929854759!5m2!1ses!2ses"
        width="100%"
        height="650"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapLocation;