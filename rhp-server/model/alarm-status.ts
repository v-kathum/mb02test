export enum RAG { R =  "R", A = "A", G = "G" };

export class AlarmStatus {

    public rag: RAG;
    public messages: string[];

    constructor(rag: RAG, messages: string[]) {
        this.rag = rag;
        this.messages = messages;
    }
}