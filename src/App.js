import React from 'react'

import ListPosts from './components/containers/ListPosts'
import ItemPost from './components/ItemPost'

const App = (props) => (
  <React.Fragment>
    <ListPosts item={ItemPost} />
  </React.Fragment>
)

export default App