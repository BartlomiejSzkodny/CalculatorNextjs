"use client";
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (number: number) => {
    console.log(`Button ${number} clicked`);
    // Add your specific logic for each button here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button key={number} variant="contained" onClick={() => handleClick(number)}>
            {number}
          </Button>
        ))}
      </div>
    </div>
  );
}