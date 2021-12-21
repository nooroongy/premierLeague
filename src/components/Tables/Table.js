

const Table = ({ clubs }) => {
    return <div>
        Table component
        {clubs.map((v, i) => <div key={i}>{v}</div>)}
    </div>
}

export default Table