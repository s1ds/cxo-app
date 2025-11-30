import { Home, BookOpen, Sparkles, Settings } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
    { name: "Daily Signal", icon: Home, href: "/" },
    { name: "Deep Read", icon: BookOpen, href: "/deep-read" },
    { name: "Ask AI", icon: Sparkles, href: "/ask-ai" },
    { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[250px] bg-corporate-slate border-r border-corporate-border flex flex-col">
            <div className="p-6">
                <h1 className="text-xl font-serif font-bold text-corporate-text tracking-tight">
                    CXO <span className="text-corporate-accent">Intel</span>
                </h1>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200
              ${item.name === "Daily Signal"
                                ? "border-l-2 border-corporate-accent text-corporate-text bg-transparent"
                                : "border-l-2 border-transparent text-corporate-muted hover:text-corporate-text hover:bg-corporate-surface/50"
                            }
            `}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="p-6 border-t border-corporate-border">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-corporate-surface border border-corporate-border flex items-center justify-center text-xs font-mono text-corporate-muted">
                        JD
                    </div>
                    <div className="text-xs">
                        <p className="text-corporate-text font-medium">John Doe</p>
                        <p className="text-corporate-muted">CEO, TechCorp</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
