import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import '../../css/board.css';
import { database } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Board = (roundObj) => {
    const [matchData, setData] = useState([]);
    const roundInfo = roundObj.roundObj+"R";

    const colName = "fixtures";
    const usersCollectionRef = collection(database, colName);
    useEffect(() => {
        const getResults = async () => {
            const data = await getDocs(usersCollectionRef);
            // console.log(data.docs[0].id);       
            // console.log(data.docs[0].data());

            setData(
                data.docs.map((doc) => (doc.id === roundInfo ? {...doc.data()} : ""))
            );
        };
        getResults();
    }, [roundInfo]);

    const renderMatches = (matchInfo) => {
        return (
            Object.keys(matchInfo).map((round, index) => {
                // console.log(round);
                const home = matchInfo[round]["homeClub"];
                const away = matchInfo[round]["awayClub"];
                return(
                    <Alert variant="info" key={index}>
                        <Container>
                            <Row>
                                <Col className="firstCol">{home.clubName}</Col>
                                <Col className="secondCol">{home.score} : {away.score}</Col>
                                <Col className="thirdCol">{away.clubName}</Col>
                            </Row>
                        </Container>
                    </Alert>
                )
            })
        )
    }

    return (
        <>
        {matchData.map((matchInfo) => {
            return(
                renderMatches(matchInfo)
            )
        })}
        </>
    );
}

export default Board;