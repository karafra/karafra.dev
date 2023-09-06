export interface IProject {
    title: string,
    url: string,
    github: string,
    description: Array<string>
    image: string,
    topics: Array<string>
    tools: Array<string>
    start: number,
    end: Number,
    npm: string | null,
}

const projects: IProject[] = [
    {
        title: 'Video downtloader',
        url: 'https://github.com/karafra/video-downloader',
        github: 'https://github.com/karafra/video-downloader',
        description: [
            'Spotify Cartography groups simular songs together based on their happiness, energy, danceability and six other variables using an algorithm called t-distributed stochastic neighbor embedding (t-SNE).',
            'The songs are then displayed in a 3D space using Three.js, allowing you to fly around and explore.',
            '1st place winner for Oregon State Beaverhacks Winter 2022!',
        ],
        image: 'spotify_cartography',
        topics: [
            'Video',
            'Download',
            'Bitchute',
            'Youtube',
        ],
        tools: [
            'Spring',
            'Spring Boot',
            'Mockito',
            'Junit',
            'YoutubeDl',
        ],
        start: 1641456000000,
        end: 1642406400000,
        npm: null,
    },
];

export default projects;
