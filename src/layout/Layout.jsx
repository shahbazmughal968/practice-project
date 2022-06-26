import Header from "./Header";

const Layout =(props)=>{
    return (
        <>
        <Header isLogin={props.isLogin} setLogout={props.setLogout} greenPassIcon={props.greenPassIcon} setGreenPassIcon={props.setGreenPassIcon} setMatchData={props.setMatchData}/>
        <main>{props.children}</main>
        </>
    )
}
export default Layout;