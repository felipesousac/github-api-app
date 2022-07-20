import RepositoryItem from '../RepositoryItem/RepositoryItem'
import * as S from './styled'

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="css-exercise"
          linkToRepo="https://github.com/felipesousac/css-exercises"
          fullName="felipesousac/css-exercises"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="dsmeta"
          linkToRepo="https://github.com/felipesousac/dsmeta"
          fullName="felipesousac/dsmeta"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
