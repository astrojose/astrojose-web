import React from 'react'

const CategoryHeader = (props) => {
  return (
    <div class="category-header">
      <div className='title'>{props.title}</div>
      <div className="more"><a id="a-link"  href="/blog"> See More ... </a></div>
    </div>
  )
} 
export default CategoryHeader