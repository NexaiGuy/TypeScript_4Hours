abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstragetSepia(): void
}

class Instagram extends TakePhoto{

}

// const kb = new TakePhoto("test", "Test")