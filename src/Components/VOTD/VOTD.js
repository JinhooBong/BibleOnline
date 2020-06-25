import React, {useState} from 'react';
import classes from './VOTD.module.css';
import Verse from '../Verse/Verse';

const VOTD = () => {

    let [responseObj, setResponseObj] = useState({});

    function getVOTD() {

        setResponseObj({});

        fetch("https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=Luke&chapter=1&VerseFrom=5&VerseTo=6", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
                "x-rapidapi-key": "87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8"
	        }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
        })
        .catch(err => {
            console.log(err);
        });

    }

    return (
        <div className={classes.verse_box}>
            <p className={classes.VOTD_title}>Verse of the Day</p>
            <button onClick={getVOTD}>Click</button>
            <Verse responseObj={responseObj}/>
        </div>
    )
}

export default VOTD;