import * as tf from '@tensorflow/tfjs';
import drum1 from './data/drum-1.jpg';
// import drum2 from './data/drum-2.jpg';
// import saxophone1 from './data/saxophone-1.jpg';
// import saxophone2 from './data/saxophone-2.jpg';

loadMobilenet().then(pretrainedModel => {
  loadImage(drum1).then(img => {
    const processedImage = loadAndProcessImage(img);
    console.log(processedImage);
    const prediction = pretrainedModel.predict(processedImage);
    prediction.as1D().argMax().print();
  });
});

function loadMobilenet() {
  return tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
}

function loadAndProcessImage(image) {
  const croppedImage = cropImage(image);
  const resizedImage = resizeImage(croppedImage);
  const batchedImage = batchImage(resizedImage);
  return batchedImage;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(tf.fromPixels(img));
    img.onerror = (err) => reject(err);
  });
}

function cropImage(img) {
  const width = img.shape[0];
  const height = img.shape[1];

  // use the shorter side as the crop size
  const shorterSide = Math.min(img.shape[0], img.shape[1]);

  // calculate beginning and ending crop points
  const startingHeight = (height - shorterSide) / 2;
  const startingWidth = (width - shorterSide) / 2;
  const endingHeight = startingHeight + shorterSide;
  const endingWidth = startingWidth + shorterSide;

  // return image data cropped to those points
  return img.slice([startingWidth, startingHeight, 0], [endingWidth, endingHeight, 3]);
}

function resizeImage(image) {
  return tf.image.resizeBilinear(image, [224, 224]);
}

function batchImage(image) {
  // Expand our tensor to have an additional dimension, whose size is 1
  const batchedImage = image.expandDims(0);

  // Turn pixel data into a float between -1 and 1.
  return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
}

/*
const futzImage = img => {
  const pixels = tf.fromPixels(img);
  const croppedImg = crop(pixels);
  const resizedImage = tf.image.resizeBilinear(croppedImg, [224, 224]);
  const somethingImage = resizedImage.expandDims(0).toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
  return somethingImage;
};

const oneHot = (label, classes) => {
  return tf.oneHot(tf.tensor1d([label === 'drum' ? 0 : 1]).toInt(), classes);
};

const classes = 2;

const tfLabels = labels.slice(1).reduce((data, label) => {
  return data.concat(oneHot(label, classes));
}, oneHot(labels[0], classes));
console.log('labels', tfLabels.dataSync());

const model = tf.sequential({
  layers: [
    tf.layers.flatten({inputShape: [7, 7, 256]}),
    tf.layers.dense({
      units: 100,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
      useBias: true
    }),
    tf.layers.dense({
      units: classes,
      kernelInitializer: 'varianceScaling',
      useBias: false,
      activation: 'softmax'
    })
  ],
});

const optimizer = tf.train.adam(0.0001);

model.compile({
  optimizer,
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});


Promise.all(images.map(image => loadImage(image))).then(loadedImages => {
  return loadedImages;
}).then(loadedImages => {
  // here are the Images from above
  return loadedImages.slice(1).reduce((data, image) => {
    return data.concat(futzImage(image));
  }, futzImage(loadedImages[0]));
}).then(images => {
  return tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json').then(pt => {
    const layer = model.getLayer('conv_pw_13_relu');
    return tf.model({
      inputs: [model.inputs[0]],
      outputs: layer.output,
    });
  }).then(pretrainedModel => {
    return model.fit(
      images,
      tfLabels,
      {
        epochs: 20,
      },
    );
  });
}).then(history => {
  console.log(history);
});
*/
