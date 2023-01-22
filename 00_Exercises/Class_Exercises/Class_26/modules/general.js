function generateImage(src)
{
    let img = document.createElement(`img`);
    document.body.append(img);
    img.src = src;
    img.alt = "image_cannot_be_loaded";
    img.style.width = "200px"
    img.style.height = "120px"
    return img;
}

export default generateImage;