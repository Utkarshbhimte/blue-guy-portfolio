import React, { Component } from 'react'
import styled from 'styled-components';
import blueGuy from '../../images/blue-guy.png'

const AboutMeSection = styled.section`
    /* padding: 2rem 4rem; */
`

const BlueGuyFrame = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background: #3fa9f5;
    position: relative;
    z-index: 1;
    transition: all .6s ease;
    bottom: 0;
    top: 0;
    min-width: 450px;
    width: 30vw;
    margin: 0;
    background-attachment: fixed;
    background-position: 280px 130px;

    transform: ${props => `translateX(${props.active ? 0 : '-100%'})`};
`

const BlueGuyImage = styled.div`
/* margin-left: 30px; */
    height: 300px;
    width: 300px;
    border-radius: 50%;
    transition: all .6s ease;
    background-image: url(${blueGuy});
    background-color: #16345e;
    background-position: 80px 130px;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    background-attachment: fixed;
    background-position: 280px 130px;
`

class AboutMe extends Component {
    state = {
        active: false
    }
    render() {
        return (
            <AboutMeSection>

                <BlueGuyFrame active={this.state.active}>
                    <BlueGuyImage />
                </BlueGuyFrame>

            </AboutMeSection>
        )
    }
}

export default AboutMe