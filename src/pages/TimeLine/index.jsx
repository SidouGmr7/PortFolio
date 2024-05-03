import React from 'react'
import { Timeline } from 'primereact/timeline'
import { Card } from 'primereact/card'
import { SectionWrapper } from '../../components/SectionWrapper'
import events from '../../data/TimeLine.json'
import './TimeLine.css'

export default function TimeLine() {
    const customizedMarker = (item) => {
        return (
            <span
                className='flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1'
                style={{ backgroundColor: item.color }}
            >
                <i className={item.icon}></i>
            </span>
        )
    }

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date} className='bg-[#1d2432]'>
                {item.text && <p className='text-[#e5e7eb]'>{item.text}</p>}
            </Card>
        )
    }

    return (
        <SectionWrapper
            id='timeLine'
            title='My experience'
            className='lg:pr-36 lg:pl-36 pr-4 pl-4'
        >
            <Timeline
                value={events}
                align='alternate'
                className='customized-timeline'
                marker={customizedMarker}
                content={customizedContent}
            />
        </SectionWrapper>
    )
}
