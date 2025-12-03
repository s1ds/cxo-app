export default function Ask() {
    return (
        <main className="min-h-full bg-background p-8 lg:p-12">
            <header className="mb-12 max-w-4xl">
                <h1 className="mb-2 font-serif text-4xl font-medium text-white">
                    Ask Anything
                </h1>
                <p className="text-lg text-text-secondary">
                    Direct access to our analyst team for bespoke intelligence requests.
                </p>
            </header>

            <div className="max-w-3xl space-y-6">
                <div className="rounded-xl border border-neutral-800 bg-surface p-8 text-center">
                    <p className="text-text-secondary">
                        The analyst desk is currently offline. Please check back later.
                    </p>
                </div>
            </div>
        </main>
    );
}
