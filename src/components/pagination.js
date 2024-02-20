//components/pagination.js
import React from "react"
import { Link } from "gatsby"

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 2

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link to={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}