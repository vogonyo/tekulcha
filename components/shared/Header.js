    import { Component } from 'react';
    import Link from 'next/link';

    const linkStyle = {
        margin: 20,
        padding: 20,
    }
    class Header extends Component{
        render(){
            const title = this.props.title;

            return(
                <React.Fragment>
                    <p>{ title }</p>
                    <p>{this.props.children }</p>
                    <p className="customClass">i am a p styled element </p>
                    <Link href="/">
                        <a style={{'fontSize': '50px' }}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a style={linkStyle}>About</a>
                    </Link>
                    <Link href="/blog">
                        <a style={linkStyle}>Blog</a>
                    </Link>
                    <Link href="/jobs">
                        <a style={linkStyle}>Jobs</a>
                    </Link>
                    <Link href="/startups">
                        <a style={linkStyle}>Startups</a>
                    </Link>
                    <style jsx>
                        {`
                            a{
                                 font-size: 20
                            }
                            .customClass{
                                color: red
                            }
                            `}
                    </style>
                </React.Fragment>
            )
        }
    }
    
    export default Header;
