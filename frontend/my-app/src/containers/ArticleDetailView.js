import React from 'react';
import axios from 'axios';
import { Card } from 'antd'

class ArticleDetail extends React.Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }
    render() {
        return (
            <Card title={this.state.article.title}>
                <div style={{ marginBottom: '20px' }}>
                    <img width={600} src={this.state.article.ImageUrl} ></img>
                </div>
                <p>{this.state.article.content}</p>
                <p style={{ color: "red" }}>{this.state.article.description}</p>
            </Card>
        )
    }
}

export default ArticleDetail;