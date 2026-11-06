import { ClipboardCheck, MessagesSquare, Stethoscope, ChartNoAxesCombined } from "lucide-react";

const highlights = [
  { icon: ClipboardCheck, label: "Thoughtful claim handling", text: "A process built around accurate preparation, submission, and follow-through." },
  { icon: Stethoscope, label: "Practice-aware support", text: "Workflows shaped around your specialty, systems, and operating needs." },
  { icon: ChartNoAxesCombined, label: "Useful visibility", text: "Clear updates on claim activity, denials, and outstanding receivables." },
  { icon: MessagesSquare, label: "Responsive communication", text: "A practical working relationship with clear points of contact." },
];

export function TrustHighlights() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-x py-8 sm:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pale-pine text-teal"><Icon className="size-5" aria-hidden="true" /></span>
              <div><h2 className="text-sm font-bold tracking-normal">{label}</h2><p className="mt-1 text-sm leading-6">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
