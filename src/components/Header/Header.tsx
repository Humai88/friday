import React, { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

type NavLinksTestType = {
    path: string
    text: string
};

type PropsType = HTMLAttributes<HTMLElement> & {
    arrayLinks: NavLinksTestType[]
    testPage?: boolean
    profilePage?: boolean
}

export const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={props.className}>
            {props.testPage && props.arrayLinks.map((l, i) => <NavLink key={i} to={l.path}>{l.text}</NavLink>)}

            {props.profilePage &&
            <div className="container inner-header">
                <h1>It-incubator</h1>
                <nav className="profile-nav">
                    {props.arrayLinks.map((l, i) => <NavLink
                        key={i} activeClassName={"active"}
                        to={l.path}>{l.text}
                    </NavLink>)}
                </nav>
            </div>}
        </header>
    );
};
