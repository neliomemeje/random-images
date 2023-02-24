const imagesContainer= document.querySelector(".images-container")
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {

	for(let i=0; i<3; i++){
		const imageEl = document.createElement("img")
		imageEl.src= `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
		imagesContainer.appendChild(imageEl)	
	}
})