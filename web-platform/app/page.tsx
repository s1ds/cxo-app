import BriefingCard from "@/components/BriefingCard";

const MOCK_BRIEFINGS = [
    {
        id: 1,
        date: "NOV 30, 2025",
        title: "AI Governance: The New Boardroom Imperative",
        bullets: [
            "EU AI Act compliance deadline approaches for high-risk systems.",
            "Boards must establish dedicated AI oversight committees by Q1 2026.",
            "Liability shifts from developers to deployers in enterprise contexts."
        ]
    },
    {
        id: 2,
        date: "NOV 30, 2025",
        title: "Market Volatility: Navigating the 2026 Correction",
        bullets: [
            "Tech valuations seeing 15% correction amidst rate hike fears.",
            "Defensive sector rotation recommended for next 2 quarters.",
            "Private equity dry powder reaches record highs, signaling M&A wave."
        ]
    },
    {
        id: 3,
        date: "NOV 30, 2025",
        title: "Cybersecurity: The Quantum Threat Horizon",
        bullets: [
            "Harvest-now-decrypt-later attacks targeting long-retention data.",
            "NIST finalizes post-quantum cryptography standards.",
            "Financial institutions urged to audit encryption inventory immediately."
        ]
    }
];

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-corporate-text mb-2">
                    Daily Signal
                </h1>
                <p className="text-corporate-muted text-sm">
                    Your curated executive intelligence briefing for Sunday, November 30.
                </p>
            </header>

            <div className="grid gap-6">
                {MOCK_BRIEFINGS.map((briefing) => (
                    <BriefingCard
                        key={briefing.id}
                        date={briefing.date}
                        title={briefing.title}
                        bullets={briefing.bullets}
                    />
                ))}
            </div>
        </div>
    );
}
