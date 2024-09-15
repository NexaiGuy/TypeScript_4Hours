abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstract getSepia(): void

}

class Instagram extends TakePhoto{
    constructor(public cameraMode){}
}

// const kb = new TakePhoto("test", "Test")