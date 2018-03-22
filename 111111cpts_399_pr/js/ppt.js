;(function()
	{
		var ppt = document.getElementsByClassName("swiper-slide"),
			index = 0,
			timer = null;
		
		// 图片自动轮播
		function startAutoPlay(){
		   timer = setInterval(function(){
		       index++;
		       if(index >= size){
		          index = 0;
		       }
		       changeImg();
		   },3000)
		}
		
		function changeImg(){
		   for(var i=0,len=dots.length;i<len;i++){
		       dots[i].className = "";
		       pics[i].style.display = "none";
		   }
		   dots[index].className = "active";
		   pics[index].style.display = "block";
		}
	}
)();