'use client';

import React, { useEffect, useState } from 'react';

// Design System do Fragger Sandro
const UI = {
  colors: {
    accent: '#FF4655',
    glass: 'rgba(0, 0, 0, 0.9)',
  },
  font: '"Inter", "Burbank Big Condensed", sans-serif',
};

export default function SubAlertPage() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ username: "NOVO_RECRUTA", months: 1 });

  // No OBS, o alerta dispara sempre que a fonte é carregada ou atualizada
  useEffect(() => {
    // Podes testar mudando estes valores
    triggerAlert("RECRUTA_ELITE", 1);
  }, []);

  const triggerAlert = (user: string, m: number) => {
    setData({ username: user, months: m });
    setActive(true);
    // O alerta desaparece após 8 segundos
    setTimeout(() => setActive(false), 8000);
  };

  return (
    <main style={s.canvas}>
      {active && (
        <div style={s.alertBox}>
          {/* EFEITO DE SCANNER */}
          <div style={s.scanner} />

          {/* HEXAGONO FS */}
          <div style={s.hexContainer}>
            <div style={s.hex}>
              <span style={s.hexText}>FS</span>
            </div>
          </div>

          {/* TEXTO DO ALERTA */}
          <div style={s.textWrapper}>
            <div style={s.header}>
              <div style={s.dot} />
              SISTEMA_DE_RECRUTAMENTO
            </div>
            <h1 style={s.username}>{data.username}</h1>
            <div style={s.footer}>
              NOVA SUBS_CONFIRMADA // <span style={{ color: UI.colors.accent }}>{data.months} MÊS/MESES</span>
            </div>
          </div>

          {/* DECORAÇÃO CYBER */}
          <div style={s.cornerDecoration} />
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          0% { transform: translateX(-100px) skewX(-10deg); opacity: 0; }
          100% { transform: translateX(0) skewX(0); opacity: 1; }
        }
        @keyframes scanLine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </main>
  );
}

const s: { [key: string]: React.CSSProperties } = {
  canvas: {
    width: '100vw',
    height: '100vh',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  alertBox: {
    position: 'relative',
    width: '500px',
    background: UI.colors.glass,
    borderLeft: `5px solid ${UI.colors.accent}`,
    padding: '25px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: UI.font,
    textTransform: 'uppercase',
    color: 'white',
    animation: 'slideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
  },
  scanner: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,70,85,0.1), transparent)',
    animation: 'scanLine 2.5s infinite linear',
  },
  hexContainer: {
    marginRight: '20px',
  },
  hex: {
    width: '60px',
    height: '60px',
    background: UI.colors.accent,
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexText: {
    color: 'black',
    fontWeight: '900',
    fontSize: '22px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
  },
  header: {
    fontSize: '10px',
    color: UI.colors.accent,
    fontWeight: '900',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  dot: {
    width: '6px',
    height: '6px',
    background: UI.colors.accent,
    borderRadius: '50%',
  },
  username: {
    fontSize: '36px',
    fontWeight: '900',
    fontStyle: 'italic',
    margin: '4px 0',
    letterSpacing: '-1px',
  },
  footer: {
    fontSize: '11px',
    opacity: 0.6,
    fontWeight: '700',
  },
  cornerDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '40px',
    height: '4px',
    background: UI.colors.accent,
  }
};