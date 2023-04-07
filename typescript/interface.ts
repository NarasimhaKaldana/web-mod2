interface paint{
    drawPoint():void;

}
interface Paint2D{
draw2DImage():void;

}


class Circle implements Paint2D,Paint2D{
    draw2DImage(): void {
        console.log("drawing a 2d")
    }
    drawPoint():void{
        console.log("drawing line")
    }
}


