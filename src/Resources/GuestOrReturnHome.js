export const GuestOrReturnHome = () => {

    let username = sessionStorage.getItem("username");

    if (username){
        return (
            <div>Return Home</div>
            );
    } else{
        return (
            <div>Continue as Guest</div>
            );
    }


}