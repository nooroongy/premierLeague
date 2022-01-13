import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import '../../css/board.css';
// import { database } from '../Firebase';
import { FB_DB } from '../Firebase';
// import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import logoJson from '../../json/logo.json';

const Board = (roundObj) => {
    const [logoInfo, setLogo] = useState(logoJson);
    const [matchData, setData] = useState({});
    const roundInfo = roundObj.roundObj + "R";

    const colName = "fixtures";
    // const usersCollectionRef = collection(database, colName);
    // useEffect(() => {
    //     const getResults = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         // console.log(data.docs[0].id);       
    //         // console.log(data.docs[0].data());

    //         setData(
    //             data.docs.map((doc) => (doc.id === roundInfo ? {...doc.data()} : ""))
    //         );
    //     };
    //     getResults();
    // }, [roundInfo]);

    useEffect(() => {
        FB_DB.get(colName).then(res => {
            // console.log(res.filter(data => data.id === roundInfo)[0])
            setData(res.filter(data => data.id === roundInfo)[0]);
        });;
    }, [roundInfo]);

    // const testFirebaseSetDoc = () => {
    //     setDoc(doc(database, colName, "3R"), {
    //         match1 : {
    //             homeClub : {
    //                 clubName : "Wolverhampton Wanderers",
    //                 score : "0"
    //             },
    //             awayClub : {
    //                 clubName : "Manchester United",
    //                 score : "1"
    //             }
    //         }
    //     });
    // }

    // testFirebaseSetDoc();

    const renderMatches = (matchInfo,index) => {
        // return (
            // Object.keys(matchInfo).map((round, index) => {
                // console.log(round);
                const home = matchInfo["homeClub"];
                const away = matchInfo["awayClub"];
                return (
                    <Alert variant="info" key={index}>
                        <Container>
                            <Row>
                                <Col className="firstCol">
                                    {home.clubName}
                                    <img src={logoInfo[home.clubName]} />
                                </Col>
                                <Col className="secondCol">{home.score} : {away.score}</Col>
                                <Col className="thirdCol">
                                    <img src={logoInfo[away.clubName]} />
                                    {away.clubName}
                                </Col>
                            </Row>
                        </Container>
                    </Alert>
                )
            // })
        // )
    }

    return (
        <>
            {Object.keys(matchData).map((matchInfo,index) => {
                return (
                    matchInfo === 'id' ? '' : renderMatches(matchData[matchInfo],index)
                )
            })}
        </>
    );
}

export default Board;