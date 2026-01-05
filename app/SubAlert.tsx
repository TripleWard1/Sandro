'use client';
import React from 'react';

const UI = {
  colors: { accent: '#FF4655', glass: 'rgba(0, 0, 0, 0.9)' },
  font: '"Inter", "Burbank Big Condensed", sans-serif',
};

export default function SubAlert({ username = "NOVO_RECRUTA", months = 1 }) {
  return (
    <div style={s.alertContainer}>
      <div style={s.scannerLine} />
      <div style={s.hexIcon}>
        <span style={s.hexText}>FS</span>
      </div>
      <div style={s.textContent}>
        <div style={s.statusHeader}>SISTEMA_RECRUTAMENTO_ATIVO</div>
        <h2 style={s.username}>{username}</h2>
        <div style={s.metaData}>
          <span style={{color: UI.colors.accent}}>NOVO RECRUTA</span> | {months} MÊS/MESES
        </div>
      </div>
      <style>{`
        @keyframes alertIn {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scan { 0% { left: -100%; } 100% { left: 100%; } }
      `}</style>
    </div>
  );
}

const s: { [key: string]: React.CSSProperties } = {
  alertContainer: {
    position: 'relative',
    width: '500px',
    background: UI.colors.glass,
    borderLeft: `5px solid ${UI.colors.accent}`,
    display: 'flex',
    padding: '25px',
    fontFamily: UI.font,
    animation: 'alertIn 0.5s ease-out forwards',
    overflow: 'hidden',
    color: 'white',
    textTransform: 'uppercase',
  },
  scannerLine: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,70,85,0.1), transparent)',
    animation: 'scan 2s infinite linear',
  },
  hexIcon: {
    width: '60px',
    height: '60px',
    background: UI.colors.accent,
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    color: 'black',
    fontWeight: '900',
  },
  hexText: { fontSize: '22px' },
  textContent: { display: 'flex', flexDirection: 'column' },
  statusHeader: { fontSize: '10px', color: UI.colors.accent, fontWeight: '900' },
  username: { fontSize: '32px', margin: '5px 0', fontWeight: '900', fontStyle: 'italic' },
  metaData: { fontSize: '12px', opacity: 0.8 },
};