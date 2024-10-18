import "./Button.css";
import { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    const fetchHackathonData = async () => {
      try {
        const response = await fetch('https://api.devfolio.co/api/hackathons/version-beta-5-15a3', {
          mode: 'no-cors',  
        });
        console.log(response);  
      } catch (error) {
        console.error('Error fetching hackathon data:', error);
      }
    };
    fetchHackathonData();
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="apply-button" 
      data-hackathon-slug="version-beta-5-15a3" 
      data-button-theme="light"
    ></div>
  );
};

export default Button;
