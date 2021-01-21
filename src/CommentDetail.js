import React from 'react';
import Faker from 'faker';

const CommentDetail = (props)=>{
    return(
        <div className="ui dividing header">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.imagePath} />
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">
                {props.dateTime}
                </span>
            </div>
            <div className="text">
                Nice Blog post!
            </div>
        </div>
    )
}
export default CommentDetail;