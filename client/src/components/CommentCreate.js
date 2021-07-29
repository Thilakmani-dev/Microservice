import React,{useState} from 'react';
import axios from 'axios';
const CommentCreate = ({postId}) => {
    const [content,setcontent] = useState('');
    const submitEventHandler = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });
        setcontent('');
    }
    return (
    <div>
        <form onSubmit={submitEventHandler}>
            <div  className="form-group">
                <label> New Comment</label>
                <input className="form-control" value={content} onChange={e=>setcontent(e.target.value)}/>
                </div>
    <button className="btn btn-primary">Submit</button>
    </form>
    </div>
)
}
export default CommentCreate;