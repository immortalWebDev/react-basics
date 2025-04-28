import GreatGrandChild from "./GreatGrandChild"

const GrandChild = ({name,job}) => {

    return(
        <>
        <GreatGrandChild name={name} job={job}/>
        </>
    )

}

export default GrandChild