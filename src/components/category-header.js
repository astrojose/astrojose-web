import React from 'react'

const CategoryHeader = (props) => {
  return (
    <div class="category-header">
      <span className='title'>{props.title}</span>
      <span className="more"><a id="a-link" href="/blog"> See More ... </a></span>
    </div>
  )
} 
export default CategoryHeader