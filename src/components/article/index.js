import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticleData, handleArticleLikes , clearArticleData} from '../../store/actions';

// sections 
import ArticleLikes from './likes'; 

class Article extends Component {
    componentDidMount(){
        this.props.dispatch(getArticleData(this.props.match.params.id));
    }

    addLikes = (type) => {
        const likes = this.props.articles.article[0].likes;

        const newLikes = type === 'like' ? 
                        [likes[0]+1, likes[1]] : [likes[0], likes[1]+1];
        this.props.dispatch(handleArticleLikes(newLikes, this.props.match.params.id));
    }

    componentWillUnmount(){
        this.props.dispatch(clearArticleData());
    }

    render() {
        const article = this.props.articles ? this.props.articles.article : null;
        return (
            <div className="news_container">
              {(
                  article ?
                        <div>
                            <div className="tags">
                                <span>
                                    <i className="fa fa-eye"></i>{article[0].views}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up"></i>{article[0].likes[0]}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down"></i>{article[0].likes[1]}
                                </span>
                            </div>
                            <div className="top">
                                <h2>{article[0].title}</h2>
                                <span>Article by: <strong>{article[0].author}</strong></span>
                            </div>
                            <img alt={article[0].title} src={`/images/articles/${article[0].img}`} />
                            <div className="body_news">
                                {article[0].body}
                            </div>
                            <div>
                                <ArticleLikes likes={article[0].likes} addLikes={type => this.addLikes(type)}/>
                            </div>
                        </div>
                    :null
              )}  
            </div>
        )
    }
}

function mapStateToProps(state){
    return { 
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Article);