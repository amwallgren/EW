import centuryEgg from '../../images/centuryEgg.png';
import cuyRoastedGuineaPig from '../../images/cuyRoastedGuineaPig.png';
import fermentedBirdInSeal from '../../images/fermentedBirdInSeal.png';
import illegalCheese from '../../images/illegalCheese.png';
import lobster from '../../images/lobster.jpg';
import mellifiedMan from '../../images/mellifiedMan.jpg';
import pickledSheepsEye from '../../images/pickledSheepsEye.jpg';
import snails from '../../images/snails.jpg';
import surstromming from '../../images/surstromming.jpg';
import './Menu.css';

//to-do: add divs around everything for styling
// figure out how to attach "fact-field" next to pictures.

export const Menu = () => {
    return (
        <>
        <div className='menuWrapper'>

            <div>
                
                <img className='centuryEgg' src={centuryEgg}></img>
                <p>century egg</p>
            </div>

            <div>
                
                <img className='cuyRoastedGuineaPig' src={cuyRoastedGuineaPig}></img>
                <p>Cuy, a roasted gunea pig delicacy from peru, I think</p>
            </div>

            <div>
                <img className='fermentedBirdInSeal' src={fermentedBirdInSeal}></img>
                <p>Kiviak, a fermented bird in seal skin, Island, I think</p>
            </div>

            <div>
                <img className='illegalCheese' src={illegalCheese}></img>
                <p>illegal in the EU cheese, larves, nice. </p>
            </div>

            <div>
                <img className='lobster' src={lobster}></img>
                <p>Lobster, for the weak</p>
            </div>

            <div>
                <img className='mellifiedMan' src={mellifiedMan}></img>
                <p>mellification is sort of mummufication. Healing properties. </p>
            </div>

            <div>
                <img className='pickledSheepsEye' src={pickledSheepsEye}></img>
                <p>Pickled sheeps eye in tomato juice. A Mongolian delicacy, <br />
                    sometimes referred to as the "Mongolian Mary". <br />
                    This soup originated from Djingis Khans era,
                    and is said to be a great hangover cure.
                </p>
            </div>

            <div>
                <img className='snails' src={snails}></img>
                <p>snails, God said theyre not food. no need to count calories then. </p>
            </div> 

            <div>
                <img className='surstromming' src={surstromming}></img> 
                <p className='surstrommingText'>surströmming, Swedish ""delicacy"". To be enjoyed in our surströmming-booth. </p>
            </div>

        </div>
        </>
    )
}