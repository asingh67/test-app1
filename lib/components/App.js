import React from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import dataApi from '../dataApi';
import data from '../testData';
import ArticleList from './ArticleList';
import Login from './Login';

const api = new dataApi(data.data); 

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            articles : api.getArticles(),
            authors : api.getAuthors(),
        };
    }

    articleActions = {
        lookUpAuthor : (authorId) => this.state.authors[authorId]
    };

    render(){
        return(
            <BrowserRouter>
            <div>
                <Route path='/' component={LoginComp} />
                <Route path='/list' component={ALComp} />
            </div>
            </BrowserRouter>
        );
    }

}

const LoginComp = () =>{return <Login/> }
const ALComp = ()=> { return (<ArticleList 
    articles={this.state.articles}
    articleActions={this.articleActions}
    />);
}

export default App;