import React,{useState} from 'react';
import axios from 'axios';

function PostCreate(){
    const [title,settitle] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts',{
            title
        })
        alert('Post Successfully')
        settitle('')
    }
return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                    <input className="fomr-control" onChange={e=>settitle(e.target.value)} value={title}/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
)
}

export default PostCreate;