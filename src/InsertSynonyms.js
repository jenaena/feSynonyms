import React,{Component} from 'react';
import {variables} from './Variables.js'
import './style.css'
import LoadingSpinner from "./spiningCircle";


export class InsertSynonyms extends Component{
    
    constructor(props){
        super(props); 
        this.state={
            word: null,
            synonyms: null,
            loading: false
        }
    }

    setSynonymsValue =(e)=>{              
        this.setState({synonyms:e.target.value})
    }

    setWordValue =(e)=>{              
        this.setState({word:e.target.value})
    }

    insertSynonyms(word, synonyms)
    {
        //splits synonyms 
        var words = synonyms.split(" ");

        for (var i = 0; i <= words.length - 1; i++) {

            //enables search in both directions eg. if a wash is a synonym to clean, then clean is a synonym to wash
            //that is reason for two API calls
            Promise.all([fetch(variables.API_URL + word.toLowerCase() + '/' + words[i].toLowerCase(),{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }), fetch(variables.API_URL + words[i].toLowerCase() + '/' + word.toLowerCase(),{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })])
            .catch(error => {console.error('Unable to set item.', error); this.setState({loading: false});})
            .finally(() => this.setState({loading: false})); 
        }
      
    }
    
    
    render(){
        const {
            word,
            synonyms,
            loading
        }=this.state;
        
        return(
            
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" >Word</span>
                    <input type="text" className="form-control" onChange={this.setWordValue}/>
                </div>
                <div className="input-group mb-3">
                    <span className='input-group-text'>Synonyms</span>
                    <input type='text' className='form-control' placeholder = 'Insert synonyms separated by white spaces'
                    onChange={this.setSynonymsValue}/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-light btn-outline-primary" onClick={()=>{this.insertSynonyms(word, synonyms); this.setState({loading: true});}} disabled={loading}>
                    {loading ? <LoadingSpinner/> : <span>Submit</span>}
                    </button>
                </div>
            </div>
        )
    }
}
