import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const API_KEY = "a3ca81dafa8c280c6b0144a73271a3ce"

export default class Recipe extends Component {
  
    state = {
        activeRecipe: []
    }
     componentDidMount = async () => {
        const title = this.props.location.state.recipe      
        const req = await fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        const res = await req.json()  
        this.setState({
            activeRecipe: res.recipes[0]
        })        
        // console.log('----',this.state.activeRecipe) 
     }  

    render(){
           const recipe = this.state.activeRecipe
        // console.log(this.props.location.state.recipe) 
     return(
        <div className="container">
            { this.state.activeRecipe.length !==0 &&
                <div className="active-recipe">
                    <div className="recipes__box">
                        <div className="recipe__text">
                            <img src={recipe.image_url} alt={recipe.title} className="active-recipe__img"/>
                                <h3 className="active-recipe__title">{recipe.title}</h3>
                                <h4 className="active-recipe__publisher">Publisher: <span>{recipe.publisher}</span></h4>
                                <p className="active-recipe__website">
                                    Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                                </p>
                                <p className="active-recipe__website">
                                Direct url: <span><a href={recipe.source_url}>{recipe.source_url }</a></span>
                                </p>
                            <button className="active-recipe__button">
                                <Link to={{
                                    pathname:`/`                                                   
                                    }}> На главную </Link>
                            </button>
                        </div>
                    </div>     
                </div> 
            }                  
        </div>
     )
  }
}