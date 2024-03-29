import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  height: 190px;

  background-color: ${colors.peach};
  color: ${colors.coral};
  text-align: center;
`
export const ContenteFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

export const Socials = styled.ul`
  display: flex;
  margin: 22px 0 20px 0;

  li {
    margin: 0 8px;
  }
`
