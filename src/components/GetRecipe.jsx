import React,{Component} from 'react'
import Form from './Form';
import Recipes from './Recipes';

const API_KEY = "a3ca81dafa8c280c6b0144a73271a3ce"

export default class GetRecipe extends Component {
    state = {
        recipes: []
    }
    get_recipe = async (e) => {
        const recipe_name = e.target.elements.recipeName.value
        e.preventDefault()
        const api_call = await fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${recipe_name}&count=12`)
        const data = await api_call.json()
        this.setState({
            recipes: data.recipes
        })
        //  console.log('----',data)   
        // console.log('======',this.state.recipes)

    }
    componentDidMount=()=>{
        const json = localStorage.getItem("recipes")
        const recipes = JSON.parse(json)
        this.setState({recipes})
    }
    
    componentDidUpdate = ()=> {
        const recipes = JSON.stringify(this.state.recipes)
        localStorage.setItem("recipes",recipes)
    }
    

    render(){
        return(
            <div>
                <Form get_recipe={this.get_recipe}/>   
                <Recipes recipes={this.state.recipes}/>             
            </div>
        )
    }
}