abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstract getSepia(): void

}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSe
}

// const kb = new TakePhoto("test", "Test")