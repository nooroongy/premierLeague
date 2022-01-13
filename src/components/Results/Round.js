import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from "react";
// import { database } from '../Firebase';
import { FB_DB } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'holderjs';

const Round = ({roundInfo}) => {
    const [index, setIndex] = useState(0);
    const [roundArray, setRound] = useState([
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38
    ]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        roundInfo(selectedIndex+1)
    };

    const colName = "fixtures";
    // const usersCollectionRef = collection(database, colName);
    // useEffect(() => {
    //     const getResults = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         let tmpArray = [];
    //         for(let i=1; i<data.docs.length+1; i++){
    //             tmpArray.push(i);
    //         }
    //         setRound(tmpArray);
    //     };
    //     getResults();
    // }, []);

    useEffect(() => {
        FB_DB.get(colName).then(res => {
            let tmpArray = [];
            for(let i=1; i<res.length+1; i++){
                tmpArray.push(i);
            }
            setRound(tmpArray);
          });;
    }, [roundInfo]);

    const renderRound = () => {
        return (
            roundArray.map((v,i) => {
                return (
                    <Carousel.Item key={i}>
                        <img
                        className="d-block w-100"
                        data-src={"holder.js/800x400?text="+('Round '+(i+1))+"&bg=373940"}
                        alt={i+" Round"}
                        />
                    </Carousel.Item>
                )
            })
        )
    }
    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {renderRound()}
        </Carousel>
        </>
    );
}

export default Round;