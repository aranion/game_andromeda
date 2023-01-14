export async function dataUrlImages(srcList: string[]) {
  const promises: Promise<string>[] = [];

  srcList.forEach(src => {
    const img = new Image();
    img.src = src;

    promises.push(
      new Promise((resolve, reject) => {
        img.onload = function () {
          //   imgsArr.push(getBase64Image(img));
          resolve(getBase64Image(img));
        };
      })
    );
  });

  function getBase64Image(img: CanvasImageSource) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width as number;
    canvas.height = img.height as number;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0);

    return canvas.toDataURL('image/png');
  }

  return Promise.all(promises).then(
    imgs => imgs,
    reason => {
      throw new Error(reason);
    }
  );
}
