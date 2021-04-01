import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <>
            <footer class="page-footer" id="page-footer">
                <div class="container">
                    <div class="row center">
                        <a class="github" href="https://github.com/project32257138/meetdog"><h5 class="white-text">Github</h5></a>
                        <ul>
                            <a href="https://github.com/project32257138/meetdog"><i class="fa fa-github small white-text textlighten-4"
                            id="github"></i></a>
                        </ul>
                        {/* <div class="col l3 m12 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div> */}

                        
                    </div>
                </div>
                <div class="footer-copyright center" id="footer-copyright">
                    <div class="container" id="footer-copyright-text">
                        © 2021 Puppy Love
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;