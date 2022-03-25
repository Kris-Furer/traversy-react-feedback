import { useState} from 'react'
import {useContext} from ' react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import {FaTimes } from 'react-icons/fa'
function FeedbackItem({item}) {
 
 
    return (
    <Card reverse = {true}>
        <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem