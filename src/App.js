import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./redux/actions/postAction";

function App() {
    const posts = useSelector((state) => {
        // console.log(state.postReducer.posts)
        return state.postReducer.posts;
    });

    const firstPostTitle = posts[0].title;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    if (posts.length > 0) {
        return (
            <>
                <div className="App">
                    <h1>{firstPostTitle}</h1>
                </div>
            </>
        );
    } else {
        return "not yet";
    }
}

export default App;





// import React from 'react';
// import './App.css';

// import { useSelector, useDispatch } from 'react-redux';
// import { SET_INCREMENT, SET_DECREMENT } from './redux/actions/counterAction'

// function App() {

//   const counter = useSelector( state => {
//     // console.log(state.countReducer.counter)
//     return state.countReducer.counter
//   });
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="App">
//         <div className="counter">
//           <h1>Current State of our Counter:</h1>
//           <h1>{counter}</h1>
//           <div>
//             <button onClick={(() => dispatch({type: SET_DECREMENT}))}>SUBTRACT</button>
//             <button onClick={(() => dispatch({type: SET_INCREMENT}))}>ADD</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
