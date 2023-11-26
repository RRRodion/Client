import {makeAutoObservable} from "mobx";

export default class ItemCollection {
    constructor() {
        this._item=[]
        makeAutoObservable(this)
    }

    setItem(item){
        this._item= item
    }
    setSelectedItem(item){
        this._selectedItem=item
    }
    get item(){
        return this._item
    }
    get selectedItem(){
        return this._selectedItem
    }
}