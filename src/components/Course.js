/*
const Course = ({ course}) => {
    const total = course.reduce(
        (a, b) => a + b.parts.exercises,
        0
    );
  
return (
    <div>
            {course.map(index =>
        <ul key={index.id}>
        {index.name}
         </ul>
            )} 
          {course.map(index =>
          <ul key={index.parts}>
              {console.log(index.exercises)}
              {index.exercises}
          </ul>
            )}  
            total of {total} exercises
           
    </div>
)
}
*/


/*
const Sum = ({course}) => {
    const sum = course.map(part => part.exercises)

    return (
        <div>
      Total {sum.reduce((a,b) => a +b)} of exercises
        </div>
    )
}
*/


/*
const Header = ({course}) => {
    const parts = course.map(index => index.parts)
    const buffer = []
    const buffer1 = []
    
   for (var i = 0; i < parts.length; i++) {
       const name = parts[i].map(index => index.name)
       const exercises = parts[i].map(index => index.exercises)
       buffer.push(<div>{name}</div>)
       buffer1.push(<div>{exercises}</div>)
   }
    return (
<div>
   {buffer.map(index => 
    <ul key={index.id} >
        <li> {index}</li>
    </ul>
    )}
    {buffer1.map(index => 
       <ul key={index.id}>
       <li> {index}</li>
       </ul>
       )}
</div>
    )
}
*/
/*
const Header = (course) => {
    return (
    <h1>
        {course.name}
    </h1>
    )
}

const Content = (course) => {
   console.log(course.parts)
 return (
     <div>
      {course.parts.map(index => <Part key={index.id} exercises={index.exercises} name={index.name} />)}
     </div>
 )
}

const Part = (props) => {
    console.log(props)
    return (
    <div>
        {props.name} {props.exercises}
    </div>
    )
}

const Total = (course) => {
    const sum = course.parts.map(index => index.exercises)

    return (
        <div>
            total of {sum.reduce((a,b) => a + b)} exercises
        </div>
    )
}

const Course = ({props}) => { 

  console.log(props)
    return (
        <div>
           
        </div>
  )
}
*/

const Header = (props) => {
    return (
        <h1>
            {props.course.name}
            </h1>
    )
  
}

const Total = (props) => {
  const parts = props.course.parts.map(course => course.exercises)

  return (
    <div>
      total of {parts.reduce((s, p) => s + p)} exercises
    </div> 
  )
}

const Part = (props) => {
    console.log(props)
    return (
        <div>
{props.name} {props.exercises}
        </div>
        
    )
    
}




const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(index => <Part key={index.id} name={index.name} exercises={index.exercises} />)}  
        </div>
    )
}
const Course = (props) => {   
console.log(props)
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
  )
}


export default Course