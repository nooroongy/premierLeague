import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from "react";
import 'holderjs';

const Round = ({roundInfo}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        // console.log(selectedIndex)
        setIndex(selectedIndex);
        roundInfo(selectedIndex+1)
    };

    const renderRound = () => {
        return (
            [1,2].map((v,i) => {
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