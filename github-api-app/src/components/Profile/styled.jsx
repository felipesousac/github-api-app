import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: center;
`

export const WrapperUsername = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;

  h3 {
    margin-right: 8px;
  }
`

export const WrapperInfoUser = styled.div`
  margin-left: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`
