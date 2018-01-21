import React, { Component } from 'react'
import octRequest from '../../octRequest'

class ListPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const that = this

    octRequest('onGetBlogPosts').then(function(response) {
      const posts = response.data

      if (posts.length) {
        that.setState({ posts })
      }
    })    
  }

  render() {
    const Item = this.props.item

    return (
      <ul>
        {this.state.posts.map((post, index) => <Item post={post} key={index} />)}
      </ul>
    )
  }
}

export default ListPosts