import React from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import BriefingCard from '../components/BriefingCard';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

// Mock Data (Same as Web)
const ARTICLES = [
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
    }
];

export default function HomeScreen() {
    return (
        <StyledSafeAreaView className="flex-1 bg-background">
            <StyledScrollView className="flex-1 px-4 pt-4">
                <StyledView className="mb-6">
                    <StyledText className="text-3xl font-bold text-white">Daily Signal</StyledText>
                    <StyledText className="text-base text-text-secondary">
                        Your curated intelligence briefing.
                    </StyledText>
                </StyledView>

                <StyledView className="pb-8">
                    {ARTICLES.map((article) => (
                        <BriefingCard
                            key={article.id}
                            title={article.title}
                            summary={article.summary_bullets}
                            vertical={article.vertical_tag}
                            source={article.source_url}
                            date={new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        />
                    ))}
                </StyledView>
            </StyledScrollView>
        </StyledSafeAreaView>
    );
}
