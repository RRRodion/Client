import {makeAutoObservable} from "mobx";
import axios from "axios";

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
        console.log(collection)
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
    get selectedCollectionByTheme(){
        return this._selectedCollection
    }
    /*async fetchCollectionByTheme(themeId) {
        try {
            const response = await axios.get(`/api/collection/byTheme/`+themeId);
            this.setSelectedCollection(response.data);
        } catch (error) {
            console.error("Error fetching collection by theme:", error);
        }
    }*/
}