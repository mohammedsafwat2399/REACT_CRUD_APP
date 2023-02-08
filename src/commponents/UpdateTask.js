import React , {useState , useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector  , useDispatch} from 'react-redux';
import { updateTaskToList } from '../store/taskSlice';


const MyVerticallyCenterdModal = (props) => {
    const dispatch = useDispatch()
    const {selectedTask} = useSelector((state) => state.task)
    const [title , setTitle] =useState('')
    const [id , setId] =useState(0)
  const [description , setDescription] =useState('')
  const updateTask = (e) =>{
    e.preventDefault()
    dispatch(updateTaskToList({id,title, description}))
    props.onHide()
  }
  useEffect(()=>{
    if(Object.keys(selectedTask).length !== 0){
    setTitle(selectedTask.title)
    setDescription(selectedTask.description)
    setId(selectedTask.id)
    }
  },[selectedTask])
  return (
    <Modal
    {...props}
    size='lg'
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">UpdateTask</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className='mb-3' controlId='fromBasicEmail'>
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control type='text'  required placeholder='Enter Task title ' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='fromBasicEmail'>
                    <Form.Label>Task Description </Form.Label>
                    <Form.Control type='text'  required placeholder='Enter Task Description ' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
             <div className='text-end'>
                <Button type='submit' variant='primary' onClick={(e)=> updateTask(e)}>
                    UpdateTask
                </Button>
            </div>
         </Modal.Footer>
    </Modal>
   )
}

export default MyVerticallyCenterdModal