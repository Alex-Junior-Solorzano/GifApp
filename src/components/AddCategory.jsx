import { useCallback, useState } from "react"


export const AddCategory = ({onNewCategoria}) => {

  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = (event) => {
    
    setInputValue(event.target.value)
    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;

    onNewCategoria(inputValue.trim())
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type="text" 
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={ onInputChange }
        />
      </form>
    </>
  )
}

