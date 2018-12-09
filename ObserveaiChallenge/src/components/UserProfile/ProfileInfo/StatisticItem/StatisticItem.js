import React from 'react';
import classes from './StatisticItem.module.css';

const StatisticItem = (props)=>{
    return (
        <div className={classes.StatisticItem}>
            <p className={classes.Value}>{props.value}</p>
            <p className={classes.Title}>{props.title}</p>
        </div>
    );
}

export default StatisticItem;