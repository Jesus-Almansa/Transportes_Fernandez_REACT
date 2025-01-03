import React from 'react';

function MapLocation() {
  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto' }}>
      <iframe
        title="Ubicación - Transportes Fernández"
        // Armamos la URL manualmente con lat, lng, y un zoom alto (z=17 o 18).
        src="https://maps.google.com/maps?q=39.276357,-2.589340&z=18&output=embed"
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
