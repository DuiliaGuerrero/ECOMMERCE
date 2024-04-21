import React, { useState } from 'react';
import './form-product.css'

export const CreateArticle = ({ buttonCreateArticle }) => {
    const [articleData, setArticleData] = useState({
        title: '',
        description: '',
        price: 0,
        image: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setArticleData({
            ...articleData,
            [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        buttonCreateArticle(articleData);
        console.log('Artículo creado:', articleData);
        setArticleData({
            title: '',
            description: '',
            price: 0,
            image: ''
        })
    }

    return (
        <section className="container">
            <section className="form_area">
                <h2 className="title">Crear artículo</h2>
                <form>
                    <article className="form_group">
                        <label className="sub_title" htmlFor="title">Título</label>
                        <input
                            className="form_style"
                            type="text"
                            name="title"
                            id="title"
                            value={articleData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </article>
                    <article className="form_group">
                        <label className="sub_title" htmlFor="image">Imagen</label>
                        <input
                            className="form_style"
                            type="text"
                            name="image"
                            id="image"
                            value={articleData.image}
                            onChange={handleInputChange}
                            required
                        />
                    </article>
                    <article className="form_group">
                        <label className="sub_title" htmlFor="description">Descripción</label>
                        <textarea
                            className="form_style"
                            name="description"
                            id="description"
                            value={articleData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </article>
                    <article className="form_group">
                        <label className="sub_title" htmlFor="price">Precio</label>
                        <input
                            className="form_style"
                            type="number"
                            name="price"
                            id="price"
                            value={articleData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </article>
                    <button type="submit" className="btn" onClick={ handleSubmit }>Crear artículo</button>
                </form>
            </section>

        </section>
    );
};
