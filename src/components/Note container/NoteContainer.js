import React from 'react'
import { Note } from '../Note/Note'
import './NoteContainer.css'

export default function NoteContainer(props) {


    const reverseArray = (arr) => {
        const arra = []
        for(let i = arr.length -1; i >= 0; --i){
            arra.push(arr[i])
        }
        return arra
    }

    const notes = reverseArray(props.notes)
  return (
    <div className='note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
            {notes.length > 0 ?
                notes.map((item) => (
                    <Note key={item.id} note={item}
                    deleteNote={props.deleteNote}
                    updateText={props.updateText} />
                )) :
                <h3>Notes are not available</h3>
            }
        </div>
    </div>
  )
}
