import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
// Adjust height for tab bar and status bar approximation
const CARD_HEIGHT = height - 80; // Rough adjustment, or use flex: 1 in container

interface SignalCardProps {
    date: string;
    title: string;
    bullets: string[];
    vertical: string;
    source: string;
}

export default function SignalCard({ date, title, bullets, vertical, source }: SignalCardProps) {
    return (
        <View className="w-full justify-center px-6 bg-corporate-slate border-b border-corporate-border" style={{ height: CARD_HEIGHT }}>

            {/* Header */}
            <View className="mb-8">
                <View className="flex-row items-center gap-2 mb-4">
                    <View className="bg-corporate-surface px-3 py-1 rounded-full border border-corporate-border">
                        <Text className="text-corporate-accent text-xs font-bold uppercase tracking-wider">
                            {vertical}
                        </Text>
                    </View>
                    <Text className="text-corporate-muted text-xs font-mono">
                        {date}
                    </Text>
                </View>

                <Text className="text-4xl font-bold text-corporate-text leading-tight">
                    {title}
                </Text>
            </View>

            {/* Content */}
            <View className="space-y-6 mb-12">
                {bullets.map((bullet, index) => (
                    <View key={index} className="flex-row items-start gap-4">
                        <View className="mt-2 w-1.5 h-1.5 rounded-full bg-corporate-accent" />
                        <Text className="flex-1 text-lg text-slate-300 leading-relaxed font-medium">
                            {bullet}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Footer / Actions */}
            <View className="absolute bottom-12 left-6 right-6 flex-row items-center justify-between">
                <Text className="text-corporate-muted text-xs uppercase tracking-widest">
                    Source: {source}
                </Text>

                <TouchableOpacity className="flex-row items-center gap-2 bg-corporate-surface px-4 py-2 rounded-full border border-corporate-border">
                    <FontAwesome name="bookmark-o" size={16} color="#94A3B8" />
                    <Text className="text-corporate-muted text-sm font-medium">Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
