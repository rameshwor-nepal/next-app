import { BlogCard, BlogList } from '@/components/blogs/BlogCard'
import React from 'react'

const Blogs = () => {
    return (
        <main className=" mb-16 overflow-hidden flex flex-col gap-12 mx-16 items-center justify-center">
            <h2 className='font-bold text-5xl mt-10 text-center'>
                Reading And Writing enriches understanding.
            </h2>
            <ul className='grid grid-cols-3 gap-16'>
                <BlogCard
                    title='Build a custom full stack website from next js'
                    time='9 min read'
                    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur provident magnam officiis voluptatum vero reiciendis esse repudiandae expedita officia corporis ipsa incidunt quis, assumenda inventore accusantium? Sed, ullam explicabo!"
                    link="#"
                    image='/hero.png'
                />
                <BlogCard
                    title='Build a custom full stack website from next js'
                    time='9 min read'
                    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur provident magnam officiis voluptatum vero reiciendis esse repudiandae expedita officia corporis ipsa incidunt quis, assumenda inventore accusantium? Sed, ullam explicabo!"
                    link="#"
                    image='/hero.png'
                />
                <BlogCard
                    title='Build a custom full stack website from next js'
                    time='9 min read'
                    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur provident magnam officiis voluptatum vero reiciendis esse repudiandae expedita officia corporis ipsa incidunt quis, assumenda inventore accusantium? Sed, ullam explicabo!"
                    link="#"
                    image='/hero.png'
                />
            </ul>
            <h2 className='font-bold text-3xl my-8 w-full text-center'>
                All Articles
            </h2>
            <ul className='w-full'>
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
                <BlogList
                    title='New Title New Title New'
                    date='12 April 2024'
                    image='/hero.png'
                    link='#'
                />
            </ul>
        </main>
    )
}

export default Blogs