const imageValidate = (images) => {
  let imagesTable = [];
  if (Array.isArray(images)) {
    imagesTable = images;
  } else {
    imagesTable.push(images);
  }
  if (imagesTable.length > 1) {
    return { error: "Upload only 1 image" };
  }
  for (let image of imagesTable) {
    if (image.size > 10485760) return { error: "Size too large (above 10MB)" };
    const filetypes = /jpg|jpeg|png/;
    const mimetype = filetypes.test(image.mimetype);
    if (!mimetype)
      return { error: "Incorrect mime type (should be jpg,jpeg or png)" };
  }
  return { error: false };
};
module.exports = imageValidate;
