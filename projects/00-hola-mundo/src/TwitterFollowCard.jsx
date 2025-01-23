import { useState } from 'react'

export function TwitterFollowCard({ children, userName = 'unknow', name, initialIsFollowing }) {
  const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='Avatar random'
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{ name }</strong>
          <span className="tw-followCard-infoUser">@{userName}: {children}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">
            {text}  
          </span>
          <span className="tw-followCard-stopFollowing">
            Dejar de Seguir
          </span>
        </button>
      </aside>
    </article>
  )
}