import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <h1>Copyrights &copy; {date.getFullYear()} </h1>
        </footer>
    )
}

export default Footer