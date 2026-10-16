"use client";

import { useState } from "react";

const statuses = [
  { label: "Available", color: "available" },
  { label: "Busy", color: "busy" },
  { label: "Away", color: "away" },
] as const;

export default function StatusSelector() {
  const [status, setStatus] = useState<(typeof statuses)[number]["label"]>("Available");

  return (
    <div aria-label="Choose your availability" className="availability-options" role="group">
      {statuses.map((option) => (
        <button
          aria-pressed={status === option.label}
          className={`availability-option ${status === option.label ? "is-selected" : ""}`}
          key={option.label}
          onClick={() => setStatus(option.label)}
          type="button"
        >
          <span className={`availability-dot ${option.color}`} />
          {option.label}
          {status === option.label && <span aria-hidden="true" className="selected-check">✓</span>}
        </button>
      ))}
    </div>
  );
}
