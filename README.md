# OctoberCMS + React.js

This is a repository with the minimal configuration and with some utils components to get started with OctoberCMS and React.js.

## Components documentation

### ListPosts

Source: `src/components/containers/ListPosts.js`

Properties:

- item **{Component}** - the item component that represent each post.

Usage:

You can use this component with a custom item or `li`, per example:

```jsx
const Item = (props) => (
  <li>{props.post.title}</li>
)
```

In the `Item` component you can get all the data of the post through the `props.post`.

```jsx
ReactDOM.render(
  <ListPosts item={Item} />,
  document.getElementById('root')
)
```