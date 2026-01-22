import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <section className="flex flex-col items-center gap-8">
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                    Six Degrees of History
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-300 max-w-2xl">
                    Connect historical figures through their relationships, events, and shared moments in time.
                </p>
                <Link
                    href="/play"
                    className="btn text-2xl sm:text-3xl px-12 py-6 rounded-lg mt-4 hover:scale-105 transition-transform"
                >
                    Play
                </Link>
            </section>

            <section className="mt-16 max-w-2xl text-left">
                <h2 className="text-2xl font-bold mb-6 text-center">How to Play</h2>
                <div className="space-y-4 text-neutral-300">
                    <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">1</span>
                        <p>You will be given two historical figures from different eras or regions.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">2</span>
                        <p>Find a chain of connections between them through shared events, relationships, or influences.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">3</span>
                        <p>The goal is to connect them in six degrees or fewer. The shorter the chain, the higher your score!</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">4</span>
                        <p>Each connection must be historically accurate and verifiable.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
