import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <Todos />
    </div>
  );
};

export default App;
