import { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';
import SP from './SP';
import Clock from './Clock';




class App extends Component {
    constructor() {
        super()
        this.state ={
          robots: robots,
         searchfield:'',
         weathersearch:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            
            })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SP searchChange={this.on}/>
                <Clock/>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                    </div>
                );
            
    }
 

}
export default App;
