import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchArtlce} from './../actions/articleAction'
class ArticleList extends Component {
    componentDidMount(){
        this.props.fetchArtlce()
        console.log("artlce in list", this.props.article)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mTp = (centralStore) => {
    return{
        article: centralStore.articleR.articles
    }
    
}
export default connect(mTp, {fetchArtlce}) (ArticleList)

