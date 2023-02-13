import React, { useEffect, useState } from 'react'
import './StudentInfo.css'
import { getUser } from '../services/student.service'
import Dialog from '@mui/material/Dialog';

function StudentInfo(props) {
    const [userDetail, setUserDetail] = useState({
        userName:"nmnm",email:"laeeq11@gmail.com"
    })
    const [data,setData]= useState(null)
    const fetchData = ()=>{
        console.log(props.userDetail);
        return new Promise((resolve, reject)=>{
            const data1 =  getUser(props.userDetail)
            resolve(data1)
        })
        
        }
    useEffect(()=>{
        // const user = getUser(userDetail)
        fetchData().then((res)=>{
               setData(res.data);
        })  
   },[])
    return (
        <>
            <div className="student-profile py-4">
            <Dialog
        fullScreen

         open={props.open}
        //  onClose={props.handleClose}        
      >
        
        <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent text-center">
                                    <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                                    <h3>{data?.firstName || ' '} {data?.lastName || ""}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Student ID:</strong>{data?.userName || ""}</p>
                                    <p className="mb-0"><strong className="pr-1">Course:</strong>{data?.courseName || " " }</p>
                                    <p className="mb-0"><strong className="pr-1">city:</strong>{data?.city || " "}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th width="30%">Roll</th>
                                            <td width="2%">:</td>
                                            <td>125</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Academic Year	</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Blood</th>
                                            <td width="2%">:</td>
                                            <td>B+</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Fees</th>
                                            <td width="2%">:</td>
                                            <td>Paid</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div style={{ height: '26px' }}></div>
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </Dialog>
              
            </div>
        </>
    )
}

export default StudentInfo