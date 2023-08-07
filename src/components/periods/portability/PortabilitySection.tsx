import Hero from "./Hero";

const funFacts = [
    {
        title: "Portability Unleashed",
        description: "In the 70s and 80s, the cassette tape was the go-to medium for portable music. This pocket-sized innovation was a game-changer, allowing music lovers to take their favorite tunes on the go.",
        href: 'https://en.wikipedia.org/wiki/Walkman'
    },
    {
        title: "The Birth of Personal Playlists",
        description: "Cassette tapes offered more than just portability. They introduced a personal element to music consumption. With the ability to create custom mixtapes, listeners could curate their own playlists long before the advent of digital streaming platforms.",
        href: 'https://en.wikipedia.org/wiki/Walkman'
    },
    {
        title: 'A Cultural Icon',
        description: 'The cassette tape was more than a technological marvel; it was a cultural icon. It became an integral part of music sharing culture, setting the stage for social listening experiences that are now commonplace in the digital age.',
        href: ''
    },
    {
        title: 'Pioneering Portable Media',
        description: 'The impact of cassette tapes extends beyond music. They pioneered the concept of portable personal media, influencing the development of subsequent technologies like portable CD players, MP3 players, and eventually, smartphones.',
        href: ''
    }
]

const PortabilitySection = () => {
    return (
        <div>
            <div className="font-bold p-4 text-lg text-zinc-300">
                <p>1970s — 1980s</p>
            </div>

            <Hero />

            <div className="max-w-[1800px] mx-auto grid grid-cols-2 gap-16 pb-8">
                {funFacts.map((funFact, index) => (
                    <div key={`walkman-funfact-${index}`}>
                        <h2 className="font-bold text-3xl mb-4">{funFact.title}</h2>

                        <p className="text-zinc-200 text-lg mb-4">{funFact.description}</p>
                    
                        <a className="px-6 py-3 rounded-full border-orange-400 border inline-block text-orange-400 hover:cursor-pointer hover:bg-orange-400 hover:text-black transition-colors" href={funFact.href}>Read more ⟶</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortabilitySection;