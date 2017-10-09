import React from 'react';
import dataApi from '../dataApi';
import data from '../testData';
import ArticleList from './ArticleList';

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
            <div> 
                <ArticleList 
                    articles={this.state.articles}
                    articleActions={this.articleActions}
                />
            </div>
        );
    }

}

export default App;