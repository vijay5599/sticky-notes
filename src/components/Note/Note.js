import React from 'react'
import deleteIcon from '../../assets/delete.svg'
import './Note.css'


let timer = 500, timeOut
export const Note = (props) => {


    const formatDate = (value) => {
        
        if(!value) return ""
        const date = new Date(value)
        const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

        let hrs = date.getHours()
        console.log(hrs)
        let amPm = hrs>12 ? "PM" :"AM";
        hrs = hrs ? hrs : "12";
        hrs = (hrs>12 ? hrs=(hrs%12) : hrs)

        let min = date.getMinutes();
        min = min<10?"0"+min:min

        let day = date.getDate()
        const month = monthNames[date.getMonth()]

        return `${hrs}:${min} ${amPm} ${day} ${month}`

    }

    const debounce = (func) => {
        clearTimeout(timeOut)
        timeOut = setTimeout(func, timer)

    }

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id))
    }
  
  return (
    <div className='note' style={{backgroundColor:props.note.color}}> 
        <textarea className='note_text custom-scroll' defaultValue={props.note.text} onChange={(event) => updateText(event.target.value, props.note.id) }/>
        <div className='note_footer'>
            <p>{formatDate(props.note.time)}</p>
            <img src={deleteIcon} alt='delete' onClick={() => props.deleteNote(props.note.id)} />
        </div>
    </div>
  )
}
