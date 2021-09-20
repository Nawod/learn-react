import React from "react";
// import './blogCard.css';
import classes from './blogCard.module.css';

const BlogCard = (props) => {
    return(
        <div className={classes.card}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default BlogCard;