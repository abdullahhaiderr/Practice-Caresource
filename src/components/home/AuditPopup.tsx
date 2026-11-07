"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, ClipboardCheck, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export function AuditPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 9000);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = previous; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="audit-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className="audit-dialog" role="dialog" aria-modal="true" aria-labelledby="audit-title">
        <button className="audit-close" type="button" onClick={() => setOpen(false)} aria-label="Close audit offer"><X size={20} /></button>
        <div className="audit-visual">
          <span className="audit-eyebrow">A clearer revenue cycle starts here</span>
          <h2 id="audit-title">Is your billing workflow working as hard as your practice?</h2>
          <p>Start with a focused conversation about your current billing process, bottlenecks and support needs.</p>
          <ul>
            <li><ClipboardCheck size={19} /> Review your current workflow</li>
            <li><TrendingUp size={19} /> Identify process improvement areas</li>
            <li><ShieldCheck size={19} /> Discuss a practice-specific support plan</li>
          </ul>
          <span className="audit-orbit audit-orbit-one" />
          <span className="audit-orbit audit-orbit-two" />
        </div>
        <div className="audit-form-panel">
          <p className="audit-form-kicker">Let’s talk</p>
          <h3>Request a billing consultation</h3>
          <p>Tell us a little about your practice. We’ll continue by email.</p>
          <Link href="/contact" className="audit-submit" onClick={() => setOpen(false)}>Request a consultation <ArrowRight size={17} /></Link>
          <small>This website is for business enquiries only. Do not submit patient health information or claim details.</small>
        </div>
      </section>
    </div>
  );
}
