import React from 'react'

function renderDatas({data})) {
    return (
        
        <div>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.imgUrl}</div>
            <div>{data.price}</div>
            <div>{data.sale}</div>
            <div>{data.marketPrice}</div>
        </div>
    )
}

export default renderDatas
