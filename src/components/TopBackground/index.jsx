import UsersImage from "../../assets/users.png";
import { Background } from "./styles";

function TopBackground(){

    return(
        <Background>
        <img src={UsersImage} alt="image-usuario" />
      </Background>


    )
}
export default TopBackground