import * as S from './styled'

function Profile() {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/99854384?v=4"
        alt="User profile picture"
      />
      <div>
        <S.WrapperInfoUser>
          <div>
            <h1>Felipe Sousa</h1>
            <S.WrapperUsername>
              <h3>Username:</h3>
              <a
                href="https://github.com/felipesousac"
                target="_blank"
                rel="noreferrer"
              >
                felipesousac
              </a>
            </S.WrapperUsername>
          </div>

          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starred</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </S.WrapperStatusCount>
        </S.WrapperInfoUser>
      </div>
    </S.Wrapper>
  )
}

export default Profile
