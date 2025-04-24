import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  //console.log(data)
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen'>
      <Header data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
