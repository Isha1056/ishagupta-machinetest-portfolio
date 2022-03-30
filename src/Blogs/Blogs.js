import React, { useEffect, useState } from "react"
import './Blogs.scss';
import Popup from "reactjs-popup";
import Warper from "./Warper";

const contentStyle = {
    maxWidth: "600px",
    width: "90vw",
  };

function Blogs() {

    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container PanelistContainer">
            <div className="row justify-content-md-center">
                <div className="col col-lg PanelHeading">
                    Blogs
                    <span className="gradient"></span>
                    <span className="dodge"></span>
                </div>
            </div>
            {users.length > 0 && (
                <div className="row justify-content-md-center">
                    {users.map(user => (

                        <Popup
                            trigger={
                                <div className="col col-lg-4 col-md-6 col-sm-12">
                                    <div className="box">
                                        <div className="imgBx">
                                            <img src="https://picsum.photos/300" alt="STAR-WARS-THE-FORCE" />
                                        </div>
                                        <div className="content">
                                            <h2>{user.title}<br /><span>ID: {user.id}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            }
                            modal
                            contentStyle={contentStyle}
                        >
                            {close => (
                                <div className="modal">
                                    
                                    <div className="header"> {user.title} </div>
                                    <div className="content">
                                        <img src="https://picsum.photos/300" className="popupimg"/>
                                        {" "}
                                        {user.body}
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="button"
                                            onClick={() => {
                                                console.log("modal closed ");
                                                close();
                                            }}
                                        >
                                            close modal
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>





                    ))}
                </div>
            )}
        </div>
    );

}

export default Warper(Blogs)