let data1 = {
    image: 'images/image1.jpg',
    title: "My title1",
    description: 'What happenddd ddded here, why is this a very nice imaaaaaaage1111111    111111111111 111111111 11111111 1111111111111111111111111    111111111111111111111111111'
  };
  let data2 = {
    image: 'images/image2.jpg',
    title: "My title2",
    description: '222222222222222 222222222222 22222222 2222222222 22222222222222222222222222222222222 22222222222222222222 22222222222 222222222 22222222222 2222 22222222222222'
  };
  let data3 = {
    image: 'images/image3.jpg',
    title: "My title3",
    description: '333333333333 33333333333333333333 33333333333 333333333333333333333333333333333333333333 3333333333 333333 333333333 3333333333333333333 3333333333333333 33333333 33333333333333 33333333333 33333333 333333333333'
  };
  let data4 = {
    image: 'images/image4.jpg',
    title: "My title4",
    description: '444444444444444444444 444444444444444 44444444444444444444444444444444444444444444'
  };
  let data5 = {
    image: 'images/image5.jpg',
    title: "My title5",
    description: '55555555555555 5555555555555 55555555555555 55555555555555555555555555555555555555555555 555555555555555 5555555555555555555555555555555555555555555555555555555 55555555555555555555555555555555555'
  };
  let data6 = {
    image: 'images/image6.jpg',
    title: "My title6",
    description: '666666666666666666666666666666666 666666666666666666 666666666666666666666666666666666666666666666666'
  };

  let currentPhoto = 0;

  let imagesData = [data1,data2,data3,data4,data5,data6]
  let imageArray = [data1.image,data2.image,data3.image,data4.image,data5.image, data6.image]

  $('#image').attr('src', imagesData[currentPhoto].image);
  $('#image-title').text(imagesData[currentPhoto].title);
  $('#image-description').text(imagesData[currentPhoto].description);
  $('#tn1').attr('src',imageArray[0]);
  $('#tn2').attr('src',imageArray[1]);
  $('#tn3').attr('src',imageArray[2]);
  $('#tn4').attr('src',imageArray[3]);
  $('#tn5').attr('src',imageArray[4]);
  $('#tn6').attr('src',imageArray[5]);

  let loadImage = (photoNumber) => {
    $('#image').attr('src', imagesData[photoNumber].image);
    $('#image-title').text(imagesData[photoNumber].title);
    $('#image-description').text(imagesData[photoNumber].description);
    $('#tn1').attr('src',imageArray[0]);
    $('#tn2').attr('src',imageArray[1]);
    $('#tn3').attr('src',imageArray[2]);
    $('#tn4').attr('src',imageArray[3]);
    $('#tn5').attr('src',imageArray[4]);
    $('#tn6').attr('src',imageArray[5]);
    // $(".thumbnails").addClass('selected');
  }


$('.arrow-right').click(() => {
  if(currentPhoto < 5)
  currentPhoto++;
  else if (currentPhoto === 5)
  currentPhoto = 0;
  loadImage(currentPhoto);
  $('#promenna').text(currentPhoto);
})

$('.arrow-left').click(() => {
  if(currentPhoto > 0)
  currentPhoto--;
  else if (currentPhoto === 0)
  currentPhoto = 5;       //  Načte poslední řádek
  $('.selected').removeClass('selected');
  $(".thumbnail-box"[currentPhoto]).addClass('selected');
  loadImage(currentPhoto);
  $('#promenna').text(currentPhoto);
})

// $('#tn1').attr('src',imageArray[0]);
// $('#tn2').attr('src',imageArray[1]);
// $('#tn3').attr('src',imageArray[2]);
// $('#tn4').attr('src',imageArray[3]);
// $('#tn5').attr('src',imageArray[4]);
// $('#tn6').attr('src',imageArray[5]);



  

// imageArray.forEach((pic) => {
// $('.thumbnails',).attr('src',pic);
// });         // Tohle by mělo být správně, ale nefunguje. Asi není dobře připojené HTLM.




// $('.thumbnails').attr('src',imageArray[0])

// // loadImage(currentPhoto);


