## React Concepts

#### Downwards Data Flow

Only the most parent component should be responsible from fetching data. E.g. Flux, Component API.

## Class Based Components

1. Only class based components have state
2. Each instance of class based components has its own copy of state
3. Controlled components is kind of form element, like an input whose value is set by the state of the object and not the opposite

```
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}
```

## Funcional components

1. Doesn't have any state

```
const SearchBar = () => { render <div>Hello There!</div> };
```
