export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="0 0 72 72" role="img" aria-label="Skyways winged S logo">
      <path fill="#155eef" d="M5 33.5C17.8 15.3 37.3 6.8 67 9L49.5 24.2c-14.2-2.1-25.8 2.2-34.8 13.2L5 33.5Z" />
      <path fill="#061b37" d="M67 38.5C54.2 56.7 34.7 65.2 5 63l17.5-15.2c14.2 2.1 25.8-2.2 34.8-13.2l9.7 3.9Z" />
      <path fill="#1dbf73" d="m27.2 36.8 21.7-10.4-9.4 16.8-5-4.2-5.8 8.2 1-9.1-2.5-1.3Z" />
    </svg>
  );
}
