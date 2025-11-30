import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface BriefingCardProps {
    title: string;
    summary: string[];
    vertical: string;
    source: string;
    date: string;
}

export default function BriefingCard({ title, summary, vertical, source, date }: BriefingCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <StyledTouchableOpacity
            activeOpacity={0.9}
            onPress={() => setIsExpanded(!isExpanded)}
            className={`mb-4 overflow-hidden rounded-xl border border-neutral-800 bg-surface p-4 ${isExpanded ? 'border-primary/50' : ''}`}
        >
            <StyledView className="mb-3 flex-row items-center justify-between">
                <StyledView className="flex-row items-center gap-2">
                    <StyledView className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1">
                        <StyledText className="text-[10px] font-medium uppercase tracking-wider text-primary">
                            {vertical}
                        </StyledText>
                    </StyledView>
                    <StyledText className="text-[10px] text-text-muted">{date}</StyledText>
                </StyledView>
            </StyledView>

            <StyledText className="mb-3 text-xl font-medium leading-tight text-white">
                {title}
            </StyledText>

            <StyledView className="space-y-2">
                {summary.map((bullet, idx) => (
                    <StyledView key={idx} className="flex-row items-start gap-2">
                        <StyledView className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                        <StyledText className="flex-1 text-sm leading-relaxed text-text-secondary">
                            {bullet}
                        </StyledText>
                    </StyledView>
                ))}
            </StyledView>

            {isExpanded && (
                <StyledView className="mt-4 border-t border-neutral-800 pt-3">
                    <StyledText className="text-sm text-text-secondary">
                        Full analysis content would appear here. This section provides deeper context, strategic implications, and 'So What' analysis for the executive reader.
                    </StyledText>
                </StyledView>
            )}

            <StyledView className="mt-4 flex-row items-center justify-between border-t border-neutral-800 pt-3">
                <StyledText className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
                    Source: {source}
                </StyledText>
                <StyledText className="text-xs font-medium text-primary">
                    {isExpanded ? 'Less' : 'More'}
                </StyledText>
            </StyledView>
        </StyledTouchableOpacity>
    );
}
