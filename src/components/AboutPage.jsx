import '../css/AboutPage.css';
import {useState} from 'react';

function AboutPage(){

    const defaultFAQs = {
        'Whis is this website about?' : 'Hi, This is PokéBox! You can find out a lot of things about Pokémon here. Please free feel to hang out our website, or read Q&A first in this page.',
        'What is the About PokéBox Page?' : 'This is the page which could let you more about how to use our website. There are some common questions about this site, you only need to click the question and read the answer we provide.',
        'What is the Pokédex Page?' : 'In this Pokédex page, you can browse all the Pokémon registered in Pokédex so far. For good quality read experience, we will load at most 20 Pokémon at once, you can click the Previous or Next button to look for more Pokémons.',
        'What is the Build Team Page?' : 'Well, in Pokémon world, the trainer could build his/her own Pokémon team with at most six Pokémons to take an adventure. We are sorry to say we can not offer you a real Pokémon world here... However, after you have a look at our Pokédex, you can run a draft team composition in our site. You only need to enter the Pokémon ID or name and then click plus button, then we will register this Pokémon for you.',
        'What is the Membership Form Page?' : 'Every Pokémon trainer should be registerd for safe! Not exception here! If you love our website and wish to grow up with us. Please sign up and join us! Do not worry, everything is free here, and we do concert your privacy information',
        'What is the Privacy Page?' : 'Even in Pokémon world, the user privacy is a vital issue as well. We will let you know what we did to protect your privacy so that you can enjoy everything here!'
    }
    const [isEntryOpen, setIsEntryOpen] = useState({});

    function toggleEntry(title){
        setIsEntryOpen({
            ...isEntryOpen,
            [title]: !isEntryOpen[title],
        })
    }

    return(
        <div className="body__about">
            { Object.keys(defaultFAQs).map( title => {
                const isOpen = isEntryOpen[title];
                return (
                    <div key={title} className={`accordion__entry ${isOpen ? 'accordion__entry--open' : 'accordion__entry--close'}`}>
                        <button className='accordion__title' onClick={() => toggleEntry(title)}>{title}</button>
                        <div className='accordion__body'>{defaultFAQs[title]}</div>
                    </div>
                );
            })
            }
        </div>
    );
}

export default AboutPage;