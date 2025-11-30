"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Send } from "lucide-react";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
}

export default function AskAIPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            content: "Good afternoon. I've analyzed your portfolio against the latest market signals. What strategic questions can I answer for you today?"
        }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Mock AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "I've noted that inquiry. Based on current Q3 projections and the regulatory landscape we discussed, I would advise a cautious approach to that specific expansion. Shall I draft a risk assessment?"
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full relative">
            {/* Header */}
            <header className="mb-8 flex-shrink-0">
                <h1 className="text-3xl font-serif font-bold text-corporate-text mb-2">
                    Concierge
                </h1>
                <p className="text-corporate-muted text-sm">
                    Private Executive Intelligence
                </p>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto mb-20 space-y-8 pr-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : "text-left"}`}>
                            {msg.role === "ai" && (
                                <div className="flex items-center gap-2 mb-2 text-corporate-accent text-xs font-bold uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3" />
                                    AI Consultant
                                </div>
                            )}

                            <p className={`text-lg leading-relaxed ${msg.role === "user"
                                    ? "text-corporate-text font-medium"
                                    : "text-corporate-muted font-serif"
                                }`}>
                                {msg.content}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 bg-corporate-slate/95 backdrop-blur-sm border-t border-corporate-border py-6">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask a strategic question..."
                        className="w-full bg-corporate-surface/50 border border-corporate-border rounded-none px-6 py-4 pr-16 text-corporate-text placeholder:text-corporate-muted focus:outline-none focus:border-corporate-accent transition-colors font-sans"
                        autoFocus
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-corporate-accent hover:text-sky-300 transition-colors"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
