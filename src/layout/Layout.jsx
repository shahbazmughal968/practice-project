import Header from "./Header";

const Layout =(props)=>{
    return (
        <>
        <Header isLogin={props.isLogin}/>
        <main>{props.children}</main>
        </>
    )
}
export default Layout;