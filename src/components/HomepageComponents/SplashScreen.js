import React, { Component } from 'react';
import styled from 'styled-components'

import spotlight from '../../images/spotlight.png'
import boy from '../../images/blue-guy.png'

const SectionImageStyles = `
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    position: absolute;
    transition: all .001s ease-in-out;
`

const SplashScreenSection = styled.section`
    position: relative;
    height: calc(100vh - 8rem);
    color: white;
    overflow: hidden;
    background-color: #0A345F;
    background-repeat: no-repeat;
    background-size: auto 100vh;
    background-position: top center;
    background-attachment: fixed;
    background-blend-mode: multiply;
`

const SpotlightImage = styled.div`
    height: 200%;
    width: 100%;
    ${SectionImageStyles}
    top: -50%;
    left: 0;
    background-image: url(${spotlight});
    transform: ${props => `scale(  ${1 + (props.scrollProgress / 100)} ) translateY(${props.scrollProgress}px)`};
`

const BoyImage = styled.div`
    ${SectionImageStyles}
    height: 800px;
    width: 100%;
    z-index: 4;
    bottom: -300px;
    transform-origin: top;
    background-image: url(${boy});
    transform: ${props => `scale(  ${1 + (props.scrollProgress / 100)} ) translateY(${props.scrollProgress * .5}px)`};
`

const BigText = styled.h1`
    position: absolute;
    margin: 0;
    text-shadow: 0px 12px 20px #212121;
    font-size: ${props => props.size};
    top: ${props => props.top};
    left: ${props => `calc( 50% + ${props.left})`};
    transform: ${props => `translateX( -50% ) translateY(${props.scrollProgress * props.multiplier}px)`};
    z-index: ${props => props.zIndex};
    opacity: ${props => 1 - (props.scrollProgress * 2 / 100)};
    will-change: transform;
`


class SplashScreen extends Component {
    constructor() {
        super();

        this.state = {
            scrollProgress: 0
        }

        this.sectionRef = React.createRef();
    }

    componentDidMount() {
        !!window && window.addEventListener('scroll', this._updateScrollPosition)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._updateScrollPosition)
    }

    _updateScrollPosition = _ => {
        if (!!this.sectionRef.current) {
            const offsetHeight = this.sectionRef.current.clientHeight
            const offsetTop = this.sectionRef.current.clientTop

            const currentPosition = (!!window && window.scrollY) || 0

            if (currentPosition < offsetHeight) {
                const scrollProgress = parseInt(((currentPosition - offsetTop) / (offsetHeight - offsetTop)) * 100)
                this.setState({ scrollProgress })
            }
        }
    }


    render() {
        const { scrollProgress } = this.state
        return (
            <SplashScreenSection ref={this.sectionRef}>
                <SpotlightImage multiplier={.8} scrollProgress={scrollProgress} />
                <BoyImage multiplier={.8} scrollProgress={scrollProgress} />
                <BigText multiplier={1.1} scrollProgress={scrollProgress} size={'15rem'} top={'300px'} left={'-250px'} zIndex={3} >Code</BigText>
                <BigText multiplier={.2} scrollProgress={scrollProgress} size={'10rem'} top={'calc( 100% - 17rem)'} left={'-100px'} zIndex={5}>Innovation</BigText>
                <BigText multiplier={.5} scrollProgress={scrollProgress} size={'9rem'} top={'450px'} left={'210px'} zIndex={3}>Design</BigText>
                <BigText multiplier={2.5} scrollProgress={scrollProgress} size={'6rem'} top={'220px'} left={'140px'} zIndex={6}>Hack</BigText>
            </SplashScreenSection>
        );
    }
}



export default SplashScreen