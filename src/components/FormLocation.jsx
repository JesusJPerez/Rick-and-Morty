import getRandomNumber from "../utils/getRandomNumber"
import "./styles/FormLocation.css"

const FormLocation = ({ setIdLocation }) => {

    const handleSumit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if(inputValue !== "" && inputValue !== 0 ){
            setIdLocation(e.target.inputId.value.trim())
        }else{
            setIdLocation(getRandomNumber(126))
        }
        e.target.inputId.value = ""
    }

    return (
        <form className="sumit" onSubmit={handleSumit}>
            <input className="sumit__imput" id="inputId" type="text"/>
            <button className="sumit__btn">Search</button>
        </form>
    )
}

export default FormLocation