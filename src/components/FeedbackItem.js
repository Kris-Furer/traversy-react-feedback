import { useState} from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import {FaTimes, FaEdit } from 'react-icons/fa'
function FeedbackItem({item}) {
 
const { deleteFeedBack, editFeedback } = useContext(FeedbackContext)
    return (
    <Card reverse = {true}>
        <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <button className="edit">
                <FaEdit onClick={() => editFeedback(item)} color='purple'/>
            </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem