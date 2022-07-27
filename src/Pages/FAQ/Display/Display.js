import { useState } from 'react'
import React from 'react'
import './Display.css'
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Tanya from './Tanya.js'


function Display() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
        selected(i)
    }

    return (
        <div className="display-wrapper">
            <div className="accordion-display">
                {
                Tanya && Tanya.map((item, i) => (
                    <div key={item.id} className="item">
                        <div className="question-display" onClick={() => toggle(i)}>
                            <p>{item.pertanyaan}</p>
                            <div className="align-self-center">
                                {selected === i ? <AiOutlineUp className="nope"></AiOutlineUp> : <AiOutlineUp className="rotate"></AiOutlineUp>}
                            </div>
                        </div>
                        <div className={selected === i ? 'answer show' : 'answer'}><p>{item.jawaban}</p></div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Display;