import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components"

const Footer = () => {

    return (
        <FooterCont>
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link href="#">Add Project</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">User Dashboard</Link></li>
                            {/* <li><a href="#">Career</a></li> */}
                        </ul>
                    </div>

                    <div class="row">
                        ProjectDekho Copyright © 2023 - All rights reserved
                    </div>
                </div>
            </footer>
        </FooterCont>

    )
}

const FooterCont = styled.div`

.footer{
    background:#000;
    padding:30px 0px;
    font-family: 'Play', sans-serif;
    text-align:center;
    width: 100%;
    }
    
    .footer .row{
        display: block;
    width:100%;
    margin:1% 0%;
    padding:0.6% 0%;
    color:gray;
    font-size:0.8em;
    }
    
    .footer .row a{
        display: contents;
    text-decoration:none;
    color:gray;
    transition:0.5s;
    }
    
    .footer .row a:hover{
    color:#fff;
    }
    
    .footer .row ul{
    width:100%;
    }
    
    .footer .row ul li{
    display:inline-block;
    margin:0px 30px;
    }
    
    .footer .row a i{
    font-size:2em;
    margin:0% 1%;
    }
    
    @media (max-width:720px){
    .footer{
    text-align:left;
    padding:5%;
    }
    .footer .row ul li{
    display:block;
    margin:10px 0px;
    text-align:left;
    }
    .footer .row a i{
    margin:0% 3%;
    }
    }
`;




export default Footer
