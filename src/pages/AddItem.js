import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';
import collection from "./Collection";
import {Form} from "react-bootstrap";


const AddItem = () => {
    const navigate = useNavigate();
    const [itemName, setItemName] = useState("");
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);
    const [customInputs, setCustomInputs] = useState({});


    const createInputField = (attribute, type) => (
        <div className="form-group" key={attribute}>
            <input
                type={type}
                className="form-control"
                id={attribute}
                placeholder={`Enter ${collection[attribute]}`}
                onChange={(e) => handleCustomInputChange(attribute, e.target.value)}
            />
        </div>
    );

    const createFormElements = (filterFn, type) => {
        const customAttributes = Object.keys(collection).filter(filterFn);
        return customAttributes.map(attribute => createInputField(attribute, type));
    };

    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    const handleCustomInputChange = (attribute, value) => {
        setCustomInputs({
            ...customInputs,
            [attribute]: value,
        });
    };


    const handleAddTag = () => {
        if (tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleRemoveTag = (index) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    };

    return (
        <div className="col-md col-sm-12 col-xs-12 container-main d-flex flex-row align-items-center login p-0 mt-5">
            <div className="col-md-12 d-flex flex-column align-items-center session-overlay justify-content-center mt-5">
                <div className="input-box col-md d-flex flex-column align-items-center justify-content-center">
                    <div className="intro">
                        <span className="line" />
                        <h4 className="intro__title">Добавить новый айтем в коллекцию {collection.name} Collection</h4>
                    </div>

                        <div className="form-group">
                            <label htmlFor="name">Название</label>

                            <input type="text" className="form-control" id="name" placeholder={`Введите название`} onChange={handleInputChange} />
                        </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Изображениеy</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                        <label>
                            Теги:
                            <input className="form-control"
                                   type="text"
                                   value={tagInput}
                                   onChange={(e) => setTagInput(e.target.value)}
                            />
                            <button type="button"  onClick={handleAddTag}>
                                добавить тег
                            </button>
                        </label>

                        <div>
                            {tags.map((tag, index) => (
                                <div key={index}>
                                    {`${tag} `}
                                    <button type="button"  onClick={() => handleRemoveTag(index)}>
                                        Удалить
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-success float-end mt-3" >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;