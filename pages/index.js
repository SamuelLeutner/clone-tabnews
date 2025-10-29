import { useState } from 'react';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #fce7f3 0%, #e9d5ff 50%, #dbeafe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .content {
          max-width: 42rem;
          width: 100%;
        }

        .initial-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .sparkles-top {
          display: flex;
          gap: 1rem;
        }

        .sparkle {
          width: 2rem;
          height: 2rem;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .heart-button {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s ease;
          width: 16rem;
          height: 16rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heart-button:hover {
          transform: scale(1.15);
        }

        .heart-button:active {
          transform: scale(0.9);
        }

        .heart-button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(244, 114, 182, 0.3);
        }

        .heart-main {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15));
          transition: all 0.3s ease;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .heart-button:hover .heart-main {
          filter: drop-shadow(0 25px 30px rgba(219, 39, 119, 0.4));
        }

        .heart-ping {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heart-ping svg {
          width: 100%;
          height: 100%;
        }

        .click-text {
          font-size: 1.125rem;
          color: #4b5563;
          font-weight: 500;
          animation: bounce 1s infinite;
        }

        .message-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          padding: 2rem;
          text-align: center;
          animation: fadeIn 0.6s ease-out;
        }

        .sparkles-header {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .sparkle-small {
          width: 2rem;
          height: 2rem;
        }

        .heart-small {
          width: 2.5rem;
          height: 2.5rem;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #db2777, #9333ea);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 2rem;
        }

        .message-text {
          font-size: 1.25rem;
          color: #374151;
          line-height: 1.75;
          margin-bottom: 2rem;
          padding: 0 0.5rem;
        }

        .hearts-footer {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding-top: 1.5rem;
        }

        .heart-footer {
          width: 1.5rem;
          height: 1.5rem;
          animation: bounce 1s infinite;
        }

        .heart-footer:nth-child(1) { animation-delay: 0s; }
        .heart-footer:nth-child(2) { animation-delay: 0.1s; }
        .heart-footer:nth-child(3) { animation-delay: 0.2s; }
        .heart-footer:nth-child(4) { animation-delay: 0.3s; }
        .heart-footer:nth-child(5) { animation-delay: 0.4s; }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.08);
          }
          50% {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (min-width: 640px) {
          .sparkle {
            width: 2.5rem;
            height: 2.5rem;
          }

          .heart-button {
            width: 20rem;
            height: 20rem;
          }

          .click-text {
            font-size: 1.25rem;
          }

          .message-card {
            padding: 3rem;
          }

          .title {
            font-size: 3rem;
          }

          .message-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <main className="container">
        <div className="content">
          {!showMessage ? (
            <div className="initial-screen">
              <div className="sparkles-top">
                <svg className="sparkle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1.5">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />
                  <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
                </svg>
                <svg className="sparkle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1.5">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />
                  <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
                </svg>
              </div>

              <button
                onClick={() => setShowMessage(true)}
                className="heart-button"
                aria-label="Clique no coração"
              >
                <svg className="heart-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
                <div className="heart-ping">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f9a8d4" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </div>
              </button>

              <p className="click-text">Clique no coração</p>
            </div>
          ) : (
            <div className="message-card">
              <div className="sparkles-header">
                <svg className="sparkle-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1.5">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />
                  <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
                </svg>
                <svg className="heart-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
                <svg className="sparkle-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1.5">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />
                  <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
                </svg>
              </div>

              <h1 className="title">Oi mãe!</h1>

              <p className="message-text">
                Feliz aniversário, mãe! Você é a pessoa mais importante da minha vida. Obrigado por todo amor, carinho e dedicação. Que seu dia seja repleto de alegria e momentos especiais. Te amo infinitamente!
              </p>

              <div className="hearts-footer">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="heart-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}