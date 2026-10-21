import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type IntroProps = {
  title: string;
  subtitle: string;
};

export const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12 } });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [20, 40], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barWidth = interpolate(frame, [10, 50], [0, 600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 110,
          fontWeight: 800,
          textAlign: "center",
          transform: `scale(${titleScale})`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: barWidth,
          height: 10,
          borderRadius: 5,
          background: "#f59e0b",
          margin: "40px 0",
        }}
      />
      <div
        style={{
          color: "#cbd5e1",
          fontSize: 50,
          textAlign: "center",
          padding: "0 80px",
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
