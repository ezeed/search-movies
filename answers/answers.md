# Please answer the following questions to the best of your knowledge, in clear English. 
Elaborate and try to demonstrate the React knowledge you have. Feel free
to give examples and use cases. DO NOT USE ANY WEB OR OTHER RESOURCE.

1. What is the difference between Component and PureComponent? Give
an example where it might break my app.
> A PureComponent dispatch a re-render only when he state suffer a change.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?
> To be honest, I truly don't remember because im not been using Class Components in a while,
> But I assume it is possibly dangerous attach a LifeCycleHook to the state management.
> That probably ends with several unnecessary re-renders.

3. Describe 3 ways to pass information from a component to its PARENT.
> - Via regular props with a callback.
> - With a Context
> - Using a state management library like Redux or Zustand 

4. Give 2 ways to prevent components from re-rendering.
> - You can use `useMemo()` or `useCallback()` to prevent recalculate a values or a callbacks and prevent the re-render effect.
> - Attached to a single state you can use `useRef()`. Give the chance of update the state without re-renders. 

5. What is a fragment and why do we need it? Give an example where it might
break my app.
> Fragment is a solution that React provides for wrap elements. Because components are functions, must have only one return element.
 ```js
function HelloComponent() {
  return (
    <h1>Hello</h1>
    <p>How are you?</p>
  )
}
 ``` 

6. Give 3 examples of the HOC pattern.
> I'll provide the most simple example of the code in one example but this pattern is super helpful in a lot of scenarios:
> - For attach logic like a loading
> - Handle a theme style
> - Add logger actions
```js
const withGreetings = Component => {
  class HOC extends React.Component {
    super() {
      this.props()
    }
    render() {
        return <>
          <h1>Hello!</h1>
          <Component {...this.props} />
        </>
    }
  }
  return HOC
}

const Name = ({ name }) => <p>{name}</p>
const NameWithGreetings = withGreetings(Name)

const App = () => (
  <div className="App">
    <NameWithGreetings name='eze' />
  </div>
)
```


7. What's the difference in handling exceptions in promises, callbacks
and async...await?
> When an exception was thrown inside a regular callback you can't handle that error, the execution stop. In promises you can catch exceptions with `.catch()` function and this don't stop the execution. With `async...await` you must wrap the code in `try...catch` statement for handle the exception.


8. How many arguments does setState take and why is it async.
> `setState()` it's the setter function for `useState()` hook. You can pass one argument, a regular value or a callback. When you pass a regular value, this overrides the previous state. When you pass a callback you'got the previous state on the callback argument and that allows you to reuse that previous state for increase a number.

9. List the steps needed to migrate a Class to Function Component.
> - You must migrate the lifecycle hooks for react hooks like `useEffect()`
> - You must remove the `this` 
> - You must remove the `super()` for the initial props, now are passed by function param
> - You don't have a `render()` function anymore, instead must use the regular return of the function

10.  List a few ways styles can be used with components.
> - You can use regular module import css on each component
> - You can use a preprocessed css like SASS, that allows you to handle imports between css and then import in each component
> - You can use `styled-components` for extends stiles between components.
> - External library like Tailwind.css

11. How to render an HTML string coming from the server.
> I don't know if this solution is the best using react but with `DOMparser()` object you can create the DOM from string. I recently used with nodejs but honestly I don't know if is the best solution for react.

Results need to be submitted in a questions.md file, in the same
zipped repo as part 1.