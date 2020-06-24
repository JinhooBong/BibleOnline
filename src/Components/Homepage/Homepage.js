import React from 'react';
import classes from './Homepage.module.css';
import VOTD from '../VOTD/VOTD';

const Homepage = () => {
    return (
        <div>
            <div className={classes.App_header}>
                <h2 className={classes.Title}>_Bible</h2>
            </div>
            <div className={classes.App_body}>
                <VOTD />
            </div>
        </div>
    )
}

export default Homepage;



// 7f494f789399b09200563da65154adb8 - bible api key