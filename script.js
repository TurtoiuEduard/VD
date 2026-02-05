  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const message = document.getElementById("message");
  const content = document.querySelector(".content");
  const sideImg = document.querySelector(".side-image");
  const backBtn = document.getElementById("back");
  const bgVideo = document.getElementById("bgVideo");
  const body = document.body;
  const container = document.querySelector(".buttons");

  function moveButton() {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  yesBtn.addEventListener("click", () => {
    content.style.display = "none";
    if (sideImg) sideImg.style.display = "none";
    message.innerHTML = "YEESSSS😜💪🏽💪🏽 <img src='sefu.jpeg' alt='Sefu' style='width: 100px; height: auto; margin-left: 10px;'>";
    message.style.display = "flex";
    message.style.alignItems = "center";
    message.style.justifyContent = "center";
    message.style.fontSize = "30px";
    message.style.fontFamily = "sans-serif";
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.zIndex = "100";
    message.style.backgroundColor = "white";
    message.style.color = "black";
    message.style.padding = "20px";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    bgVideo.src = "artificii.mp4"; // Assuming the video file is named artificii.mp4
    bgVideo.setAttribute("playsinline", "");
    bgVideo.setAttribute("webkit-playsinline", "");
    bgVideo.muted = true;
    bgVideo.play();
    bgVideo.style.display = "block";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black"; // Optional, for video contrast
    backBtn.style.display = "block";
  });

  backBtn.addEventListener("click", () => {
    content.style.display = "block";
    if (sideImg) sideImg.style.display = "block";
    message.style.display = "none";
    bgVideo.style.display = "none";
    body.style.backgroundImage = "linear-gradient(135deg, #ff4d6d, #ffb3ba, #ff4d6d)";
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "wave 10s ease-in-out infinite";
    backBtn.style.display = "none";
    message.innerHTML = "Yeeesss!!"; // Reset message
  });

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("mousemove", moveButton);