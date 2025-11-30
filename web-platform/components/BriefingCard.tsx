import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BriefingCardProps {
    date: string;
    title: string;
    bullets: string[];
    href?: string;
}

export default function BriefingCard({ date, title, bullets, href = "/article/1" }: BriefingCardProps) {
    return (
        <div className="bg-corporate-surface border border-corporate-border p-6 rounded-sm hover:border-corporate-muted transition-colors duration-200">
            <div className="mb-4">
                <span className="font-mono text-xs text-corporate-muted uppercase tracking-wider">
                    {date}
                </span>
            </div>

            <h3 className="text-xl font-bold font-sans text-corporate-text mb-4 leading-tight">
                {title}
            </h3>

            <ul className="space-y-2 mb-6">
                {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-corporate-muted flex-shrink-0" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className="inline-flex items-center gap-1 text-sm font-medium text-corporate-accent hover:text-sky-300 transition-colors"
            >
                Read Analysis <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
