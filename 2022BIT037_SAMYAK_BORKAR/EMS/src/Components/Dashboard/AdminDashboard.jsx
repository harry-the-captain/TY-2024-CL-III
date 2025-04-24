import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
  
  return (
    <>
  <div className='p-6'>
    <Header/>
  </div>
  <div className="text-center mb-8 mt-2">
        <h1 className="text-white text-4xl font-bold">Admin Panel</h1>
        <div className="bg-[#1C1C1C] text-white p-8 rounded-lg w-full max-w-md mx-auto mt-8">
            <div className="flex items-center mb-6">
                <i className="fas fa-arrow-left text-white mr-2"></i>
                <h2 className="text-xl font-bold">Create Task</h2>
            </div>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-left">Task Title</label>
                    <input type="text" placeholder="Make a UI design" className="w-full p-2 bg-gray-700 text-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-left">Description</label>
                    <textarea placeholder="Detailed description of task (Max 500 word)" className="w-full p-2 bg-gray-700 text-gray-300 rounded h-24"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-left">Date</label>
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full p-2 bg-gray-700 text-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-left">Assign To</label>
                    <input type="text" className="w-full p-2 bg-gray-700 text-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-left">Category</label>
                    <input type="text" placeholder="Design, Development, etc..." className="w-full p-2 bg-gray-700 text-gray-300 rounded" />
                </div>
                <button type="submit" className="w-full bg-black text-white py-2 rounded">Create Task</button>
            </form>
        </div>
    </div>
    </>
);
}

export default AdminDashboard
