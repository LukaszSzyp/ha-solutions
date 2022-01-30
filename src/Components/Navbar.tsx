import * as S from "../Styles/Navbar";
import logo from "../Assets/Images/Logo.png";
import { DropMenu } from "./DropMenu";

export const Navbar: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.Wrapper>
        <S.Button>STRONA GŁÓWNA</S.Button>
        <S.Button>PRODUKTY</S.Button>
        <S.Button>
          <DropMenu label="USŁUGI" />
        </S.Button>
        <S.Button>KONTAKT</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
