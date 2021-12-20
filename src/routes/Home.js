const Home = ({ teams }) => {
    return <>
        {teams.map((v, i) => <div key={i}>Home {v}</div>)}
    </>
}

export default Home