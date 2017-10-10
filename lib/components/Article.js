import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
  } from 'material-ui/styles/colors';

  const style = {margin :5};


const dateDisplay = (dateString) => {
    return new Date(dateString).toDateString();
};

const Article = (props) => {

    const {article, actions} = props;
    const author = actions.lookUpAuthor(article.authorId);
    
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <Card>
                <CardHeader
                    title={article.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <Avatar icon={ <FontIcon className="muidocs-icon-communication-voicemail"/> } 
                    color={blue300}
                    backgroundColor={indigo900}
                    size={30}
                    style={style}
                />
                <CardTitle title={article.title} subtitle={dateDisplay(article.date)}/>
                <CardText expandable={true}>
                    <div>{article.body}</div>
                    <div>{author.firstName} {author.lastName}</div>
                    <Button className="primary" label="Click US" ></Button>
                </CardText>
            </Card>
        </div>
        </MuiThemeProvider>
    );
};

export default Article;