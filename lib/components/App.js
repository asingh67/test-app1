import React from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import dataApi from '../dataApi';
import data from '../testData';
import ArticleList from './ArticleList';
import Login from './Login';

const api = new dataApi(data.data); 

var history;
if (typeof(window) !== 'undefined'){
    history = createBrowserHistory();
}
else {
    history = createMemoryHistory(); //This kind of history is needed for server-side rendering.
}


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
            <Router history={history}>
                <div>
                    <Route path='/' component={LoginComp} />
                    <Route path='/list' component={ALComp} />
                </div>
            </Router>
        );
    }

}

const LoginComp = () =>{return (<Login/>); };
const ALComp = ()=> { return (<ArticleList 
    articles={this.state.articles}
    articleActions={this.articleActions}
/>);
};

export default App;