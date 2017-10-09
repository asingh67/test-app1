import React from 'react';

const dateDisplay = (dateString) => {
    return new Date(dateString).toDateString();
};

const Article = (props) => {

    const {article, actions} = props;
    const author = actions.lookUpAuthor(article.authorId);
    
    return (
        <div>
            <hr/>
            <div><h2>{article.title}</h2></div>
            <div>{dateDisplay(article.date)}</div>
            <div>{article.body}</div>
            <div>{author.firstName} {author.lastName}</div>
            <hr/>
        </div>
    );
};

export default Article;