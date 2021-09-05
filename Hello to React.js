const render = () => {
    document.getElementById('mountNode').innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${new Date().toLocaleTimeString()}</pre>
      </div>
    `;
  
    ReactDOM.render(
      React.createElement(
        'div',
        null,
        'Hello React',
        React.createElement('input', null),
        React.createElement('pre', null, new Date().toLocaleTimeString())
      ),
      document.getElementById('mountNode2')
    );
  };
  
  setInterval(render, 1000);

  function Button (props) {
    return React.createElement( "buttton",
    { type: "submit" }, props.label);
}

//bx3

ReactDOM.render(React.createElement (Button, { label: "Save"}), 
mountNode);

function button () {
    return <div>My Fancy Button</div>;
};

ReactDOM.render(<button />, mountNode);


const Button = ({ label }) => (
    <button type="submit">{label}</button>
);


//bx4

const RandomValue = () => (
    <div>
        { Math.floor(Math.random() * 100)}
        </div>
   
);

ReactDOM.render(<RandomValue />, mountNode);

//bx5

const ErrorDisplay = ({ message }) => (
    <div style={ { color:'red', backgroundColor: 'yellow' } }>
        {message}
    </div>
);

ReactDOM.render(

    <ErrorDisplay 
    message="These aren't the droids you're looking for"
    />,
    mountNode
);


//bx6

class ConditionalStyle extends React.Component {
    render() {

        return (
            <div style={{ color: Math.random() < 0.5? 'green': 'red'}}>
                How do you like this?
            </div>
        );
    }
}

ReactDOM.render(

    <ConditionalStyle />,
    mountNode,
);


//bx7 -- Save Button

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.label}</button>
        );
    }
}


//bx8

const Button = ({ clickValue, clickAction }) => {
    return (
      <button onClick={() => clickAction(clickValue)}>
        +{clickValue}
      </button>
    );
  };
  
  const Display = ({ content }) => (
    <pre>{content}</pre>
  );
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = (increment) =>
      setCount(count + increment);
  
    return (
      <div>
        <Button clickAction={incrementCounter} clickValue={1} />
        <Button clickAction={incrementCounter} clickValue={5} />
        <Button clickAction={incrementCounter} clickValue={10} />
        <Display content={count} />
      </div>
    );
  }
  
  ReactDOM.render(<CountManager />, mountNode);

//bx10

const CharacterCounter = () => {
  return (
    <div>
    <textarea cols={80} rows={10} />
    <div>Count: X</div>
    </div>
  );
};

ReactDOM.render(<CharacterCounter />, mountNode);