const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.content[0].part}: {props.content[0].exercises}</p>
      <p>{props.content[1].part}: {props.content[1].exercises}</p>
      <p>{props.content[2].part}: {props.content[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const content = [{part: "Fundamentals of React", exercises: 10}, {part: "Using props to pass data", exercises: 7}, {part: "State of a component", exercises: 14}]
  return (
    <div>
      <Header course = "Half Stack Application Development"/>
      <Content content = {content}/>
      <Total exercises = {content}/>
    </div>
  )
}

export default App