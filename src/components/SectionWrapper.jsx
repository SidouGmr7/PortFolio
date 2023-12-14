import React from 'react'
import Scroll from '../components/Scroll'
import classNames from 'classnames'

export const SectionWrapper = ({ id, selector, title, className, children, pClassName }) => {
    return (
        <div className={classNames(className, 'relative w-full md:pt-16 pt-12 pb-20')} id={id}>
            {title && <p className={pClassName || 'headerTitle mb-10'}>{title}</p>}
            {children}
            {selector && <Scroll selector={selector} />}
        </div>
    )
}
