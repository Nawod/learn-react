import React from "react";
// import './blogCard.css';
import classes from './blogCard.module.css';

const BlogCard = (props) => {

    // const likeClick = () =>{
    //     this.setState((prevState, prevProps) => {
    //         return {
    //             likeCount : prevState.likeCount + 1
    //         }
    //     });
    // }



        return(
            <div className={classes.card}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>Like Count : 
                    <span className = {classes.LikeCount}>
                        {props.likeCount}
                    </span>
                </p> 
                <button onClick = {props.likeClick}>Like</button>
            </div>
        );
}

export default BlogCard;