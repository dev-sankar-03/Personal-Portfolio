'use client';

import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";

export default function NavBar(){
    return(
        <>
            <Navbar sticky="top" className="portfolio-navbar">
                <Container className="navbar-container">
                    <div className="inner-container">
                        <div className="name-container">
                            <span>Sankar</span>
                        </div>
                        <div className="pages-nav-container">
                            <div className="page-url">
                                <Link href="/">Home</Link>
                            </div>
                            <div className="page-url">
                                <Link href="/About">About</Link>
                            </div>
                            <div className="page-url">
                                <Link href="/Portfolio">Portfolio</Link>
                            </div>
                            <div className="page-url">
                                <Link href="/Contact">Contact</Link>
                            </div>
                        </div>
                        <div className="resume-btn-container">
                            <span>View My Resume</span>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}