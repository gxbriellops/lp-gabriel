import Image from "next/image";
import styles from "./page.module.css";

type CasePreviewProps = {
  label: string;
  variant: number;
  image?: string;
};

export function CasePreview({ label, variant, image }: CasePreviewProps) {
  return (
    <div className={`${styles.casePreview} ${variant === 2 ? styles.casePreviewAlt : ""}`}>
      <div className={styles.previewBrowser} aria-hidden="true">
        <div className={styles.previewToolbar}>
          <span />
          <span />
          <span />
          <p>{label}</p>
        </div>
        <div className="relative w-full aspect-video overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={`Prévia de ${label}`}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
