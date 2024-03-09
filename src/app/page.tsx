"use client";
import React, { useState } from 'react';
import './gugu.css';

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
        <img className="user-photo" src="/gugu.png" alt="Foto do gugu" />
      </header>
      <main>
        <section className="tweetar">
          <form onSubmit={handleGugu} className="tweetar-form">
            <img className="user-photo" src="/gugu.png" alt="Foto do gugu" />
            <input className="tweetar-input" type="text" placeholder="Gugu?" value={newGugu} onChange={handleInputChange} onKeyDown={handleKeyDown} />
            <button className="tweetar-button" onClick={handleGugu} disabled={newGugu !== gugu}>Gugu</button>
          </form>
        </section>
        <section className="feed">
          <div>
            <h2>Feed de Gugu</h2>
            {gugus.map((gugu, index) => (
              <div className="tweet" key={index}>
                <img className="user-photo" src="/gugu.png" alt="Foto do gugu" />
                <div>
                  <p>@Gugu</p>
                  <p>{gugu}</p>
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
