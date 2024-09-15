abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

}

const kb = new TakePhoto("test", "Test")

 class Instagram extends TakePhoto{

// }