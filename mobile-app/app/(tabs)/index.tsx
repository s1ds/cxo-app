import React from 'react';
import { View, FlatList, Dimensions, StatusBar } from 'react-native';
import SignalCard from '../../components/SignalCard';

const { height } = Dimensions.get('window');
// Adjust for tab bar (approx 80) and status bar
const SNAP_INTERVAL = height - 80;

const MOCK_DATA = [
    {
        id: '1',
        date: 'NOV 30, 2025',
        title: 'AI Governance: The New Boardroom Imperative',
        vertical: 'AI & GenAI',
        source: 'Sequoia Capital',
        bullets: [
            "EU AI Act compliance deadline approaches for high-risk systems.",
            "Boards must establish dedicated AI oversight committees by Q1 2026.",
            "Liability shifts from developers to deployers in enterprise contexts."
        ]
    },
    {
        id: '2',
        date: 'NOV 30, 2025',
        title: 'Market Volatility: Navigating the 2026 Correction',
        vertical: 'Global Markets',
        source: 'Mint / ET',
        bullets: [
            "Tech valuations seeing 15% correction amidst rate hike fears.",
            "Defensive sector rotation recommended for next 2 quarters.",
            "Private equity dry powder reaches record highs, signaling M&A wave."
        ]
    },
    {
        id: '3',
        date: 'NOV 30, 2025',
        title: 'Cybersecurity: The Quantum Threat Horizon',
        vertical: 'Cybersecurity',
        source: 'Gartner',
        bullets: [
            "Harvest-now-decrypt-later attacks targeting long-retention data.",
            "NIST releases first post-quantum cryptography standards.",
            "Financial institutions urged to audit encryption inventory immediately."
        ]
    }
];

export default function SignalScreen() {
    return (
        <View className="flex-1 bg-corporate-slate">
            <StatusBar barStyle="light-content" />
            <FlatList
                data={MOCK_DATA}
                renderItem={({ item }) => (
                    <SignalCard
                        date={item.date}
                        title={item.title}
                        bullets={item.bullets}
                        vertical={item.vertical}
                        source={item.source}
                    />
                )}
                keyExtractor={item => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={SNAP_INTERVAL}
            />
        </View>
    );
}
