import React, { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Test() {
    const [selectedTab, setSelectedTab] = useState('posts') 
    const [titleWeb, setTitleWeb] = useState('')
    const [contents, setContents] = useState([])
    const [goToTop, setGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = titleWeb
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${selectedTab}`)
            .then(res => res.json())
            .then(data => {
                setContents(data)
            })
    }, [selectedTab])

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <div>
            <h1>{width}</h1>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    style={ tab === selectedTab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                >
                    {tab}
                </button>
            ))}

            <input 
                value={titleWeb}
                onChange={(e) => setTitleWeb(e.target.value)}
            />

            <ul style={{ listStyle: 'none' }}>
                {contents.map(content => (
                    <li key={content.id}>
                        <h2>{content.title || content.name}</h2>
                        {content.url && (
                            <img src={content.url} alt="" style={{ width: 200, height: 200}} />
                        )}
                    </li>
                ))}
            </ul>

            {goToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default Test;
