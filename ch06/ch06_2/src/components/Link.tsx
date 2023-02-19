import type {FC} from 'react'
import type { LinkProps as PRLinkProps } from 'react-router-dom'
import { useResolvedPath, useMatch } from 'react-router-dom'
import {Link as PRLink} from 'react-router-dom'

export type LinkProps = PRLinkProps & {}

export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
  const resolved = useResolvedPath(to)
  console.log('resolved', resolved)
  const match = useMatch({path: resolved.pathname, end: true})
  console.log('match', match)  
  const className = [_className, match ? 'btn-active' : ''].join(' ')
  return <PRLink {...props} to={to} className={className} />
}