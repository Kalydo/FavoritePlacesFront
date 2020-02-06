import React, { Component } from 'react';
import logo from './346px-Polarlicht_2.jpg';
import logo1 from './Titelbild_shutterstock.jpg';
import logo2 from './logo3.jpg';
import { Link,  } from 'react-router-dom';


class FavPlaces extends Component{

    constructor(props){
        super(props)
        this.state = {
            todo : [
                {id: 1, pic: logo, title : 'London', description: 'hier war ich in London und es war schön. das Polarlicht war ein atemberaubender anblick.', targetDate: new Date()},
                {id: 2, pic: logo1, title : 'Bern', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', targetDate: new Date()},
                {id: 3, pic: logo2, title : 'Italien', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', targetDate: new Date()},
                {id: 4, pic: logo, title : 'New York',description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',  targetDate: new Date()},
                {id: 5, pic: logo, title : 'London', description: 'hier war ich in London und es war schön. das Polarlicht war ein atemberaubender anblick.', targetDate: new Date()},
                {id: 6, pic: logo1, title : 'Bern', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', targetDate: new Date()},
                {id: 7, pic: logo2, title : 'Italien', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', targetDate: new Date()},
                {id: 8, pic: logo, title : 'New York',description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',  targetDate: new Date()}
          
            ] 
        }
    }

    render(){
        return (
            <div>
                <>
                    <div className="row">
                    {this.state.todo.map(
                        todo =>
                        <div className="card card-size" key={todo.id}>
                            <img className="card-img-top" src={todo.pic} alt=""/>
                            <div className="card-body vertical">
                                <h4 className="card-title">{todo.title}</h4>
                                <div className="">
                                    <p className="card-text">{todo.description}</p>
                                </div>
                                <div className="masterdiv">
                                    <button className="btn btn-danger"><Link to="/">Delete</Link></button>                       
                                    <button className="btn btn-info"><Link to="/picture">Update</Link></button>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </>
            </div>
        )
    }
}

export default FavPlaces