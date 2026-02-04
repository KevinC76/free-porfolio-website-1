import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SmartImageProps extends Omit<ImageProps, "onError"> {
  fallback?: string;
}

export default function SmartImage({
  src,
  alt,
  fallback = "/images/placeholder.jpg",
  className,
  ...props
}: SmartImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "var(--bg-accent)",
      }}
      className={className}
    >
      <Image
        src={error ? fallback : src}
        alt={alt}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}
