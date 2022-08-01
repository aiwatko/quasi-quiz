import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacing } from '../materials/spacing'

const Container = styled.div`
    padding: ${spacing.large};
    height: 100%;
`

export const PageContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
)

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
