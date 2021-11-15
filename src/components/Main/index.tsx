import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>
      Typescript, ReactJs, NextJs, Styled components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Pessoa desenvolvedora de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
