export class PopUp{
    title:string;
    message:string;
    isOn:boolean;
    interval:any
    totalTime:number
    afterEnd:Function|null
    /**
     * @param {string} title
     * @param {string} message
     * @param {Boolean} isOn
     */
    constructor(title:string,message:string,isOn:boolean,callback:Function|null){
        this.title = title
        this.message = message
        this.isOn = isOn
        this.interval = 0;
        this.totalTime = 0
        this.afterEnd = callback
    }
}

