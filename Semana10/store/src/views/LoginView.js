import {useState, useEffect} from 'react'
import imgLogin from "../assets/login.jpg"

export default function LoginView() {
    return (
        <div className="h-100 row">
            <div className="col-sm-12 col-md-6">
                <img 
                    src={imgLogin} 
                    style={{
                        width:'100%',
                        height:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen login"
                />
            </div>
        </div>
    )
}
