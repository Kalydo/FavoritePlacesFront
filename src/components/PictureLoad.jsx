import React, { Component } from 'react'

class PictureLoad extends Component{

    constructor(props){
        super(props);
        this.state = {
             title: 'test',
             desc: '',
             pic: ''
        }

        this.onClicked = this.onClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(this.state.title)
        this.setState({[event.target.name]: event.target.value})
    }

    onClicked(){
        
    }

    render(){
        return(
            <div>
                <div>
                    <div className="form-group strong">
                        <label htmlFor="formGroupExampleInput">Title</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Description</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" name="desc" placeholder="Description" value={this.state.desc} onChange={this.handleChange}/>
                    </div>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.handleChange}></input>
                        <button type="submit" className="btn btn-primary" onClick={this.onClicked}>Submit</button>  
                </div>
             </div>
        )
    }
}

export default PictureLoad