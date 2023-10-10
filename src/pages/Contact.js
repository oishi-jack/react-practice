import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Contact = () => {
    return (
    <div className="form">
        <h1>お問合せフォーム</h1>
        <div className="input">
            <p>お名前</p>
            <input></input>
        </div>
        <div className="input">
            <p>メールアドレス</p>
            <input></input>
        </div>
        <div className="input">
            <p>本文</p>
            <input></input>
        </div>
        <div>
            <button type="button">送信</button>
            <button type="button">クリア</button>
        </div>
        
    </div>

)
}

export default Contact