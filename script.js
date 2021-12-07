let data1 = {
    image: 'images/image1.jpg',
    title: "My title1",
    description: 'What happenddd ddded here, why is this a very nice imaaaaaaage1111111    111111111111 111111111 11111111 1111111111111111111111111    111111111111111111111111111'
  };
  let data2 = {
    image: 'images/image2.jpg',
    title: "My title2",
    description: '22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
  };
  let data3 = {
    image: 'images/image3.jpg',
    title: "My title3",
    description: '333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333'
  };
  let data4 = {
    image: 'images/image4.jpg',
    title: "My title4",
    description: '44444444444444444444444444444444444444444444444444444444444444444444444444444444'
  };
  let data5 = {
    image: 'images/image5.jpg',
    title: "My title5",
    description: '5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555'
  };
  let data6 = {
    image: 'images/image6.jpg',
    title: "My title6",
    description: '666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666'
  };

  let currentPhoto = 0;

  let imagesData = [data1,data2,data3,data4,data5,data6]

  $('#image').attr('src', imagesData[currentPhoto].image);
  $('#image-title').text(imagesData[currentPhoto].title);
  $('#image-description').text(imagesData[currentPhoto].description);


//   $('#image').attr('src', data1.image);
//   $('#image-title').text(data1.title);
//   $('#image-description').text(data1.description);
