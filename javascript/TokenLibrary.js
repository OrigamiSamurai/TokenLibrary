//update to use HTML5 canvas to do image processing in-browser
//NOTE: the image will need to be uploaded for the canvas to actually save the modified image

/*

var newCharacter = new Character({
	name: "Darth Vader",
	imageUrl: "http://paperandsteel.net/images/darth-vader-portrait.jpg"
});

var newCharacterView = new CharacterView({model:newCharacter});

$(document).ready(function(){
	$('#mainContainer').append(newCharacterView.el);
})

var cropCoords = {};

function showPreview(coords) {
  var rx = 96 / coords.w;
  var ry = 153 / coords.h;

  $('#preview').css({
    width: Math.round(rx * 438) + 'px',
    height: Math.round(ry * 300) + 'px',
    marginLeft: '-' + Math.round(rx * coords.x) + 'px',
    marginTop: '-' + Math.round(ry * coords.y) + 'px'
  });
};

function updateCropInfo(coords) {
  cropCoords.w = coords.w;
  cropCoords.h = coords.h;
  cropCoords.x = coords.x;
  cropCoords.y = coords.y;

  showPreview(coords);
};

$(function($) {
    $('#target').Jcrop({
      aspectRatio: (96/153),
      minSize: [96,153],
      setSelect: [0,0,96,153],
      onSelect: updateCropInfo,
      onChange: showPreview
    });

});

function php(command,payload,callback) {
  var requestData = {
    "command": command,
    "payload": JSON.stringify(payload)
  }
  var request;
  request = $.ajax({
    url: "TokenGenerator.php",
    type: "post",
    data: JSON.stringify(requestData)
  });

  request.fail(function (jqXHR, textStatus, errorThrown){
        // log the error to the console
        console.error(
            "The following error occured: "+
            textStatus, errorThrown
        );
  });

  request.success(function(data) {
    if (callback)  {
      callback(data);
    };
  });

  request.done(function(data) {
    return(data);
  });

  request.always(function () {
    if (window.console) console.log("Request to server: \n"+JSON.stringify(requestData)+"\nResponse from server: "+request.responseText);
  })
}

function createTokenImage(sourceUrl,x,y,w,h,destW,destH) {
  php(
    "CreateToken",
    {
      sourceUrl:sourceUrl,
      sourceXStart:x,
      sourceYStart:y,
      sourceCropWidth:w,
      sourceCropHeight:h,
      destinationWidth:destW,
      destinationHeight:destH
    },
    function(response){$("<img />").attr("src", "data:image/jpeg;base64,"+response).appendTo($('#croppedImages'))}
  )
};

function createPortraitImage(sourceUrl,x,y,w,h,destW,destH) {
  php(
    "CreatePortrait",
    {
      sourceUrl:sourceUrl,
      sourceXStart:x,
      sourceYStart:y,
      sourceCropWidth:w,
      sourceCropHeight:h,
      destinationWidth:destW,
      destinationHeight:destH
    },
    function(response){$("<img />").attr("src", "data:image/jpeg;base64,"+response).appendTo($('#croppedImages'))}
  )
};

$('#getTokenImage').on(
  'click',
  function() {
    createTokenImage(
      $('#target').attr('src'),
      Math.floor(cropCoords.x),
      Math.floor(cropCoords.y),
      Math.floor(cropCoords.w),
      Math.floor(cropCoords.h),
      96,
      153
    )
  }
)

$('#getPortrait').on(
  'click',
  function() {
    createPortraitImage(
      $('#target').attr('src'),
      Math.floor(cropCoords.x),
      Math.floor(cropCoords.y),
      Math.floor(cropCoords.w),
      Math.floor(cropCoords.h),
      96,
      153
    )
  }
)

*/