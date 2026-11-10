const PATTERNS = {
  mesh: (
    <g stroke="var(--color-border)" strokeWidth="1" fill="none">
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40 + 120} />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 65} y1="0" x2={i * 65 - 60} y2="280" />
      ))}
      <circle cx="200" cy="140" r="3" fill="var(--color-accent)" stroke="none" />
      <circle cx="130" cy="90" r="2" fill="var(--color-accent)" stroke="none" />
    </g>
  ),
  grid: (
    <g>
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 44 + 8}
            y={row * 44 + 8}
            width="34"
            height="34"
            rx="4"
            fill={row === 2 && col === 4 ? "var(--color-accent)" : "none"}
            fillOpacity={row === 2 && col === 4 ? 0.9 : 1}
            stroke="var(--color-border)"
          />
        ))
      )}
    </g>
  ),
  scatter: (
    <g>
      <circle cx="80" cy="60" r="34" fill="none" stroke="var(--color-border)" />
      <circle cx="210" cy="150" r="60" fill="none" stroke="var(--color-border)" />
      <circle cx="320" cy="70" r="22" fill="none" stroke="var(--color-border)" />
      <circle cx="140" cy="220" r="16" fill="var(--color-accent)" />
      <circle cx="300" cy="200" r="5" fill="var(--color-accent)" />
      <circle cx="40" cy="190" r="4" fill="var(--color-accent)" />
    </g>
  ),
  lines: (
    <g stroke="var(--color-border)" strokeWidth="1">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={i * 42} y1="0" x2={i * 42} y2="280" />
      ))}
      <rect x="0" y="118" width="400" height="44" fill="var(--color-accent)" fillOpacity="0.12" stroke="none" />
      <line x1="0" y1="118" x2="400" y2="118" stroke="var(--color-accent)" />
      <line x1="0" y1="162" x2="400" y2="162" stroke="var(--color-accent)" />
    </g>
  ),
};

export default function ProjectVisual({ variant = "grid", className = "" }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      <svg viewBox="0 0 400 280" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {PATTERNS[variant] ?? PATTERNS.grid}
      </svg>
    </div>
  );
}
