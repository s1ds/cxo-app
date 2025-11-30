import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import BriefingCard from '../../components/BriefingCard';

const MOCK_BRIEFINGS = [
    {
        id: '1',
        date: 'NOV 30, 2025',
        title: 'The Rise of Sovereign AI Clouds',
        vertical: 'Infrastructure',
        source: 'Gartner',
        summary: [
            "Nations are increasingly mandating local data residency for AI models.",
            "Hyperscalers are launching dedicated sovereign regions in EU and APAC.",
            "Enterprises must audit data pipelines for cross-border compliance."
        ],
        fullText: "As geopolitical tensions rise, the concept of 'Sovereign AI' is moving from theory to regulation. Governments are demanding that critical AI infrastructure and data remain within national borders. This shift forces multinational corporations to rethink their centralized AI strategies. We expect a fragmentation of the global AI stack, requiring localized deployments and stricter data governance protocols."
    },
    {
        id: '2',
        date: 'NOV 29, 2025',
        title: 'Quantum-Safe Cryptography Transition',
        vertical: 'Cybersecurity',
        source: 'NIST',
        summary: [
            "NIST finalizes new post-quantum cryptographic standards.",
            "Financial institutions begin multi-year migration of core ledgers.",
            "Harvest Now, Decrypt Later attacks remain a primary threat vector."
        ],
        fullText: "With the finalization of NIST's post-quantum algorithms, the clock has officially started for enterprise migration. The threat of 'Harvest Now, Decrypt Later'—where adversaries steal encrypted data today to decrypt it once quantum computers mature—makes immediate action necessary for long-retention data. CISOs should prioritize inventorying cryptographic assets and piloting hybrid (classical + post-quantum) key exchange protocols."
    },
    {
        id: '3',
        date: 'NOV 28, 2025',
        title: 'Agentic Workflows in Enterprise ERP',
        vertical: 'Enterprise Software',
        source: 'Forrester',
        summary: [
            "Autonomous agents are replacing static RPA bots in supply chain management.",
            "ERP vendors integrating agentic layers for predictive resource allocation.",
            "Workforce upskilling required for 'Agent Orchestration' roles."
        ],
        fullText: "The next evolution of ERP is not just better dashboards, but active participation. Autonomous agents are now capable of negotiating supplier contracts within pre-set parameters and re-routing logistics in real-time based on weather data. This shift from 'system of record' to 'system of agency' promises massive efficiency gains but introduces new risks in automated decision-making liability."
    }
];

export default function BriefingScreen() {
    return (
        <View className="flex-1 bg-corporate-slate">
            <StatusBar barStyle="light-content" />
            <View className="pt-16 pb-4 px-6 border-b border-corporate-border bg-corporate-slate z-10">
                <Text className="text-corporate-text text-3xl font-bold tracking-tight">
                    Weekly Briefing
                </Text>
                <Text className="text-corporate-muted text-sm mt-1">
                    Curated intelligence for the C-Suite.
                </Text>
            </View>

            <FlatList
                data={MOCK_BRIEFINGS}
                renderItem={({ item }) => (
                    <BriefingCard
                        date={item.date}
                        title={item.title}
                        summary={item.summary}
                        vertical={item.vertical}
                        source={item.source}
                        fullText={item.fullText}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
