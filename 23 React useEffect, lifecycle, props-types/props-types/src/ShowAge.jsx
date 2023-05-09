import PropTypes from 'prop-types'; 


const ShowAge = ({name,age,statusCode,calculateInFiveYears,person}) => {
    console.log(statusCode);
    console.log(calculateInFiveYears(age));
    console.log(person);
  return (
    <>
    <div>{name} will be {age+1} years old next year!</div>
    </>
  )
}
ShowAge.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    statusCode: PropTypes.oneOf([
       'delivered','rejected','currier'
    ]),
    calculateInFiveYears: PropTypes.func,
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        hobbies: PropTypes.oneOfType([
            PropTypes.array, PropTypes.string
        ])
    })
}


export default ShowAge