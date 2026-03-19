export default function IcgLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      className={className}
    >
      <path
        d="M28 12 L38 22 Q44 28 38 34 L28 44 L18 34 Q12 28 18 22 Z"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M28 20 L34 26 Q38 30 34 34 L28 40 L22 34 Q18 30 22 26 Z"
        fill="url(#logoGrad)"
        opacity="0.4"
      />
      <circle cx="28" cy="30" r="3" fill="url(#logoGrad)" opacity="0.9" />
      <defs>
        <linearGradient
          id="logoGrad"
          x1="18"
          y1="12"
          x2="38"
          y2="44"
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
