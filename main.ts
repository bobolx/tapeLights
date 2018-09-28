

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace tapeLights {

    let neoStrip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB);

    //% blockId=tape_rgb block="%firstRGB| 到 %lastRGB| 灯亮，颜色为 R值 %red| G值 %green| B值 %blue"
    //% firstRGB.min=1 firstRGB.max=24
    //% lastRGB.min=1 lastRGB.max=24
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% weight=59
    export function setTapeLights(firstRGB: number, lastRGB:number, red:number, green:number, blue:number): void {
        
        for(let i=firstRGB-1;i<lastRGB;i++){
            neoStrip.setPixelColor(i, neopixel.rgb(red, green, blue));
        }
        

        neoStrip.show();
        
    }

   /**
     * 关闭所有灯
     */
   //% blockId="cruise_neo_clear" block="关闭所有LED灯"
   //% weight=55
   export function neoClear(): void {
       neoStrip.showColor(neopixel.colors(NeoPixelColors.Black));
   }

}


