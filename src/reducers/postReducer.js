const postReducer = (state = [], action) => {
    console.log("type:"+action.type);
    switch(action.type) {
        case 'ADD_POST' :
            return state.concat([action.data]);
        case 'DELETE_POST' :
            return state.filter((post)=>post.id !== action.id);
        case 'EDIT_POST' :
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.Editing}:post)
        case 'UPDATE' :
            return state.map((post)=>{
                if(post.id === action.id){
                    return{
                        ...post,
                        title:action.data.newTitle,
                        message:action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}

export default postReducer;