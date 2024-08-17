const portfolio = document.getElementById("port");
const dropDwn = document.getElementById("dropdwn");
const menuBtn = document.getElementById("menubtn");
const portDd = document.getElementById("portdd-container");
const portLinkDropDwn = document.getElementById("portlinkdd");
const sideBar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closebtn");
let isMouseOnDD = false;
let isPortDd = false;

if (portfolio) {
  portfolio.addEventListener("mouseover", () => {
    dropDwn.style.display = "flex";
  });
  dropDwn.addEventListener("mouseover", () => {
    isMouseOnDD = true;
    dropDwn.style.display = "flex";
  });

  portfolio.addEventListener("mouseleave", () => {
    if (!isMouseOnDD === true) {
      setTimeout(() => {
        dropDwn.style.display = "none";
      }, timeout);
    }
    dropDwn.style.display = "none";
  });
}
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sideBar.style.display = "flex";
  });
}

portDd.addEventListener("click", () => {
  if (isPortDd) {
    isPortDd = false;
    portLinkDropDwn.style.opacity = "0";
    portLinkDropDwn.style.transform = "translateY(20px)";
    portLinkDropDwn.style.maxHeight = "0";

    setTimeout(() => {
      portLinkDropDwn.style.display = "none";
      portLinkDropDwn.style.maxHeight = "";
    }, 300);
  } else {
    isPortDd = true;
    portLinkDropDwn.style.display = "flex";
    portLinkDropDwn.style.opacity = "0";
    portLinkDropDwn.style.transform = "translateY(20px)";
    portLinkDropDwn.style.maxHeight = "0";

    portLinkDropDwn.offsetHeight;

    portLinkDropDwn.style.transition =
      "max-height 400ms ease, opacity 100ms ease, transform 300ms ease";
    portLinkDropDwn.style.maxHeight = portLinkDropDwn.scrollHeight + "px";
    portLinkDropDwn.style.opacity = "1";
    portLinkDropDwn.style.transform = "translateY(0)";
  }
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
