import React from 'react';
import classes from './Verse.module.css';

const Verse = (props) => {
    return (
        <div className={classes.VOTD_box}>            
            <p>{props.responseObj.Output}</p>
            <p className={classes.chapter}>{props.responseObj.Book} {props.responseObj.Chapter} : {props.responseObj.Verse}</p>
        </div>
    )
}

export default Verse;