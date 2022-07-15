import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Shop></Shop>

      <div className='mx-4'>
        <h3>How does react work?</h3>
        <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element</p>
        <h3>Different between State and Props</h3>
        <p> <span className='fs-2'>State:</span> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information.</p>
        <p> <span className='fs-2'>Props:</span> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
      </div>
    </div>



  );
}

export default App;
