import PropTypes from 'prop-types';

function IntroductionCard({name, school, age, hobbyList, eyeColor, hairColor,height}) {

  // így is lehet destructuringolni a propsokat
  /* const {name, school, age, hobbyList, eyeColor, hairColor,height} = props
   */

  return (
    <div className="introduction">
      <p className="introduction__text">
        Hello, my name is {name}. I am a student at {school}, and I would like
        to be the best React developer in the world :). I am {age} years old, and
        my hobbies are {hobbyList.join(", ")}. My eye color is {eyeColor} and my hair color is: {hairColor}. My height is : {height}
      </p>
    </div>
  );

}
  IntroductionCard .propTypes = {
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbyList: PropTypes.arrayOf(PropTypes.string),
    eyeColor: PropTypes.string.isRequired,
    hairColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired
  }

  IntroductionCard.defaultProps = {
    hobbyList : []
  }

export default IntroductionCard;
