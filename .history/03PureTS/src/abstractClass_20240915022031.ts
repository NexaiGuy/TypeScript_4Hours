abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstract getSepia(): void
}

class Instagram extends TakePhoto{

}

// const kb = new TakePhoto("test", "Test")