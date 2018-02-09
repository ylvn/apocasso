import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()

export class DataService{

    private messageDatasource = new BehaviorSubject<string>("Default messgae");
    currentMessage = this.messageDatasource.asObservable();

    constructor(){}

    changeMessage(message: string) {
        this.messageDatasource.next(message);
    }
}