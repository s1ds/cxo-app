"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, MessageSquare, Settings, LogOut } from "lucide-react";
import clsx from "clsx";

const navigation = [
    { name: "Daily Signal", href: "/", icon: LayoutDashboard },
    { name: "Weekly Deep Read", href: "/deep-read", icon: BookOpen },
    { name: "Ask Anything", href: "/ask", icon: MessageSquare },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r border-neutral-800 bg-surface text-white">
            <div className="flex h-16 items-center px-6 border-b border-neutral-800">
                <span className="font-serif text-xl font-bold text-primary">CXO Service</span>
            </div>

            <nav className="flex-1 space-y-1 px-3 py-6">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-text-secondary hover:bg-neutral-800 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={clsx(
                                    "mr-3 h-5 w-5 flex-shrink-0",
                                    isActive ? "text-primary" : "text-text-muted group-hover:text-white"
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-neutral-800 p-4">
                <button className="flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-neutral-800 hover:text-white transition-colors">
                    <Settings className="mr-3 h-5 w-5 text-text-muted" />
                    Settings
                </button>
                <button className="mt-1 flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-neutral-800 hover:text-white transition-colors">
                    <LogOut className="mr-3 h-5 w-5 text-text-muted" />
                    Sign out
                </button>
            </div>
        </div>
    );
}
