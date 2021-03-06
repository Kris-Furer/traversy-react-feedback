import { createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
const [feedback, setFeedback] = useState ([
    {
    id:1,
    text:'This item is from context',
    rating:10, 
},
])


const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit:false
})
// Add feeedback 
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    }

// Delete Feedback
    const deleteFeedBack = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' })
    
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

// Update Feedback item
const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {
     ...item, ...updItem   
    } : item ))
}


// Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }


    return <FeedbackContext.Provider value={
        {
            feedback,
            feedbackEdit, // the state that holds item and boolean 
            deleteFeedBack,
            addFeedback,
            editFeedback, // the function that runs when editing 
            updateFeedback
           
        }
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext