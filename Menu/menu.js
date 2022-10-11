
$("#img-awal").slideUp(1000).slideDown(1000)

// ------------------------------------
$("#ul-img li").hide()
var currImg=$("#ul-img li").first()
var currIdx=0
currImg.show()

$("#next").click(function(){
    currImg.hide()
    if(currIdx==$("#ul-img li").length-1){
        currIdx=0
        currIdx=$("#ul-img li").first()
    }
    else{
        currIdx+=1
        currImg=currImg.next()
    }
    currImg.show()
})

$("#prev").click(function(){
    currImg.hide()
    if(currIdx==0){
        currIdx=$("#ul-img li").length-1
        currIdx=$("#ul-img li").last()
    }
    else{
        currIdx+=1
        currImg=currImg.prev()
    }
    currImg.show()
})
