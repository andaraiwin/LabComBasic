// import "animate.css";

const btnRandom = document.querySelector("#btn-random");
const imgDog = document.querySelector("#img-dog");

btnRandom.onclick = async () => {
  //   alert("pass");  Check if it alert
  btnRandom.innerText = "Loading...";
  btnRandom.disabled = true;

  const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
  //   console.log(resp.data.message); show url of dog picture in console
  imgDog.src = resp.data.message;
};

imgDog.onload = () => {
  btnRandom.innerText = "More please !!";
  btnRandom.disabled = false;

  imgDog.className = "animate__animated animate__heartBeat";
  setTimeout(() => {
    imgDog.className = "";
  }, 1000);
};
