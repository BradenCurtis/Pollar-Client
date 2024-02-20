export const UsernameDisplay = () => {

    let username = sessionStorage.getItem("username");

    if (username){
        let usernameDisplay = "@".concat(username);
        return (
            <div>
                {usernameDisplay}
            </div>
            );
    } else{
        return (
            <div>Guest</div>
            );
    }




}