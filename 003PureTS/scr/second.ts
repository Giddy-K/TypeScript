interface Take {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Insta implements Take {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements Take{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string
    ){}

    createStory(): void {
        console.log("Story was created");
    }
}