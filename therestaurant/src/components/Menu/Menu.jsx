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

export const Menu = () => {
    return (
    <>
    <div className='menuWrapper'>
     <div>
        <img className='centuryEgg' src={centuryEgg}></img>
        <p>Century eggs, also known as preserved eggs or thousand-year eggs, are a Chinese delicacy made by preserving duck, chicken, or quail eggs in a mixture of clay, ash, salt, quicklime, and rice straw for several weeks to several months, depending on the desired taste and texture. The process of preservation causes the egg white to turn a translucent brown jelly-like texture,
        while the yolk becomes a greenish-grey, creamy substance with a pungent odor.
        Century eggs have a unique flavor that can be described as salty, 
        slightly sweet, and savory with a strong ammonia-like aroma.
        They are often used as an ingredient in savory dishes, such as congee,
        stir-fries, and noodle soups, and are considered a delicacy in many parts of China and Southeast Asia.
        While century eggs may be an acquired taste for some, they are a beloved food for many people who grew up eating them.
        </p>
     </div>

    <div>
    <img className='cuyRoastedGuineaPig' src={cuyRoastedGuineaPig}></img>
    <p>
    Cuy, also known as guinea pig, is a traditional dish in some parts of South America, particularly in the
    Andean region of Peru, Ecuador, and Bolivia. <br />
    The guinea pig is gutted, cleaned, and seasoned with salt and herbs, <br />
    then roasted whole over an open flame, <br />
    until the skin is crispy and the meat is tender.

    Cuy is considered a delicacy and is often served on special occasions. <br />
    It is said to have a rich flavor, similar to rabbit or dark chicken meat.
    </p>
    </div>

    <div>
    <img className='fermentedBirdInSeal' src={fermentedBirdInSeal}></img>
    <p> Kiviak, a traditional Inuit dish. 
    This meal will be hard to fins elsewhere, due to it's challenging and unique preparation process. <br />
    Several hundreds of Auks birds undergo a fermentation process by being sewn into the body cavity of a seal, <br />
    The fermentation process lasts for several months, with the seal skin stored somewhere like under a pile of rocks, <br />
    or in a snowdrift. 
    Due to the bacterial and enzymatic activity, these small seabirds undergo a complex process of fermentation. <br />
    The tissue is brokwn down and leaves a strong odor, and even stronger taste. 
    Served raw, per tradition, with the feathers and beaks removed. 
    
    This dish is highly a highly priced delicacy in Greenland, very rare. 
    Concidered a cultural treasue, and is mostly reserved for the most special occations, <br />
    like your first date, or wedding, for example? 
    </p>
    </div>

    <div>
    <img className='illegalCheese' src={illegalCheese}></img>
    <p>Casu Marzu. A traditional cheese from Sardinia. <br />
        Casu Marzu is illegal in most of europe due to its one of a kind making process. <br />
        It's made from sheeps milk, that is deliberately inflected with larvae to break down the fat in it <br />
        This is the secret to making the cheese soft and more purgent.  <br />
        The larves have a tencency to jump, and can sometimes blind the consumer of the cheese by getting in their eyes. 
        For this reason, <br />
        the cheese is not concidered safe for consumption, <br />
        and is illegal in most of EU. <br />
        how fresh the cheese is, is measured of the health of the jumping larves inside of it, if theyre dead, the cheese is no good <br />
        We, of course, only focus on maintaining the highest standard, <br />
        and will therefore always serve our Casu Marzu in the most fresh condition. <br />
    </p>
    </div>

    <div>
    <img className='lobster' src={lobster}></img>
    <p> Classic Lobster dish for our guests that want to play it safe. <br />
        This dish, however, has not always been a delicacy. <br />
        During the Americal Colonial era, lobsters were concidered the poor mans food, <br />
        and would mostly be served to prisoners. The prisoners complaints eventually got to the point <br />
        that it was included in their contracts to not serve lobster more than three times per week. <br />
        Today, lobsters have become more of a luxury item, so enjoy!
    </p>
    </div>

    <div>
    <img className='mellifiedMan' src={mellifiedMan}></img>
    <p>The Mellified Man. A rare and exclusive dining experince. <br />
        With it's orgins in ancient China and the Middle East, <br />
        it is prepared by submergering a cadaver in honey, leaving it for a few centuries <br />
        until the mummification process is completed. <br />
        The Mellified Man is believed to possess medicinal properties, <br />
        and has historically been used for treatment of anti-innflamation, pain-relief and healing of broken limbs. <br />
        Served with red wine. 
    </p>
    </div>

    <div>
    <img className='pickledSheepsEye' src={pickledSheepsEye}></img>
    <p>Pickled sheeps eye in tomato juice. A Mongolian delicacy, <br />
    sometimes referred to as the "Mongolian Mary". <br />
    soup originated from Djingis Khans era,
    and is said to be a great hangover cure.
    </p>
    </div>

    <div>
    <img className='snails' src={snails}></img>
    <p>
    Escargot snails. According to legend, this dish was popularized by the French monks, <br />
    since the Chatolic Churn prohibited consumtion of meat suring fasting periods.
    Monks began to eat snails as a substitute, since God for some reason didn't concider snails meat. <br />
    And therefore the monks did not break their fasts. 
    Out Escargots are served with butter, white bread and white wine as an appetizer. <br />
    Their chewy and slightly rubbery texture with with a mild, eartly flavor, enhanced <br />
    by out finest seasonings. 
    </p>
    </div> 

    <div>
    <img className='surstromming' src={surstromming}></img> 
    <p className='surstrommingText'>
    Fermented Baltic Herring, or as the traditional Swedish cousine calls it, "Surströmming". <br />
    This "delicacy" is made by fermenting the fish for several months, with just enough salt added to prevent it from completely rotting. <br />
    Surströmming is characterized by it's combination of a salty and sour flavor and unbearable foul smell. <br />
    Served with bread, butter, and potatoes in our exclusive surströmming-booth in order to not disturb our other guests. 
    </p>
    </div>

    </div>
    </>
  )
}