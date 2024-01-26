import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import Topbar from './Topbar';


function Dashboard() {
    let [user,setUser] = useState([])
  
    let navigate = useNavigate()

    let handleDelete = async(id)=>{
        try {
            let res = await AxiosService.delete(`/formikbookauthor/${id}`);
            if(res.status===200)
            {
                getData()
            }
        } catch (error) {
           console.log(error)
        }
    }

    const getData = async()=>{
        try {
            let res = await AxiosService.get('/formikbookauthor')
            if(res.status===200)
            {
                setUser(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{getData()},[])

    
  return <><Topbar/>
    <div id="content-wrapper" className="d-flex flex-column ">
        <div id="content">
            <div className="container-fluid w-90 p-3">
                {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    
                </div> */}
               
                <div className="row">
                <h2 style={{textAlign:"center"}}>Details of Books</h2>
                <Table striped bordered hover>
                   
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN No</th>
                        <th>Publication Date</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            user.map((e,i)=>{
                                return <tr key={e.id}>
                                    <td>{i+1}</td>
                                    <td>{e.Books.title}</td>
                                    <td>{e.Books.author}</td>
                                    <td>{e.Books.ISBNnumber}</td>
                                    <td>{e.Books.publicationDate}</td>
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/edituser/${e.id}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                                    </td></tr>})}
                    </tbody>
                </Table>

                <h2 style={{textAlign:"center"}}>Details of Author</h2>
                <Table striped bordered hover>
                   
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Author Name</th>
                        <th>Publish Date</th>
                        <th>Biography</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            user.map((e,i)=>{
                                return <tr key={e.id}>
                                    <td>{i+1}</td>
                                    <td>{e.Author.authorsname}</td>
                                    <td>{e.Author.birthdate}</td>
                                    <td>{e.Author.shortbio}</td>
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/edituser/${e.id}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                                    </td></tr>})}
                    </tbody>
                </Table>

                </div>
            </div>
        </div>
    </div>
  </>
}

export default Dashboard