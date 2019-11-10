let state;

function reducer(state = { count: 0 }, action){
  switch(action.type){
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    case 'DECREASE_COUNT':
      if(state.count > 0) return { count: state.count - 1 };
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action);
  render();
}

function render(){
  document.getElementById('container').textContent = state.count;
}

dispatch({ type: '@@INIT' });

let buttonUp = document.getElementById('buttonUp');
let buttonDown = document.getElementById('buttonDown');

buttonUp.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'});
});

buttonDown.addEventListener('click', () => {
  dispatch({type: 'DECREASE_COUNT'});
});
