import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`

WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 14px;
  user-select: none;
  cursor: pointer;
  margin-right: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
  }
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 16px;
  margin-top: -5px;
  border: 1px solid #ccc;

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'
