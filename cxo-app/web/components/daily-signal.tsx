import { ArrowRight } from "lucide-react";

interface DailySignalProps {
    title: string;
    summary: string[];
    vertical: string;
    source: string;
}

export default function DailySignal({ title, summary, vertical, source }: DailySignalProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-surface p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]">
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary">
                    {vertical}
                </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl font-medium text-text-primary group-hover:text-primary transition-colors">
                {title}
            </h3>

            <ul className="mb-6 space-y-2">
                {summary.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
                    Source: {source}
                </span>
                <button className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    Read Briefing <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
