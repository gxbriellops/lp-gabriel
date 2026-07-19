"use client";

import { GrainGradient } from "@paper-design/shaders-react";
import styles from "./paper-design-shader-background.module.css";

export function GradientBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <span className={styles.mobileOrb} />
      <span className={styles.mobileOrbSecondary} />
      <GrainGradient
        className={styles.shader}
        style={{ height: "100%", width: "100%" }}
        colorBack="#f9f9f7"
        softness={0.82}
        intensity={0.4}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0.35}
        colors={["#054ffa", "#75a0ff", "#dfe8ff"]}
      />
    </div>
  );
}
