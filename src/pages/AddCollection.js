import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {createCollection, fetchTheme} from "../http/CollectionApi";
import {Context} from "../index";
import {Form} from "react-bootstrap";
import collection from "./Collection";
import {values} from "mobx";

const AddCollection = () => {
    const { collection: { selectedTheme } } = useContext(Context);
    const [theme, setTheme] = useState([]);
    const navigate = useNavigate();
    const [newCollection, setNewCollection] = useState({
        title: '',
        description: '',
        image_url: '',
        theme_id: '',
        customFields: [],
    });
    const [customFieldType, setCustomFieldType] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const themeData = await fetchTheme(); // Предполагается, что у вас есть функция fetchTheme
                setTheme(themeData);
            } catch (error) {
                console.error('Error fetching theme data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setNewCollection({
            ...newCollection,
            [e.target.name]: e.target.value,
        });
    };

    const handleCustomFieldTypeChange = (e) => {
        setCustomFieldType(e.target.value);
    };

    const addCustomField = () => {
        if (customFieldType) {
            const typeCount = newCollection.customFields.filter(field => field.type === customFieldType).length;
            const maxCountPerType = 3;
            if (typeCount < maxCountPerType) {
                setNewCollection({
                    ...newCollection,
                    customFields: [
                        ...newCollection.customFields,
                        { type: customFieldType, value: '' },
                    ],
                });
            } else {
                alert(`You cannot add more than ${maxCountPerType} fields of type ${customFieldType}`);
            }
        }
    };

    const handleCustomFieldValueChange = (index, value) => {
        const updatedCustomFields = [...newCollection.customFields];
        updatedCustomFields[index].value = value;
        setNewCollection({
            ...newCollection,
            customFields: updatedCustomFields,
        });
    };

    const user_id = parseInt(localStorage.getItem('id'));
    const handleSubmit = (e) => {
        e.preventDefault();
        const {customFields, ...other} = newCollection
        const customFieldsObject = customFields.reduce((result, field, index) => {
            let key;
            if (field.type.startsWith('string')) {
                const count = (result.custom_str_count || 0) + 1;
                key = `custom_str${count}`;
                result.custom_str_count = count;
            } else if (field.type.startsWith('boolean')) {
                const count = (result.custom_bool_count || 0) + 1;
                key = `custom_bool${count}`;
                result.custom_bool_count = count;
            } else if (field.type.startsWith('date')) {
                const count = (result.custom_date_count || 0) + 1;
                key = `custom_date${count}`;
                result.custom_date_count = count;
            } else if (field.type.startsWith('integer')) {
                const count = (result.custom_int_count || 0) + 1;
                key = `custom_int${count}`;
                result.custom_int_count = count;
            }

            if (key) {
                result[key] = field.value;
            }

            return result;
        }, {});

        Object.keys(customFieldsObject).forEach(key => {
            if (key.includes("_count")) {
                delete customFieldsObject[key];
            }
        });


        const formattedCollection = {
            ...other,
            user_id: user_id,
            ...customFieldsObject,
        };

        createCollection(formattedCollection)
    };

    return (
        <div>
            <div className="col-md col-sm-12 col-xs-12 container-main d-flex flex-row align-items-center login p-0 mt-5">
                <div className="col-md-12 d-flex flex-column align-items-center session-overlay justify-content-center mt-5">
                    <div className="input-box col-md d-flex flex-column align-items-center justify-content-center">
                        <div className="intro">
                            <span className="line" />
                            <h4 className="intro__title">Создать новую коллекцию</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">Название:</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={newCollection.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="name">Описание:</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={newCollection.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <Form.Group controlId="formFile" className="mb-3"
                                        type="file"
                                        name="image_url"
                                        value={newCollection.image_url}
                                        onChange={handleInputChange}>
                                <Form.Label>Изображение:</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Select aria-label="Default select example"
                                         type="text"
                                         name="theme_id"
                                         value={newCollection.theme_id}
                                         onChange={handleInputChange}
                            >
                                <option>Тема:</option>
                                {theme.map((theme) => (
                                    <option key={theme.id} value={theme.id}>
                                        {theme.title}
                                    </option>
                                ))}
                            </Form.Select>

                            <div>
                                <label htmlFor="customFieldType">Тип нового поля:</label>
                                <select
                                    id="customFieldType"
                                    name="customFieldType"
                                    value={customFieldType}
                                    onChange={handleCustomFieldTypeChange}
                                    className="form-select form-select-sm"
                                >
                                    <option value="">Выберите тип</option>
                                    <option value="string">String</option>
                                    <option value="boolean">Boolean</option>
                                    <option value="text">Text</option>
                                    <option value="date">Date</option>
                                    <option value="integer">Integer</option>
                                </select>
                                <button type="button"  onClick={addCustomField}>
                                    Добавить свое поле
                                </button>
                            </div>
                            {newCollection.customFields.map((customField, index) => (
                                <div key={index}>
                                    <label htmlFor={`customField${index}`}>{customField.type}:</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        id={`customField${index}`}
                                        name={`customField${index}`}
                                        value={customField.value}
                                        onChange={(e) =>
                                            handleCustomFieldValueChange(index, e.target.value)
                                        }
                                    />
                                </div>
                            ))}
                            <button type="submit" className="btn btn-success float-end mt-3">создать</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCollection;