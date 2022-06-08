import React,{Component} from 'react';

export class Home extends Component{

    
    render(){
        return(
            <div class="jumbotron">
                <h1>The definition of a synonym:</h1>
                <p className="lead">a word or phrase that means exactly or nearly the same as another word or phrase in the same language</p>
                <hr className="my-4"></hr>
                <p>eg. triumph is a synonym of victory</p>
            </div>
        )
    }
}