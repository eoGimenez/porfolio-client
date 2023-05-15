import './projectCard.css'
import { useState } from 'react'

export default function ProjectCard({ project, handleClick, showDetail }) {

    return (
        <section className='project__card'>
            {!showDetail && (
                <div className='project__container'>

                </div>
            )}
        </section>
    )
}