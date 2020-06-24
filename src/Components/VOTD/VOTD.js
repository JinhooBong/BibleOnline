import React from 'react';
import classes from './VOTD.module.css';

const VOTD = () => {

    function getVOTD() {
        fetch("https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=Luke&chapter=1&VerseFrom=5&VerseTo=6", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
                "x-rapidapi-key": "87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8"
	        }
        })
        .then(response => response.json())
        .catch(err => {
            console.log(err);
        });

    }

    return (
        <div className={classes.verse_box}>
            <p className={classes.VOTD_title}>Verse of the Day</p>
            <button onClick={getVOTD}>Click</button>
        </div>
    )
}

export default VOTD;