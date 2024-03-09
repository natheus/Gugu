"use client";
import React, { useState } from 'react';
import './gugu.css';

//use client
const Home = () => {
  const [gugus, setGugus] = useState<string[]>([]);
  const [newGugu, setNewGugu] = useState('');
  const gugu = 'Gugu';

  const handleGugu = () => {
    setGugus([...gugus, newGugu]);
    setNewGugu('');
  };

  const handleInputChange = (e: { target: { value: string; }; }) => {
    const userInput = e.target.value;
    if (userInput.length <= gugu.length) {
      const newGuguValue = gugu.slice(0, userInput.length);
      setNewGugu(newGuguValue);
    }
  };

  const handleKeyDown = (e: { key: any; }) => {
    if (e.key === 'Enter' && newGugu === gugu) {
      handleGugu();
    }
  };

  return (
    <div className="container">
      <header>
        <img src="/gugu.png" alt="Foto do gugu" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
      </header>
      <main>
        <section className="tweetar" style={{ alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
          <form onSubmit={handleGugu} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/gugu.png" alt="Foto do gugu" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <input type="text" placeholder="Gugu?" value={newGugu} onChange={handleInputChange} onKeyDown={handleKeyDown} style={{ flex: 1, marginRight: '10px' }} />
            <button onClick={handleGugu} disabled={newGugu !== gugu} style={{ padding: '10px 20px', backgroundColor: newGugu !== gugu ? 'gray' : 'blue' }}>Gugu</button>
          </form>
        </section>
        <section className="feed">
          <div>
            <h2>Feed de Gugu</h2>
            {gugus.map((gugu, index) => (
              <div className="tweet" key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <img src="/gugu.png" alt="Foto do gugu" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <div>
                  <p style={{ margin: 0 }}>@Gugu</p>
                  <p style={{ marginTop: '4px' }}>{gugu}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
