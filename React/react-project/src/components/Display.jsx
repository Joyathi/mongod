function Display ({displayData}){
    console.log("Display component rendering...");

    return(
    <>
    {/* <h1>FirstName : {displayData.firstName}</h1> */}
    <h1>LastName : {displayData.lastName} </h1>
    <h1>Email : {displayData.email} </h1>
    <h1>Password : {displayData.password} </h1>
    </>
        )
}
export default Display;