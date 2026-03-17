export default function IcgLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      className={className}
    >
      <path
        d="M28 6 L38 16 Q44 22 38 28 L28 38 L18 28 Q12 22 18 16 Z"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M28 14 L34 20 Q38 24 34 28 L28 34 L22 28 Q18 24 22 20 Z"
        fill="url(#logoGrad)"
        opacity="0.4"
      />
      <circle cx="28" cy="24" r="3" fill="url(#logoGrad)" opacity="0.9" />
      <defs>
        <linearGradient
          id="logoGrad"
          x1="18"
          y1="6"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--gold-100)" />
          <stop offset="50%" stopColor="var(--gold-200)" />
          <stop offset="100%" stopColor="var(--gold-400)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
