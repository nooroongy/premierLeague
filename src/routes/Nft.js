import Card from "../components/Card";
import Toogle from "../components/Toogle";
import Select from "../components/Select";

const Nft = () =>{
    return(
        <div>
            
            <Card>
                <Toogle></Toogle>
                <Select option={[
                    {label:'adsf1',value:'1'},
                    {label:'adsf2',value:'2'},
                    {label:'adsf3',value:'3'},
                ]}/>
            </Card>

        </div>
    )
}

export default Nft;