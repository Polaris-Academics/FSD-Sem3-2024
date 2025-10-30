import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearPosts, fetchPosts } from '../features/fetchData/fetchSlice';

const FetchData = () => {
    const {items,isLoading,isError} = useSelector(state => state.myFetchPosts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    },[])

    if(isLoading) return <>Loading.....</>
    if(isError) return <>Error Found.....</>

  return (
    <div>
        <button onClick={() => dispatch(clearPosts())}>Clear</button>
        <div>
            {items.map((item) => {
                return(
                    <div key={item.id}>
                        <span>{item.id}</span>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FetchData