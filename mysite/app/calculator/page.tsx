"use client";
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function Home() {
  const [view, setView] = useState("");
  let value = 0;
  const handleClick = (but: string | number) => {
    console.log(but);
    if (but === '=') {
      try {
        value = eval(view);
        setView(value.toString());
      } catch (e) {
        setView("Error");
      }
      return;
    }
    setView(prevView => prevView + but.toString());
    

  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <div style={{ backgroundColor: blue[500], gridColumn: 'span 4', height: 50, color: "white", display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
        <h1 style={{ margin: 0 }}>{view}</h1>
          </div>
          {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '/', 0, '%', '='].map((but) => (
        <Button key={but} variant="contained" onClick={() => handleClick(but)}>
          {but}
        </Button>
          ))}
        </div>
      </div>
      </div>

    
  );
}