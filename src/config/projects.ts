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
        title: 'Video downloader',
        url: 'https://github.com/karafra/video-downloader',
        github: 'https://github.com/karafra/video-downloader',
        description: [
            'Simple spring boot application built with thymeleaf as static website engine used for downloading videos from Bitchute',
            'Application streams downloaded files directly to clients machine so no server storage is required'
        ],
        image: 'video-downloader',
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
