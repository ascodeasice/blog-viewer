import Github from '../logo/github.svg';

const Header = () => {
    return (
        <div className="header">
            <a href="https://github.com/ascodeasice/blog-viewer">
                <img className='githubLogo' src={Github} />
            </a>
            <h1><a href="/blog-viewer">ascodeasice's Blog</a></h1>
        </div>
    );
}

export default Header;