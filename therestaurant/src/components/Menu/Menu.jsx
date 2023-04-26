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
// fix sizing

export const Menu = () => {
    return (
        <>
        <div className='menuWrapper'>
            <img className='centuryEgg' src={centuryEgg}></img>
            <img className='cuyRoastedGuineaPig' src={cuyRoastedGuineaPig}></img>
            <img className='fermentedBirdInSeal' src={fermentedBirdInSeal}></img>
            <img className='illegalCheese' src={illegalCheese}></img>
            <img className='lobster' src={lobster}></img>
            <img className='mellifiedMan' src={mellifiedMan}></img>
            <img className='pickledSheepsEye' src={pickledSheepsEye}></img>
            <img className='snails' src={snails}></img> <br />
            <img className='surstromming' src={surstromming}></img> <br />
        </div>
        </>
    )
}