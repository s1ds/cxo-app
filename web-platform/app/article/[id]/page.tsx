import { Clock, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArticlePage({ params }: { params: { id: string } }) {
    // Mock Data - In a real app, fetch based on params.id
    const article = {
        title: "The Agentic AI Shift: From Chatbots to Autonomous Workers",
        readTime: "7 MIN READ",
        date: "NOV 30, 2025",
        soWhat: [
            "Enterprises are moving beyond RAG to agentic workflows where models take action.",
            "Key bottleneck is no longer model capability, but orchestration and permissioning.",
            "Microsoft and OpenAI pushing 'Agents' as the new apps, threatening traditional SaaS UI."
        ],
        content: [
            "The era of passive AI chatbots is drawing to a close. As we move into late 2025, the dominant paradigm is shifting towards 'Agentic AI'—systems capable not just of generating text, but of executing complex, multi-step workflows with minimal human oversight.",
            "For the C-suite, this represents a fundamental change in how automation is deployed. It's no longer about 'copilots' that assist a human; it's about 'agents' that act as digital employees. The implications for workforce planning, IT security, and operational efficiency are profound.",
            "Our analysis suggests that early adopters in the financial services and logistics sectors are already seeing a 40% reduction in process latency by deploying autonomous agents for reconciliation and routing tasks. However, the governance challenge—'who is responsible when an agent makes a mistake?'—remains largely unsolved."
        ]
    };

    return (
        <div className="relative min-h-screen pb-20">
            {/* Back Link */}
            <div className="max-w-[700px] mx-auto mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-corporate-muted hover:text-corporate-text transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                </Link>
            </div>

            <article className="max-w-[700px] mx-auto">
                {/* Header */}
                <header className="mb-10">
                    <div className="flex items-center gap-4 mb-6 font-mono text-xs text-corporate-muted tracking-wider">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-corporate-muted" />
                        <span className="flex items-center gap-1 text-corporate-accent">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-corporate-text leading-tight mb-8">
                        {article.title}
                    </h1>

                    {/* So What Box */}
                    <div className="bg-corporate-surface/30 border border-corporate-accent/50 rounded-sm p-6 mb-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-corporate-accent" />
                        <h3 className="text-sm font-bold text-corporate-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            The Executive Summary
                        </h3>
                        <ul className="space-y-3">
                            {article.soWhat.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-corporate-text/90 text-lg font-medium leading-snug">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-corporate-text/50 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    {article.content.map((paragraph, idx) => (
                        <p key={idx} className="text-slate-300 leading-relaxed mb-6 font-serif">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>

            {/* Floating Action Button */}
            <button className="fixed bottom-8 right-8 bg-corporate-accent text-corporate-slate font-bold py-3 px-6 rounded-full shadow-lg shadow-sky-900/20 hover:bg-sky-300 transition-all duration-200 flex items-center gap-2 z-50 group">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Ask AI about this
            </button>
        </div>
    );
}
