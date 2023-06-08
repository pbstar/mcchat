let userList = [
  {
    name: "用户1",
    userId: "uesr1",
    photo: "./static/images/photo/1.jpg",
  },
  {
    name: "用户2",
    userId: "uesr2",
    photo: "./static/images/photo/2.jpg",
  },
  {
    name: "用户3",
    userId: "uesr3",
    photo: "./static/images/photo/3.jpg",
  },
  {
    name: "用户4",
    userId: "uesr4",
    photo: "./static/images/photo/4.jpg",
  },
  {
    name: "用户5",
    userId: "uesr5",
    photo: "./static/images/photo/5.jpg",
  },
  {
    name: "用户6",
    userId: "uesr6",
    photo: "./static/images/photo/6.jpg",
  },
  {
    name: "用户7",
    userId: "uesr7",
    photo: "./static/images/photo/7.jpg",
  },
  {
    name: "用户8",
    userId: "uesr8",
    photo: "./static/images/photo/8.jpg",
  },
]
function getUserList() {
  return userList
}
function getUserInfo(userId) {
  let userInfo = null
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].userId == userId) {
      userInfo = userList[i]
    }
  }
  return userInfo
}


export default {
  getUserList,
  getUserInfo
};
