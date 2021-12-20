const Match = ({ teams }) => {
    return <>
        {teams.map((v, i) => <div key={i}>Match {v}</div>)}
    </>
}

export default Match