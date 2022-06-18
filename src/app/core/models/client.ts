import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    name!: string;
    state = StateClient.ACTIVE;
    tva = 20;
    id!: number;
    totalCaHt!: number;
    comment!: string;
    constructor(obj?: Partial<Client>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
    totalTtc(): number {
        return this.totalCaHt * (1 + this.tva/100)
    }
}
