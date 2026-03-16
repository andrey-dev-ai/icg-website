"use client";

interface DimensionLineProps {
  label?: string;
  className?: string;
  direction?: "horizontal" | "vertical";
  animated?: boolean;
}

export function DimensionLine({
  label,
  className = "",
  direction = "horizontal",
  animated = false,
}: DimensionLineProps) {
  const serifSize = 8;

  if (direction === "vertical") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <svg width="1" height="100%" className="min-h-16">
          <line
            x1="0.5"
            y1={serifSize}
            x2="0.5"
            y2="100%"
            stroke="var(--line-color)"
            strokeWidth="1"
            className={
              animated ? "animate-[drawLineHorizontal_1s_var(--ease-heavy)_forwards]" : ""
            }
          />
          {/* Top serif */}
          <line
            x1={-serifSize / 2}
            y1={serifSize}
            x2={serifSize / 2 + 1}
            y2={serifSize}
            stroke="var(--line-color)"
            strokeWidth="1"
          />
        </svg>
        {label && (
          <span className="mt-2 font-mono text-xs text-text-muted">{label}</span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {/* Left serif */}
      <svg
        width={serifSize}
        height={serifSize * 2 + 1}
        className="shrink-0"
        aria-hidden="true"
      >
        <line
          x1={serifSize / 2}
          y1="0"
          x2={serifSize / 2}
          y2={serifSize * 2 + 1}
          stroke="var(--line-color)"
          strokeWidth="1"
        />
      </svg>

      {/* Line */}
      <div className="relative flex h-px flex-1 items-center bg-line">
        {label && (
          <span className="absolute left-1/2 -translate-x-1/2 bg-bg-primary px-3 font-mono text-xs text-text-muted">
            {label}
          </span>
        )}
      </div>

      {/* Right serif */}
      <svg
        width={serifSize}
        height={serifSize * 2 + 1}
        className="shrink-0"
        aria-hidden="true"
      >
        <line
          x1={serifSize / 2}
          y1="0"
          x2={serifSize / 2}
          y2={serifSize * 2 + 1}
          stroke="var(--line-color)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
