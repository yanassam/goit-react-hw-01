
const FriendListItem = (friends) => {
  const {avatar, name, isOnline}=friends;
  return (
    <div>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
    <p> {isOnline.toString()}</p>
  </div>
  )
}

export default FriendListItem
