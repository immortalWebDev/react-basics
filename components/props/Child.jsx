import GrandChild from "./GrandChild"

const Child = ({name,job}) => {

    return(
        <>
        <GrandChild name={name} job={job}/>
        </>
    )

}

export default Child