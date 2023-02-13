import { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { WidthHeight } from './WidthHeight';
import type { LeftRightTopBottom } from './LeftRightTopBottom';

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & LeftRightTopBottom & {
  src?: string
}

//prettier-ignore
export const Div: FC<DivProps> = ({width, height, style: _style, src, className: _clasName, left, right, top, bottom, ...props}) =>
  {
    const style = {..._style, width, height,backgroundImage: src && `url(${src})`,
    left, right, top, bottom}
    const className = ['box-sizing', src && 'bg-gray-300', _clasName].join(' ')
    return <div {...props} className={className} style={style} />
  }