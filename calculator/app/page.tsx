"use client";
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (number: string | number) => {
    console.log(`Button ${number} clicked`);
    // Add your specific logic for each button here
  };

  return (
    <div>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      <div style={{backgroundColor:blue[500], gridColumn: 'span 4',height:50}}></div>
        {[1, 2, 3,'+', 4, 5, 6,'-', 7, 8, 9, '*','/','%'].map((number) => (
          <Button key={number} variant="contained" onClick={() => handleClick(number)}>
            {number}
          </Button>
        ))}
      </div>
    </div>
    </div>
    
  );
}