import {useState, useEffect} from 'react'
import imgLogin from "../assets/login.jpg"

export default function LoginView() {
    return (
        <div className="row" style={{height:'calc(100vh - 60px)'}}>
            <div className="col-sm-12 col-md-6" style={{height:'100%',overflow:'hidden'}}>
                <img 
                    src={imgLogin} 
                    style={{
                        maxHeight:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen login"
                />
            </div>
        </div>
    )
}
