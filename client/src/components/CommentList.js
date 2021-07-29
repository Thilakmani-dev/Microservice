import React from 'react';

const CommentList = ({comments}) => {
    const Rendercomments = () =>
    comments.length !== 0 ?  <div>{comments.map(comment=><li key={comment.id}>{comment.content}</li>)}</div> : <div>No comments</div>
    return <ul>
        <Rendercomments/>
    </ul>
}

export default CommentList