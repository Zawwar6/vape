export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-ice/60" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
