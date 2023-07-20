var socket = io();

const userNameNode = document.getElementById("userName");
const submitUserNameNode = document.getElementById("submitUserName");
const userNickNameLabelNode = document.getElementById("userNickNameLabel");

const searchFriendNode = document.getElementById("searchFriend");
const searchFriendButtonNode = document.getElementById("search");
const friendNickNameLabelNode = document.getElementById("friendNickNameLabel");

let user;

// search friend 

searchFriendButtonNode.addEventListener("click", function () {
  const friendName = searchFriendNode.value;
  // console.log(friendName);
  socket.emit("search friend", friendName);

  searchFriendNode.value = "";
});

socket.on("search friend", function (friendData) {
  console.log("hn bhai yja aa rha hai");
  if(friendData){
    friendNickNameLabelNode.innerText = friendData.nickName;

    startChat(friendData);
  } else {
    friendNickNameLabelNode.innerText = 
    "No such friend found";
  }
});

function startChat(friendData) {
  const chatBoxNode = document.getElementById("chatBox");

  const chatButtonNode = document.createElement("button");
  chatButtonNode.innerText = "chat with " + friendData.nickName;
  chatButtonNode.id = "chatButton";

  chatBoxNode.appendChild(chatButtonNode);

  chatButtonNode.addEventListener("click", function () {
    const chat = document.createElement("ul");
    chat.id = "form";
    chatBoxNode.appendChild(chat);

    const form_box = document.createElement("form");
    form_box.id = "form";
    const inp = document.createElement("input");
    inp.id = "input";
    const sendButton = document.createElement("button");
    sendButton.innerText = "Send";

    form_box.appendChild(inp);
    form_box.appendChild(sendButton);

    chatBoxNode.appendChild(form_box);

    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form_box.addEventListener("submit", function (e){  // ye hmlog html form se ek event fire kr rhe h..
      console.log("form bhr rha ");
      e.preventDefault();                        // jo ki socket k through server pe jayega
      // if(input.value){
      //     socket.emit("chat message", input.value);
      //     input.value = "";
  
  
      //     // append message to our list 
  
      //     var item = document.createElement("li");
      //     item.textContent = input.value;
      //     messages.appendChild(item);
      //     item.style.textAlign = "right";
      //     window.scrollTo(0, document.body.scrollHeight);
      // }    
      const msg = input.value;
      socket.emit("chat message", {
        msg: msg,
        friendUserName: friendData.userName,
        sentBy: user,
      });
      input.value = "";
  });

  });
}


// update users

submitUserNameNode.addEventListener("click", function () {
  const userName = userNameNode.value;
  socket.emit("connect user", userName);

  userNameNode.value = "";
});

socket.on("user updated", function (userData){
  if(!userData.nickName){
    const nickName = prompt("NickName bta bhai");

    if(nickName){
      socket.emit("update user", {
        nickName: nickName,
        userName: userData.userName,
      });
    }
  }else {
    user = userData;
    userNickNameLabelNode.innerText = userData.nickName;
  }
});

socket.on("user updated nickname", function (userData){
  user = userData;
  userNickNameLabelNode.innerText = userData.nickName;
});



console.log("connect to hua hai");