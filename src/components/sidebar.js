import React, { Component } from 'react'
import styled from 'styled-components'

import { sidebarWidth } from '../utils/constants'

import logo from '../images/logo-ub.svg'

const SidebarWrap = styled.div`
    width: ${sidebarWidth};
    height: 100%;
    padding: 30px 0;
    z-index: 9;
`

const SidebarCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    height: 100%;
    width: ${sidebarWidth};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
    background: #fff;
    padding: 3rem;
    box-shadow: 5px 0px 15px -5px #c1c1c1;
`

const SidebarLogo = styled.img`
    display: block;
    height: 80px;
    object-fit: contain;
    object-position: center;
`

const SidebarTabs = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
`

const SidebarTab = styled.li`
    cursor: pointer;
    margin-bottom: 1rem;
`

SidebarTab.Span = styled.span`
 position: relative;

    &:before{
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        height: 4px;
        width: calc(100% + .5rem);
        background: #3fa9f5;
        opacity: .5;
        background-blend-mode: overlay;
        z-index: -1;

        transition: transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: ${props => ` scaleX( ${props.active ? `1` : `0`} )`};
        transform-origin: left center;
    }
`

const SidebarSpan = styled.span`
    cursor: pointer;
`


class Sidebar extends Component {
    state = {
        activeTab: 'do'
    }

    _changeActiveTab = tab => this.setState({ activeTab: tab })

    render() {
        const { activeTab } = this.state
        return (
            <SidebarWrap>
                <SidebarCard>
                    <SidebarLogo src={logo} alt="Utkarsh Bhimte" />

                    <SidebarTabs>

                        <SidebarTab onClick={_ => this._changeActiveTab('do')}>
                            <SidebarTab.Span active={activeTab === 'do'}>Things I do</SidebarTab.Span>
                        </SidebarTab>

                        <SidebarTab onClick={_ => this._changeActiveTab('know')}>
                            <SidebarTab.Span active={activeTab === 'know'}>Things I know</SidebarTab.Span>
                        </SidebarTab>

                        <SidebarTab onClick={_ => this._changeActiveTab('made')}>
                            <SidebarTab.Span active={activeTab === 'made'}>Things I made</SidebarTab.Span>
                        </SidebarTab>

                    </SidebarTabs>

                    <SidebarSpan>+utkarshbhimte</SidebarSpan>
                </SidebarCard>
            </SidebarWrap>
        )
    }
}

export default Sidebar