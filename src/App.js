import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const fun = [
    {
      "id": "1",
      "name": "school1",
      "since": "2020-01-20"
    },
    {
      "id": "2",
      "name": "school2",
      "since": "2020-10-24"
    },
    {
      "id": "3",
      "name": "school3",
      "since": "2021-01-18"
    }
  ]
  const data = fun.map((name) => <li key={name}>{name}</li>)

  const api = [{
    "id": "1",
    "school-id": "1",
    "students": [
      {
        "student-id": "B102",
        "assignment": ""
      }
    ],
    "status": "ACTIVE"
  }]
  const [dat, setDat] = useState([]);
  const fetchdata = () => {
    return fetch(api).then((res) => res.json()).then((d) => setDat(d))
  }
  useEffect(() => {
    fetchdata();
  }, []);
  { dat.map((dataObj, index) =>) }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{[data.name, data.id,data.id.since]}</h1>
      <h1>API DATA</h1>
      <li>
        {[dataObj.id, dataObj.school-id, dataObj.delete.student-id,dataObj.delete.assignment]}
      </li>
    </div>
  )
  
}

export default App
