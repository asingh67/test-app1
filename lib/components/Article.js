import React from 'react';

const Article = (props) => {

    const {article, actions} = props;
    const author = actions.lookUpAuthor(article.authorId);
    
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>{article.body}</div>
            <div>{author.firstName} {author.lastName}</div>
        </div>
    );
};

export default Article;