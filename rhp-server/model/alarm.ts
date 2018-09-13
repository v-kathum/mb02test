export class Alarm {

    public propertyId: string;
    public propertyName: string;
    public message: string;
    public time: Date;

    constructor(
        propertyId: string,
        propertyName: string,
        message: string,
        time: Date)
    {
        this.propertyId = propertyId;
        this.propertyName = propertyName;
        this.message = message;
        this.time = time;
    }
}