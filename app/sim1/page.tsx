"use client";

import React from "react";

const SimrtPage: React.FC = () => {
  return (
    <div className="container">
      <main>
        <h1 className="title">Simrt, You’re Absolutely Adorable! 🐾</h1>
        <p className="subtitle">
          You make the world brighter, cuter, and infinitely better. 🌸
        </p>

        <div className="content">
          <p>
            Hey Simrt! <br />
            This page is all about you—the cutest, most charming, and absolutely
            lovable person I know. 🥰
          </p>
          <p>
            Your kindness, warmth, and infectious laughter make every day
            special. Whether it&rsquo;s your thoughtful gestures or your
            delightful smile, you have a way of making life more magical. ✨
          </p>
          <p>
            Never forget how amazing you are and how much you mean to me.
            You&rsquo;re not just my best friend—you&rsquo;re the BEST friend
            anyone could ask for. 💕
          </p>
          <p>
            You are my sunshine on a cloudy day, my source of endless
            inspiration, and the person who makes everything better just by
            being there. 🌻
          </p>
          <div className="quote-box">
            <blockquote>
              &quot;A true friend like you is rare—a treasure beyond
              compare.&quot; 🌟
            </blockquote>
          </div>
          <p>
            Keep being the incredible, unique, and beautiful soul you are. You
            deserve the entire universe and then some! 🚀💖
          </p>
          <div className="special-section">
            <p>
              Simrt, you&rsquo;ve been a rockstar friend for such a long time,
              and this page is just a tiny token of how much you&rsquo;re
              cherished. 🌷
            </p>
            <p>
              Always remember: you are loved, you are valued, and you bring joy
              wherever you go. 🌈
            </p>
            <p>
              Here&rsquo;s to our endless memories, laughs, and everything that
              makes you the amazing person you are. 💫
            </p>
          </div>
        </div>

        <footer>
          <p>
            💌 To Simrt, with endless love and admiration. Always here for you!
            💕
          </p>
        </footer>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #ff7eb3, #ff758c);
          color: #2c3e50;
          font-family: "Poppins", sans-serif;
          text-align: center;
        }

        .title {
          font-size: 3.5rem;
          margin: 0.5em 0;
          color: #ff6f61;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .subtitle {
          font-size: 1.7rem;
          margin-bottom: 2em;
          color: #fff;
        }

        .content {
          background: rgba(255, 255, 255, 0.9);
          padding: 3em;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .content p {
          font-size: 1.3rem;
          margin: 1em 0;
          color: #2c3e50;
        }

        .quote-box {
          margin: 2em 0;
          padding: 1.5em;
          background: #ffe4e1;
          border-left: 5px solid #ff6f61;
          border-radius: 10px;
        }

        .quote-box blockquote {
          font-size: 1.5rem;
          color: #ff6f61;
          font-style: italic;
        }

        .special-section {
          margin-top: 2em;
          background: #fff0f5;
          padding: 2em;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .special-section p {
          font-size: 1.2rem;
          margin: 1em 0;
          color: #2c3e50;
        }

        footer {
          margin-top: 2.5em;
          font-size: 1.1rem;
          color: #ff6f61;
        }
      `}</style>
    </div>
  );
};

export default SimrtPage;
