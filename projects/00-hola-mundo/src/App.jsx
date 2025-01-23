import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'bryan',
    name: 'Bryan Tarco',
    isFollowing: true
  }, 
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas', 
    isFollowing: false
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard key={userName} 
              name={name} 
              userName={userName} 
              initialIsFollowing={isFollowing} 
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
