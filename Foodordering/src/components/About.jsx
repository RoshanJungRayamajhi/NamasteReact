import React from 'react'
class About extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      count1:1,
    }
  }
  render(){
     const {name ,location} =this.props;
    return(<>
      <div>
        <h3>count:{this.state.count}</h3>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>click</button>
        <h2>my name is {name}</h2>
        <h2>location:{location}</h2>
        <h2>hobby:cricket</h2>
      </div>
      </>
    )
  }
}
  export default About;