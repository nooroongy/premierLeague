import '../css/select.css'

const Card = ({option}) =>{
    console.log(option)
    return (
        <select>
            {
                option.map((v,i)=>{
                    return <option value={v.value}>{v.label}</option>
                })
            }
        </select>
        // <div className='select-wrap'>{
        //     option.map((v,i)=>{
        //         <></>
        //     })
        // }</div>
    )
}

export default Card;