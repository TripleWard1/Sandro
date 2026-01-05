'use client';

import React, { useEffect, useState } from 'react';

const UI = {
  colors: {
    accent: '#FF4655',
    epic: '#00ccff',
    rarityGradient: 'linear-gradient(135deg, #0051cc 0%, #001a40 100%)',
    igGradient: 'linear-gradient(135deg, #f97316 0%, #431407 100%)',
    glass: 'rgba(0, 0, 0, 0.4)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  font: '"Inter", "Burbank Big Condensed", sans-serif',
};

const PARCEIROS = [
  'https://i.imgur.com/tylLJLX.png',
  'https://i.imgur.com/5ye7rUb.png',
];

export default function FraggerEliteHUD() {
  const [mounted, setMounted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [showIG, setShowIG] = useState(false);

  useEffect(() => {
    setMounted(true);
    const pTimer = setInterval(
      () => setIdx((v) => (v + 1) % PARCEIROS.length),
      8000
    );
    const tTimer = setInterval(() => setShowIG((v) => !v), 10000);
    return () => {
      clearInterval(pTimer);
      clearInterval(tTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div style={s.screen}>
      {/* 1. LOGO HERO */}
      <div style={s.logoHero}>
        <div style={s.logoWrapper}>
          <img
            src="https://i.imgur.com/yeoKxVO.png"
            style={s.logoImg}
            alt="FS"
          />
          <div style={s.logoGlowEffect} />
        </div>
        <div style={s.logoTextGroup}>
          <h1 style={s.logoMain}>FRAGGER SANDRO</h1>
          <div style={s.liveStatus}>
            <div style={s.pulseDot} />
            <span style={s.statusText}>TRANSMISSÃO_ATIVA // 4K</span>
            <div style={s.energyLine} />
          </div>
          {/* DADO MINIMALISTA ADICIONADO */}
          <div style={s.subtleDedication}>COM PAI SANDRO</div>
        </div>
      </div>

      {/* 2. DOCK ESQUERDO */}
      <div style={s.leftDock}>
        <div style={s.socialContainer}>
          <div style={s.socialItem}>
            <div style={{ ...s.socialBar, background: '#9146FF' }} />
            <div style={s.socialContent}>
              <span style={s.socialLabel}>TWITCH.TV/fragger_sandropt</span>
              <div style={s.counterRow}>
                <div style={s.liveIcon}>AO VIVO</div>
                <span style={s.counterValue}></span>
              </div>
            </div>
          </div>
          <div style={s.socialItem}>
            <div style={{ ...s.socialBar, background: '#FF0000' }} />
            <div style={s.socialContent}>
              <span style={s.socialLabel}>YOUTUBE/Fragger_SandroPT</span>
              <div style={s.counterRow}>
                <div style={{ ...s.liveIcon, background: '#FF0000' }}>AO VIVO</div>
                <span style={s.counterValue}></span>
              </div>
            </div>
          </div>
        </div>

        <div style={s.partnerPremium}>
          <div style={s.partnerHeader}>PATROCÍNIO OFICIAL</div>
          <div style={s.partnerSlot}>
            <img src={PARCEIROS[idx]} style={s.partnerImg} alt="P" />
          </div>
        </div>
      </div>

      {/* 3. DOCK DIREITO */}
      <div style={s.rightDock}>
        <div style={s.premiumFrame}>
          <div
            style={{
              ...s.moduleBase,
              opacity: showIG ? 0 : 1,
              transform: showIG
                ? 'translateX(50px) skewX(-10deg) scale(0.8)'
                : 'translateX(0) skewX(0) scale(1)',
              background: UI.colors.rarityGradient,
              border: `1px solid ${UI.colors.epic}`,
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
            }}
          >
            <div style={s.moduleTag}>APOIA UM CRIADOR</div>
            <div style={s.vbuckRow}>
              <div style={s.vbuckHex}>V</div>
              <span style={s.codeTitle}>FRAGGER</span>
            </div>
            <div style={s.moduleFooter}>NA LOJA DE ITENS</div>
            <div style={s.shimmerSweep} />
          </div>

          <div
            style={{
              ...s.moduleBase,
              opacity: showIG ? 1 : 0,
              transform: showIG
                ? 'translateX(0) skewX(0) scale(1)'
                : 'translateX(50px) skewX(10deg) scale(0.8)',
              background: UI.colors.igGradient,
              border: `1px solid #f97316`,
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
            }}
          >
            <div style={{ ...s.moduleTag, color: '#f97316' }}>
              DESCONTOS IMEDIATOS
            </div>
            <img
              src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-instant-gaming.svg"
              style={s.igLogoFull}
              alt="IG"
            />
            <div style={s.moduleFooter}>USA O LINK NA DESCRIÇÃO</div>
            <div style={s.shimmerSweep} />
          </div>
        </div>
      </div>

      {/* 4. BARRA INFERIOR (CYBER-TECH) */}
      <div style={s.newTickerContainer}>
        <div style={s.cyberSlot}>
          <div style={s.cyberTag}>ÚLTIMO_RECRUTA</div>
          <div style={s.cyberValuePlaceholder}>---</div>
          <div style={s.cyberCorner} />
        </div>

        <div style={s.cyberDivider}>
          <div style={s.dividerDot} />
          <div style={s.dividerLine} />
          <div style={s.dividerDot} />
        </div>

        <div
          style={{ ...s.cyberSlot, borderTop: `2px solid ${UI.colors.epic}` }}
        >
          <div style={{ ...s.cyberTag, color: UI.colors.epic }}>
            MAIOR_DONATIVO
          </div>
          <div style={s.cyberValuePlaceholder}>---</div>
          <div
            style={{
              ...s.cyberCorner,
              borderColor: `transparent ${UI.colors.epic} ${UI.colors.epic} transparent`,
            }}
          />
        </div>

        <div style={s.cyberDivider}>
          <div style={s.dividerDot} />
          <div style={s.dividerLine} />
          <div style={s.dividerDot} />
        </div>

        <div style={s.cyberSlot}>
          <div style={s.cyberTag}>META_DA_MISSÃO</div>
          <div style={s.cyberValuePlaceholder}>---</div>
          <div style={s.cyberCorner} />
        </div>
      </div>

      <style>{`
        @keyframes sweep { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes flow { 0% { width: 0%; left: 0; } 50% { width: 100%; left: 0; } 100% { width: 0%; left: 100%; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      `}</style>
    </div>
  );
}

const s: { [key: string]: React.CSSProperties } = {
  screen: {
    width: '100vw',
    height: '100vh',
    background: 'transparent',
    color: '#FFF',
    fontFamily: UI.font,
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
  },
  logoHero: {
    position: 'absolute',
    top: '40px',
    left: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    animation: 'float 4s ease-in-out infinite',
  },
  logoImg: {
    height: '38px',
    filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))',
    zIndex: 2,
  },
  logoGlowEffect: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background:
      'radial-gradient(circle, rgba(255,70,85,0.4) 0%, transparent 70%)',
    animation: 'pulse 2s infinite',
  },
  logoTextGroup: { display: 'flex', flexDirection: 'column' },
  logoMain: {
    fontSize: '24px',
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: '2px',
    margin: 0,
  },
  liveStatus: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '4px',
  },
  pulseDot: {
    width: '6px',
    height: '6px',
    background: UI.colors.accent,
    borderRadius: '50%',
  },
  statusText: { fontSize: '10px', fontWeight: '800', opacity: 0.7 },
  energyLine: {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    height: '1px',
    background: UI.colors.accent,
    animation: 'flow 3s infinite',
  },
  subtleDedication: {
    fontSize: '9px',
    fontWeight: '700',
    opacity: 0.4,
    marginTop: '8px',
    letterSpacing: '1px',
    borderLeft: `2px solid ${UI.colors.accent}`,
    paddingLeft: '6px',
  },
  leftDock: {
    position: 'absolute',
    left: '50px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  socialContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
  socialItem: {
    display: 'flex',
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.05)',
    width: '240px',
  },
  socialBar: { width: '4px' },
  socialContent: { padding: '8px 15px', flex: 1 },
  socialLabel: {
    fontSize: '8px',
    fontWeight: '900',
    opacity: 0.4,
    letterSpacing: '1px',
  },
  counterRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '2px',
  },
  liveIcon: {
    fontSize: '8px',
    background: '#9146FF',
    padding: '1px 5px',
    borderRadius: '2px',
    fontWeight: '900',
  },
  counterValue: { fontSize: '18px', fontWeight: '900', fontStyle: 'italic' },
  partnerPremium: { width: '240px' },
  partnerHeader: {
    fontSize: '10px',
    fontWeight: '900',
    color: UI.colors.accent,
    marginBottom: '8px',
  },
  partnerSlot: {
    height: '50px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerImg: { maxHeight: '25px', maxWidth: '180px' },
  rightDock: {
    position: 'absolute',
    right: '50px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  premiumFrame: { position: 'relative', width: '260px', height: '120px' },
  moduleBase: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    overflow: 'hidden',
  },
  shimmerSweep: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '50%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'skewX(-20deg)',
    animation: 'sweep 4s infinite',
  },
  moduleTag: {
    fontSize: '10px',
    fontWeight: '900',
    letterSpacing: '2px',
    marginBottom: '5px',
  },
  vbuckHex: {
    width: '24px',
    height: '24px',
    background: '#FFF',
    color: '#000',
    borderRadius: '50%',
    fontWeight: '900',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeTitle: {
    fontSize: '36px',
    fontWeight: '900',
    fontStyle: 'italic',
    marginLeft: '10px',
  },
  vbuckRow: { display: 'flex', alignItems: 'center' },
  moduleFooter: { fontSize: '9px', opacity: 0.5, marginTop: '5px' },
  igLogoFull: { width: '150px' },
  newTickerContainer: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '40px',
  },
  cyberSlot: {
    position: 'relative',
    width: '200px',
    height: '45px',
    background: 'linear-gradient(to top, rgba(255,70,85,0.1), transparent)',
    borderTop: `2px solid ${UI.colors.accent}`,
    padding: '5px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%)',
  },
  cyberTag: {
    fontSize: '9px',
    fontWeight: '900',
    color: UI.colors.accent,
    letterSpacing: '1.5px',
    opacity: 0.9,
  },
  cyberValuePlaceholder: {
    fontSize: '18px',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFF',
    marginTop: '2px',
    opacity: 0.2,
  },
  cyberCorner: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '10px',
    height: '10px',
    borderStyle: 'solid',
    borderWidth: '0 0 2px 2px',
    borderColor: `transparent transparent ${UI.colors.accent} ${UI.colors.accent}`,
  },
  cyberDivider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    paddingBottom: '10px',
  },
  dividerDot: {
    width: '4px',
    height: '4px',
    background: '#FFF',
    transform: 'rotate(45deg)',
    opacity: 0.5,
  },
  dividerLine: {
    width: '1px',
    height: '20px',
    background: 'linear-gradient(to bottom, transparent, #FFF, transparent)',
    opacity: 0.2,
  },
};