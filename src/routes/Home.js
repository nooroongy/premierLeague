const Home = ({ clubs }) => {
    return <>
        {clubs.map((v, i) => <div key={i}>Home {v}</div>)}
    </>
}

export default Home