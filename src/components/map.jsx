import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.893522097153!2d92.71987522484577!3d23.75117613874748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snit%20mizoram!5e0!3m2!1sen!2sin!4v1715411926288!5m2!1sen!2sin"
        width="100%"
        height="270"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIT Mizoram Location"
      ></iframe>
    </div>
  );
};

export default Map;
