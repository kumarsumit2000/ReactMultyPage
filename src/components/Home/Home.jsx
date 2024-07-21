import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text-1">Hello 👋, My Name is</div>
                <div className="text-2">Sumit Kumar</div>
                <div className="text-3">And I am a <span className="element">Frontend developer</span></div>
                <div className="btn_2nd"><a href="https://wa.me/+917042784535?text=Hi" target="_blank"><Link>Hire me</Link></a></div>
            </div>
            <div id="img">
            </div>
        </div>
    );
}
