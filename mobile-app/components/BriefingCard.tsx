import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface BriefingCardProps {
    date: string;
    title: string;
    summary: string[];
    fullText?: string;
    vertical: string;
    source: string;
}

export default function BriefingCard({ date, title, summary, fullText, vertical, source }: BriefingCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    return (
        <View className="w-full bg-corporate-surface border border-corporate-border rounded-xl overflow-hidden mb-6">
            {/* Header / Clickable Area */}
            <TouchableOpacity activeOpacity={0.9} onPress={toggleExpand} className="p-6">
                <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-row items-center gap-2">
                        <View className="bg-corporate-slate px-3 py-1 rounded-full border border-corporate-border">
                            <Text className="text-corporate-accent text-xs font-bold uppercase tracking-wider">
                                {vertical}
                            </Text>
                        </View>
                        <Text className="text-corporate-muted text-xs font-mono">
                            {date}
                        </Text>
                    </View>
                    <View className="flex-row gap-4">
                        <FontAwesome name="bookmark-o" size={16} color="#94A3B8" />
                        <FontAwesome name="share-alt" size={16} color="#94A3B8" />
                    </View>
                </View>

                <Text className="text-2xl font-bold text-corporate-text leading-tight mb-4">
                    {title}
                </Text>

                <View className="space-y-3">
                    {summary.map((bullet, index) => (
                        <View key={index} className="flex-row items-start gap-3">
                            <View className="mt-2 w-1.5 h-1.5 rounded-full bg-corporate-accent" />
                            <Text className="flex-1 text-base text-slate-300 leading-relaxed font-medium">
                                {bullet}
                            </Text>
                        </View>
                    ))}
                </View>

                <View className="mt-6 flex-row items-center justify-between border-t border-corporate-border pt-4">
                    <Text className="text-corporate-muted text-xs uppercase tracking-widest">
                        Source: {source}
                    </Text>
                    <View className="flex-row items-center gap-1">
                        <Text className="text-corporate-accent text-xs font-bold uppercase">
                            {isExpanded ? 'Less' : 'More'}
                        </Text>
                        <FontAwesome
                            name={isExpanded ? "chevron-up" : "chevron-down"}
                            size={12}
                            color="#38BDF8"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {/* Expanded Content */}
            {isExpanded && (
                <View className="bg-black/20 px-6 py-6 border-t border-corporate-border">
                    <Text className="text-slate-300 text-base leading-relaxed mb-4">
                        {fullText || "Full analysis content would appear here. This section provides deeper context, strategic implications, and 'So What' analysis for the executive reader."}
                    </Text>

                    <View className="bg-corporate-slate p-4 rounded-lg border border-corporate-border">
                        <Text className="text-white font-bold text-sm mb-2 font-serif">
                            Strategic Implication
                        </Text>
                        <Text className="text-corporate-muted text-xs leading-relaxed">
                            Executives should consider immediate audit of current capabilities in this area to prevent competitive disadvantage within the next 2 quarters.
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}
