import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'Typescript, ReactJs, NextJs, Styled components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Pessoa desenvolvedora de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
