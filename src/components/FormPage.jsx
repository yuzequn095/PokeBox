import { useState } from 'react';
import '../css/FormPage.css';

function FormPage({setTrainerName}){

    const[submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        const submitInfo = e.target.elements;
        setTrainerName(submitInfo[0].value);
    }

    return(
        <div>
            {!submit && 
            <form onSubmit={(e) => {handleSubmit(e); setSubmit(true)}}>
                <label id="user_name">
                    <span>Trainer's Name (*required):</span>
                    <input name="name" required></input>
                </label>
                <label id="user_email">
                    <span>Trainer's E-mail:</span>
                    <input name="email" type="email"></input>
                </label>
                <label id="annoy_checkbox">
                    <input type="checkbox" name="annoy_me"></input>
                    <span>Are you above 18 years old? (*required)</span>
                </label>
                <label id="pokemon_selector">
                    <select name="pokemon" required>
                        <option value="">Do you have prefer first partner Pokémon? (*required)</option>
                        <option value="1">Charmander</option>
                        <option value="2">Bulbasaur</option>
                        <option value="3">Squirtle</option>
                        <option value="4">Anyone, I love them all.</option>
                    </select>
                </label>
                <input type="submit" value="Submit" id="submit_button"></input>
            </form>}
            {submit &&
            <div> Thanks for your sign up! We have update your user name in top right! Enjoy! </div>
            }
            
        </div>
    );
}

export default FormPage;