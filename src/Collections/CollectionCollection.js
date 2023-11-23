import {makeAutoObservable} from "mobx";

export default class CollectionCollection {
    constructor() {
        this._theme=[
            {id:1, title:'Nature'},
            {id:2, title:'Technology'},
            {id:3, title:'Abstract'}
        ]
        this._collection=[
            {id:1, title:'монке' ,description:'1',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:2, title:'2' ,description:'2',image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTYxBqGnXyFtEwE19i5JMrcUyj3qYeUmx4A&usqp=CAU'},
            {id:3, title:'3' ,description:'3',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:4, title:'4' ,description:'4',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:5, title:'5' ,description:'5',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:6, title:'6' ,description:'6',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:7, title:'7' ,description:'7',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:8, title:'1' ,description:'1',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:9, title:'2' ,description:'2',image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTYxBqGnXyFtEwE19i5JMrcUyj3qYeUmx4A&usqp=CAU'},
            {id:10, title:'3' ,description:'3',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:11, title:'4' ,description:'4',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:12, title:'5' ,description:'5',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:13, title:'6' ,description:'6',image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:14, title:'7' ,description:'7',image_url:'https://brilliant24.ru/files/cat/template_01.png'}
        ]
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