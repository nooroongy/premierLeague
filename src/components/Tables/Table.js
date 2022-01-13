import '../../css/table.css'
import logoJson from '../../json/logo.json';

const Table = ({ clubs, matchs, round }) => {
    let tmpData = Object.fromEntries(new Map(
        clubs.map(club => { return [club, { won: 0, lost: 0, drawn: 0, gf: 0, ga: 0, gd: 0, pts: 0 }] })
    ))

    matchs.forEach(match => {
        const { home, away, score } = match;

        if (match.round <= round) {
            if (score[0] === score[1]) { //무승부
                tmpData[home].drawn++;
                tmpData[away].drawn++;
                tmpData[home].pts++;
                tmpData[away].pts++;
            } else {
                if (score[0] > score[1]) { // 홈팀승리
                    tmpData[home].won++;
                    tmpData[away].lost++;
                    tmpData[home].pts += 3;
                } else { // 어웨이팀 승리
                    tmpData[away].won++;
                    tmpData[home].lost++;
                    tmpData[away].pts += 3;
                }
            }

            //득점
            tmpData[home].gf += score[0];
            tmpData[away].gf += score[1];

            //실점
            tmpData[home].ga += score[1];
            tmpData[away].ga += score[0];

            //득실
            tmpData[home].gd += score[0] - score[1];
            tmpData[away].gd += score[1] - score[0];
        }
    })

    const resultData = Object.keys(tmpData).map(club => {
        return {
            club: club,
            ...tmpData[club]
        }
    }).sort((a, b) => { return b.gf - a.gf }).sort((a, b) => { return b.gd - a.gd }).sort((a, b) => { return b.pts - a.pts })

    return <div className='table__wrap'>
        <span className='table__header'>
            <span>Position</span>
            <span>Club</span>
            <span>played</span>
            <span>Won</span>
            <span>Drawn</span>
            <span>Lost</span>
            <span>GF</span>
            <span>GA</span>
            <span>GD</span>
            <span>Points</span>
        </span>
        {resultData.map((v, i) =>
            <span
                className='table__list'
                key={i}>
                <span>{i+1}</span>
                <span>
                    <img src ={logoJson[v.club.replaceAll('_',' ')]}></img>
                    {v.club.replaceAll('_',' ')}
                </span>
                <span>{round}</span>
                <span>{v.won}</span>
                <span>{v.drawn}</span>
                <span>{v.lost}</span>
                <span>{v.gf}</span>
                <span>{v.ga}</span>
                <span>{v.gd}</span>
                <span>{v.pts}</span>
            </span>)}
    </div>
}

export default Table