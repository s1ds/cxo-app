export default function DeepRead() {
    return (
        <main className="min-h-full bg-background p-8 lg:p-12">
            <header className="mb-12 max-w-4xl">
                <h1 className="mb-2 font-serif text-4xl font-medium text-white">
                    Weekly Deep Read
                </h1>
                <p className="text-lg text-text-secondary">
                    In-depth analysis and long-form content curated for the weekend.
                </p>
            </header>

            <div className="max-w-3xl space-y-6">
                <div className="rounded-xl border border-neutral-800 bg-surface p-8 text-center">
                    <p className="text-text-secondary">
                        No deep reads available for this week yet. Check back on Friday.
                    </p>
                </div>
            </div>
        </main>
    );
}
