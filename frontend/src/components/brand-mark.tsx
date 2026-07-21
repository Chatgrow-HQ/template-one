export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={`brand-mark ${className}`}
      src="/skyways-logo.png"
      alt="Skyways Travels and Tours"
    />
  );
}
