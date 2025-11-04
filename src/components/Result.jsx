import { useState } from "react";

export function Result({ answer }) {
  const [copied, setCopied] = useState(false);
  if (!answer) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(answer);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  };

  return (
    <div className="result" aria-live="polite">
      <p className="result-text">
        <strong>{answer}</strong>
      </p>
      <button type="button" className="btn copy-btn" onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
