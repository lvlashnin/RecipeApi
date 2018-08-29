import React from 'react'

const Recipes = props => (
    <form onSubmit={props.get_recipe} style={{ marginBottom:"2rem" }}>
        <input name="recipeName" className="form__input"/>
        <button className="form__button">Начать поиск...</button>
    </form>
)

export default Recipes