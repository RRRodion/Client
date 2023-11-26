import {makeAutoObservable} from "mobx";

export default class CollectionCollection {
    constructor() {
        this._theme=[]
        this._collection=[]
        this._selectedTheme={}
        this._selectedCollection={}
        makeAutoObservable(this)
    }

    setTheme(theme){
        this._theme=theme
    }
    setCollection(collection){
        this._collection= collection
    }
    setSelectedTheme(theme){
        this._selectedTheme=theme
    }
    setSelectedCollection(collection){
        this._selectedCollection=collection
    }
    get theme(){
        return this._theme
    }
    get collection(){
        return this._collection
    }
    get selectedTheme(){
        return this._selectedTheme
    }
    get selectedCollection(){
        return this._selectedCollection
    }
}