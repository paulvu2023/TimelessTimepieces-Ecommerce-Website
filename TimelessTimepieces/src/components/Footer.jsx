import { Link } from "react-router-dom"
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            ROLEX
                        </FooterLink>
                        <FooterLink href="#">
                            PATEK PHILIPPE
                        </FooterLink>
                        <FooterLink href="#">
                            AUDEMARS PIGUET
                        </FooterLink>
                        <FooterLink href="#">
                            OMEGA
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                        <FooterLink href="#">
                            Blank
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-x-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;