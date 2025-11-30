import BriefingCard from "@/components/briefing-card";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
    const supabase = createClient();

    // Fetch articles (mocked for now if DB is empty, but set up for real data)
    const { data: articles } = await supabase
        .from("articles")
        .select("*")
        .eq("type", "Daily Signal")
        .order('published_at', { ascending: false })
        .limit(10);

    // Fallback mock data
    const displayArticles = articles?.length ? articles : [
        {
            id: "1",
            title: "The Agentic AI Shift: From Chatbots to Autonomous Workers",
            summary_bullets: [
                "Enterprises are moving beyond RAG to agentic workflows where models take action.",
                "Key bottleneck is no longer model capability, but orchestration and permissioning.",
                "Microsoft and OpenAI pushing 'Agents' as the new apps, threatening traditional SaaS UI."
            ],
            vertical_tag: "AI & GenAI",
            source_url: "Sequoia Capital",
            published_at: new Date().toISOString()
        },
        {
            id: "2",
            title: "India's Deep Tech Ecosystem: The 2025 Outlook",
            summary_bullets: [
                "SpaceTech and Semi-conductors seeing highest deal flow in Q3.",
                "Government PLI schemes driving manufacturing shift away from pure software services.",
                "Talent crunch in specialized hardware engineering requires immediate upskilling strategies."
            ],
            vertical_tag: "India Business",
            source_url: "Mint / ET",
            published_at: new Date().toISOString()
        },
        {
            id: "3",
            title: "Cybersecurity in the Quantum Era",
            summary_bullets: [
                "NIST releases first post-quantum cryptography standards.",
                "Financial institutions urged to audit encryption inventory immediately.",
                "Harvest now, decrypt later attacks are a real threat to long-term data retention."
            ],
            vertical_tag: "Cybersecurity",
            source_url: "Gartner",
            published_at: new Date().toISOString()
        },
        {
            id: "4",
            title: "The Return of Geopolitics to Supply Chain Strategy",
            summary_bullets: [
                "China+1 strategy evolving into 'Friend-shoring' alliances.",
                "Critical mineral access becoming a national security priority for G7 nations.",
                "Indian manufacturing stands to gain, but infrastructure lag remains a hurdle."
            ],
            vertical_tag: "Geopolitics",
            source_url: "HBR",
            published_at: new Date().toISOString()
        }
    ];

    return (
        <main className="min-h-full bg-background p-8 lg:p-12">
            <header className="mb-12 max-w-4xl">
                <h1 className="mb-2 font-serif text-4xl font-medium text-white">
                    Daily Signal
                </h1>
                <p className="text-lg text-text-secondary">
                    Your curated intelligence briefing for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}.
                </p>
            </header>

            <div className="max-w-3xl space-y-6">
                {displayArticles.map((article: any) => (
                    <BriefingCard
                        key={article.id}
                        title={article.title}
                        summary={article.summary_bullets || article.summary}
                        fullText={article.full_text}
                        vertical={article.vertical_tag || article.vertical}
                        source={article.source_url || article.source}
                        date={new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    />
                ))}
            </div>
        </main>
    );
}
