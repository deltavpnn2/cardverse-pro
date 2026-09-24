import logo from "@/assets/cv-logo.png";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="CardVerse CV logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="shrink-0 drop-shadow-[0_0_14px_rgba(45,212,191,0.35)]"
    />
  );
}
