export class ContactMail{
    public contactMail? : string;
    public subject? : string;
    public message? : string;

    constructor( object : any ){
        this.contactMail = ( object.contactMail ) ? object.contactMail : null;
        this.subject = ( object.subject ) ? object.subject : null;
        this.message = ( object.message ) ? object.message : null;
    }
}