import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {

	let postsElements = props.postData.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;

		let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
		props.dispatch( action );
	};


	let oneAddTaskKeyPress = (e) => {
		if(e.key === 'Enter'){
			props.addPost();
		}
	};

	return (
		<div className={s.posts}>
			<div className={s.textArea}>
				<h3>My posts :</h3>
				<textarea onChange={onPostChange}
						  ref={newPostElement}
						  onKeyPress={oneAddTaskKeyPress}
						  value={props.newPostText}/>
				<div><button onClick={addPost}>Add Post</button></div>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
};

export default Posts;
