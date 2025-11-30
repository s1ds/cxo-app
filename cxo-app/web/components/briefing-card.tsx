"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Share2, Bookmark } from "lucide-react";
import clsx from "clsx";

interface BriefingCardProps {
    title: string;
    summary: string[];
    fullText?: string;
    vertical: string;
    source: string;
    date: string;
}

export default function BriefingCard({ title, summary, fullText, vertical, source, date }: BriefingCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={clsx(
                "group relative overflow-hidden rounded-xl border border-neutral-800 bg-surface transition-all duration-300",
                isExpanded ? "ring-1 ring-primary/50 shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)]" : "hover:border-neutral-700"
            )}
        >
            {/* Header / Clickable Area */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer p-6 sm:p-8"
            >
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                            {vertical}
                        </span>
                        <span className="text-xs text-text-muted">{date}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="rounded p-1.5 text-text-muted hover:bg-neutral-800 hover:text-white">
                            <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="rounded p-1.5 text-text-muted hover:bg-neutral-800 hover:text-white">
                            <Share2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <h3 className="mb-4 font-serif text-2xl font-medium leading-tight text-text-primary group-hover:text-primary/90 transition-colors">
                    {title}
                </h3>

                <div className="space-y-3">
                    {summary.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <p className="text-sm leading-relaxed text-text-secondary">{bullet}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-800 pt-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
                        Source: {source}
                    </span>
                    <button className="flex items-center gap-1 text-xs font-medium text-primary">
                        {isExpanded ? (
                            <>Less <ChevronUp className="h-3 w-3" /></>
                        ) : (
                            <>More <ChevronDown className="h-3 w-3" /></>
                        )}
                    </button>
                </div>
            </div>

            {/* Expanded Content */}
            <div
                className={clsx(
                    "overflow-hidden bg-neutral-900/50 px-6 sm:px-8 transition-all duration-500 ease-in-out",
                    isExpanded ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                )}
            >
                <div className="prose prose-invert prose-sm max-w-none">
                    <p className="text-text-secondary">
                        {fullText || "Full analysis content would appear here. This section provides deeper context, strategic implications, and 'So What' analysis for the executive reader."}
                    </p>
                    <div className="mt-4 rounded-lg bg-neutral-800 p-4">
                        <h4 className="mb-2 font-serif text-sm font-bold text-white">Strategic Implication</h4>
                        <p className="text-xs text-text-muted">
                            Executives should consider immediate audit of current capabilities in this area to prevent competitive disadvantage within the next 2 quarters.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
