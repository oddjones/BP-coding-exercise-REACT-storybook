import React from 'react'
import {MenuIcon, MoreIcon} from '../icons/AllIcons'

const HeaderBar = () =>{
    return(
        <header className="navbar columns">
            <section className="navbar-section col-xs-1">
                <button className="btn s-circle">
                <MenuIcon svgidx="MainMenu-0"/>
             </button>
            </section>
            <section className="column col-6 col-xs-9 col-mx-auto">
                <form className="navbar__searchform columns col-gapless">
                    <div className="column col-1 navbar__searchicon">
                        <label htmlFor="searchBox" >
                            <span className="text-assistive">search</span
                            ><svg 
                            role="img" 
                            aria-labelledby="search-icon-title" 
                            viewBox="0 0 32 32" 
                            height="32" 
                            width="32">
                                <title id="search-icon-title">Search</title>
                                    <path d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm4.707-1.293a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1-1.414 1.414l-2.829-2.829a1 1 0 0 1 0-1.414z" fill="#0B75B7"/>
                                <g fill="none" fillRule="evenodd"></g></svg></label> 
                    </div>
                    <div className="form-group column col-11">
                        <input className="form-input" type="text" id="searchBox" placeholder="Search processes, workers, tags" />
                    </div>
                </form>
            </section>
            <section className="navbar-section">
                    <button className="btn s-circle">
                    <MoreIcon svgidx="More-0"/>
                    </button>
            </section>
        </header>
    )
}

export default HeaderBar