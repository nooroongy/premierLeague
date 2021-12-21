const Results = ({ clubs }) => {
    return <>
        {clubs.map((v, i) => <div key={i}>Results {v}</div>)}
    </>
}

export default Results