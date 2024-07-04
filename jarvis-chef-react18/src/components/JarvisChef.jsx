import React, { useState } from 'react'
import { askJarvisChef } from '../utils/askJarvisChef';
const JarvisChef = () => {
  const [recipeMessage, setRecipeMessage] = useState('');
  const [recipe, setRecipe] = useState('')
  const handleInputChange = (e) => {
    setRecipeMessage(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res_recipe = await askJarvisChef(recipeMessage)
    setRecipe(res_recipe)
  }

  return (
    <>
      <h1>Ask Your recipes - Jarvis 'Master Chef'</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={recipeMessage} onChange={handleInputChange} placeholder='ask your recipes' />
        <button>Ask</button>
      </form>
      <pre>{recipe}</pre>
    </>
  )
}

export default JarvisChef