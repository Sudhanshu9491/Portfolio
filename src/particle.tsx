import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "./Particles.css";

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: -1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 70,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#e38542",
              },
              links: {
                color: "#db4f72",
                distance: 250,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 700,
                },
                value: 110,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}