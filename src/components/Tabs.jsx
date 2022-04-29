import { useState } from "react";
import '../css/Tabs.css';
import AboutPage from './AboutPage';
import PokedexPage from './PokedexPage';
import TeamPage from './TeamPage';
import FormPage from './FormPage';
import PrivacyPage from "./PrivacyPage";
import logoImage from "../assets/pikachu-icon.png";

function Tabs( {entries} ){

    const [activeTab, setActiveTab] = useState('About PokéBox'); 
    const [trainerName, setTrainerName] = useState('Wild Trainer'); 
    const activeBody = { 
        'About PokéBox': <AboutPage />,
        'Pokédex': <PokedexPage />,
        'Build Team' : <TeamPage />,
        'Membership Form': <FormPage setTrainerName = {setTrainerName}/>,
        'Privacy Policy': <PrivacyPage/>,
    };



    return (
        <div className="tabs">
            <header>
                <nav className="logo_bar">
                    <img src={logoImage} alt="logo" />
                    <div className="header_text">
                        <h1>Welcome to PokéBox</h1>
                        <h2>Find fun things about Pokémon here</h2>
                    </div>
                </nav>

                <ul className="tabs__entry">
                    {entries.map(entryTitle => {
                        const entryClassName = activeTab === entryTitle ? 'tabs__title--active' : 'tabs__title--inactive';
                        return(
                            <li key={entryTitle}>
                                <button type="button" onClick={() => setActiveTab(entryTitle)} className={`tabs__title ${entryClassName}`}>{entryTitle}</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </header>

            <main>
                <div className="user__name">
                    Hello, {trainerName} <span>&#128516;</span>
                </div>

                <div className="tabs__body">
                    {activeBody[activeTab]}
                </div>
            </main>

            <footer>
                {trainerName === 'Wild Trainer' && <p className="footer__text">Thanks for your visit, please free to sign up our membership!</p>}
                {trainerName !== 'Wild Trainer' && <p className="footer__text">Nice to meet you, {trainerName}!</p>}
            </footer>
        </div>
    );

}

export default Tabs;