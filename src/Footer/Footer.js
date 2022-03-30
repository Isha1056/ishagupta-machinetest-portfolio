import React from "react";
import './Footer.css'

export default function Footer() {
    return (

        <footer className="nb-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <img className="img-responsive center-block GDSCLogo" alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                            <p>Designed and developed by Isha Gupta</p>
                            <div className ="social-media">
                            { <ul className ="list-inline">
                            <li className="list-inline-item"><a href="#" title="" target="__blank"><i className ="fa fa-linkedin"/></a></li>
                            <li className="list-inline-item"><a href="#" title="" target="__blank"><i className ="fa fa-instagram"/></a></li>
                            <li className="list-inline-item"><a href="#" title="" target="__blank"><i className ="fa fa-github"/></a></li>
                            <li className="list-inline-item"><a href="#" title="" target="__blank"><i className ="fa fa-google"/></a></li>
                            </ul> }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}