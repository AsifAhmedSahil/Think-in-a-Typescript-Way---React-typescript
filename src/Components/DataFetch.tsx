import React from 'react'

type DataFetchProps = {status: "success" | "error" | "loading"}



const DataFetch = ({status}: DataFetchProps) => {
    if(status === "loading"){
        return <h2>Data Loading...</h2>
    }
    if(status === "error"){
        return <h2>Error: not fetch data</h2>
    }
  return (
    <div>
        <h1>DataFetch Successfully</h1>
    </div>
  )
}

export default DataFetch