import React from 'react';

const ArticleLikes = ({likes, addLikes}) =>{
    return (
        <div className="addlikes-wrapper">
            <h3>How do you feel about this</h3>
            <div className="addlikes-container">
                <div className="btn like" onClick={() => addLikes('like')}>
                    <div className="hits">{likes[0]}</div>
                    <div className="icons">
                    <i className="fa fa-thumbs-up"></i>
                    </div>
                </div>
                <div className="btn dislike" onClick={() => addLikes('dislike')}>
                    <div className="hits">{likes[1]}</div>
                    <div className="icons">
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleLikes;