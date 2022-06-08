import './App.css';
import { connect } from 'react-redux';


function App(props) {
  const increment=()=>{
    props.dispatch({type:'INC'})
  }
  const decrement=()=>{
    props.dispatch({type:'DEC'})
  }
  const reset=()=>{
    props.dispatch({type:'RES'})
  }
  return (
    <div className="App">
      <h2 style={{textAlign:"center"}}>counter</h2>
      <button style={{backgroundColor:'green'}} onClick={increment}>+</button>
      <br />
      <span>{props.count}</span>
      <br />
      <button style={{backgroundColor:'red'}} onClick={decrement}>-</button>
      <br />
      <br />
      <button style={{backgroundColor:'orange'}} onClick={reset}>RESET</button>
    </div>
  );
}
const mapStateToProps=(state)=>({
  count:state.count
});
export default connect(mapStateToProps)(App);
