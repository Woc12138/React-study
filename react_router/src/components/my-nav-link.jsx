import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  // {...props}将外部传入的所有属性传递给NavLink
  return <NavLink {...props} activeClassName='activeClass'/>
}