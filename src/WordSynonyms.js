import React,{Component} from 'react'
import {variables} from './Variables.js'
import './style.css'
import LoadingSpinner from "./spiningCircle";

export class WordSynonyms extends Component{

    constructor(props){
        super(props); 
        this.state={
            Synonyms:[],
            loading: false
        }
    }

    /* setting word constant value from the input box*/
    searchWord =(e)=>{              
        this.setState({word:e.target.value})
    }

    /*call Web API for search synonyms of word in input box */
    searchSynonyms(word){
        
        fetch(variables.API_URL + word.toLowerCase(),{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({Synonyms:data}); 
            this.setState({loading: false});
        })
        .catch(error => {console.error('Unable to get items.', error); this.setState({loading: false});}
        );
    }
    

    render(){
        const {
            Synonyms,
            word,
            loading
        }=this.state;
    

        return(
            <div>

                <div className="input-group mb-3">
                    <span className='input-group-text'>Word</span>
                    <input type='text' className='form-control'
                    onChange={this.searchWord}/>
                    <button type="button" className="btn btn-light btn-outline-primary mr-1" disabled={loading}
                        onClick={()=>{this.searchSynonyms(word); this.setState({loading: true});}}
                        >Search
                    </button>
                </div>

                {loading ? <LoadingSpinner/> : 
                <table className='table table-striped'>
                    <thead>
                        <tr><th>Synonyms</th></tr>
                    </thead>
                    <tbody>
                        {Synonyms.map(syn=>
                            <tr >
                                <td>{syn}</td>
                            </tr>

                        )}
                    </tbody>
                </table>}
            </div>
        )
    }
}