//Delete from Favourite
$(document).one('pageinit', function(){
	// Delete Handler
	$('#favouriteSongsListHead').on('click', '#deleteLink', deleteFavs);

	function deleteFavs(){
		//alert("wanan to delete?");}
	//Set LS items
		if(confirm('Are you sure?')){
	    	localStorage.setItem('currentTitle', $(this).data('title'));

	    	//Get current data
	    	currentTitle = localStorage.getItem('currentTitle');

			var myFavs = getmyFavsObject();

	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < myFavs.length; i++){
	    		if(myFavs[i].title == currentTitle){
	    			myFavs.splice(i, 1);
	    		}
	    		localStorage.setItem('myFavs', JSON.stringify(myFavs));
	    		//call showFavs()
	    			showMyFavs();
	    	}
	    	return false;
    	}
	}
});
//From Solo Learn
$(function(){
	$('#songNoSearchBtn').click(function(){
	var val = $('#srch-TitleNo');
	//var valNo = $('#srchByNoDiv');
	val.toggle();
	//$("#srch-TitleNo").delay(10000);
	//$("#srchByNoDiv").delay(5000);
	//$("#srchByNoDiv").fadeOut(2000);
	//$("#srch-TitleNo").fadeOut(2000);
	});
});
/*
//Hide Buttons When Not Active
$(function(){
	$('#songNoSearchBtn').click(function(){
	var val = $('#srch-TitleNo');
	//var valNo = $('#srchByNoDiv');
	val.toggle();
	$("#srch-TitleNo").delay(10000);
	$("#srchByNoDiv").delay(5000);
	$("#srchByNoDiv").fadeOut(2000);
	$("#srch-TitleNo").fadeOut(2000);
	});
});
*/

function songNoSearchFun(){
var songNumber = document.getElementById("srchByNoDivInput");

//Check for the first digit entered
var songNumbers = document.getElementById("srchByNoDivInput").value;
var myArray = [];
myArray.push(songNumbers);
songNumber1 = songNumbers[0];

if(songNumber.value > 0 && songNumber.value <=30 && songNumber1 > 0){
	//Print song Number to Page 2 Screen
	var myNo =  hymnFun2();
	var selNum = hymnFunList2();
	document.getElementById("displayHymn").innerHTML= myNo[songNumber.value];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + songNumber.value;
	document.getElementById("suSongTitle").innerHTML= selNum[songNumber.value];

	//Page 2 Song No Catcher
	document.getElementById("hymnNoIndex").innerHTML = songNumber.value;
	
	//Redirect and Hide Element
	location.replace("#page3");
	document.getElementById("srchByNoDiv").style.display = "none";
	document.getElementById("srch-TitleNo").style.display = "none";
	songNumber.value = "";
} };

$(function(){
	$("#srch-No").on("click", function(){
	$("#srch-TitleNo").hide();
	$("#srchByNoDiv").show();
    });
 });
$(function(){
    $("#srch-Title").on("click", function(){
	$(".srchByNoDivClass").hide();
	$("#srch-TitleNo").hide();
    });
});

//Write My Songs- Preview My Song
var myAddedSongsTitleList = [];
var myAddedSongsSoloList = [];
$(function(){
    $("#addMySong").on("click", function(){
	var addSongTitle = $("#writeTitle").val();
	var addSongSolo = $("#writeSolo").val();
	if(addSongTitle != '' && addSongSolo != ''){
		$("#mySongTitle").text('Song Title: '+addSongTitle);
		//$("#mySongCreated").text('');
		$("#mySongCreated").html('');
		//var soloPreview = addSongSolo.replace(/"/g, '<p>');
		var soloPreview = addSongSolo.replace(/:/g, '<p>');
		//var soloPreview = addSongSolo.replace(/"/g, '<p>');
		$("#mySongCreated").append(soloPreview);
		//alert($("#mySongCreated").html());
		//alert(addSongTitle);
		
		//myAddedSongsTitleList.push(addSongTitle);
		//myAddedSongsSoloList.push(addSongSolo);
		//var getID = myAddedSongsTitleList.length;
		//var myTitle;
		//alert(getID+50000);
		}
    });
});

/*----Clear My Songs & Undo My Songs -----*/
//Create dummy variables
var dummyTitle = "";
var dummySolo = "";

$(function(){
	$('#clearMySong').click(function(){		
	var holdMyITitle = $("#writeTitle").val();
	var holdMyISolo = $("#writeSolo").val();
	var holdMyDTitle = $("#mySongTitle").text();
	var holdMySSolo = $("#mySongCreated").text();

	//Send input data to dummy variables before deleting
	dummyTitle = holdMyITitle;
	dummySolo = holdMyISolo;
	dummyDTitle = holdMyDTitle;
	dummyDSolo = holdMySSolo;

	//Delete input data
	$("#writeTitle").val('');
	$("#writeSolo").val('');
	$("#mySongTitle").text('');
	$("#mySongCreated").text('');
	});

	//Recall
	$('#undoClearSong').click(function(){
	//Recall data from dummy variables
	$("#writeTitle").val(dummyTitle);
	$("#writeSolo").val(dummySolo);
	});
});
/*----/Clear My Songs & Undo My Songs -----*/

function recallMySong() {
	alert(holdMyDTitle);
	//myTitleInput.value = holdMyTitleInput;
	//mySoloInput.value = holdMySoloInput;
	//myTitleDisplay.innerHTML = holdMyTitleDisplay;
	//mySoloDiplay.innerHTML = holdMySoloDiplay;
};

//Add My Songs- Save My Song
function addMySong(){
	//Get Song Values
	//var title = $("#mySongTitle").text();
	//var solo = $("#mySongCreated").text();
	//var solo = $("#mySongCreated").text();
	var title = $("#writeTitle").val();  //This is working
	var solo = $("#writeSolo").val();

	//Check if songtitle & solo are empty
	if(title != '' && solo != ''){
		var mySongs = getMyAddSongsObject();
		nextID = mySongs.length;

		//Set unique ID using length of the object 
		var songID = nextID+50000;
		alert(solo);

		//Create 'mySong' object
		var mySong = {
			title: title,
			solo: solo,
			songID: songID};

		// Add mySong to mySongs array
		mySongs.push(mySong);

		//Set stringgified object to localStorage
		localStorage.setItem('mySongs', JSON.stringify(mySongs));

		//Redirect
		//window.location.href="#";
		return false;
	} 
	if (title === '' && solo === ''){
		alert('Please write Song Title and Solo and preview');
	}
}

//Get the runs object
function getMyAddSongsObject(){
	//Set mySongs array
	var mySongs= new Array();
	//Get current mySongs from localStorage
	var myCurrentSongs = localStorage.getItem('mySongs');

	//Check localStorage
	if(myCurrentSongs != null){
		var mySongs = JSON.parse(myCurrentSongs);
	}
	//Return runs object
	return mySongs;
}


function popuateMyAddedSongs(){
	//Clear all the exisitng list
	$('#mySongIndices').empty();

	//get runs object
	var mySongs = getMyAddSongsObject();
	//var myFavs2= ["hello", "Good", "Tested", "Nice"]

	//Check if empty
	if(mySongs !="" && mySongs != null){
		for(var i = 0; i < mySongs.length; i++){
		$('#mySongIndices').append('<li class="ui-btn songTitleIndexClass" id="songTitleIndexCont">'+mySongs[i]["title"]
		+'<a class="favListIcons ui-icon-eye ui-btn-icon-left favIcon" id="'+mySongs[i]["songID"]
		+'" onclick=printMySong(this.id)></a><a href="#" id="deleteMyAddedSong" data-title="'+mySongs[i]["title"]
		+'" class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li><hr>'); 
		}
	}
	//countFavs();
}


//Print My Selected Song to the Screen
function printMySong(selTitle){
	//Clear all the exisitng list
	//$('#mySongIndices').empty();
		//alert("wanan to delete?");}
	//Set LS items
		//alert(selTitle);
		//if(confirm('Are you sure?')){
	    	localStorage.setItem('myCurrentID', selTitle);

	    	//Get current data
	    	myCurrentID = localStorage.getItem('myCurrentID');

			var mySongs = getMyAddSongsObject();
	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < mySongs.length; i++){
	    		if(mySongs[i].songID == myCurrentID){

	    			$('#page9SongTitle').text(mySongs[i].title);
	    			$('#pg9SongDisplay').html(mySongs[i].solo);
	    			//alert( mySongObj[i].solo);
	    		}
	    		localStorage.setItem('mySongs', JSON.stringify(mySongs));
	    		//call showFavs()
	    		//	showMyFavs();
	    		formatMyDisplaySolo();
	    		location.replace("#page9");
	    	}
	    	return false;
    	//}
};


//Delete from Favourite
$(document).one('pageinit', function(){
	// Delete Handler
	$('#mySongIndices').on('click', '#deleteMyAddedSong', deleteMySong);

	function deleteMySong(){
		//alert("wanan to delete?");}
	//Set LS items
		if(confirm('Are you sure?')){
	    	localStorage.setItem('currentTitle', $(this).data('title'));

	    	//Get current data
	    	currentTitle = localStorage.getItem('currentTitle');

			var mySongs = getMyAddSongsObject();

	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < mySongs.length; i++){
	    		if(mySongs[i].title == currentTitle){
	    			mySongs.splice(i, 1);
	    		}
	    		localStorage.setItem('mySongs', JSON.stringify(mySongs));
	    		//call showFavs()
	    			popuateMyAddedSongs();
	    	}
	    	return false;
    	}
	}
}); 
/* ------- Testing Buttons ---------*/
//Get Displayed Song Contents
$(function(){
    $("#getContent").on("click", function(){
    var mySong = $("#pg9SongDisplay").text();
    var mySongContent = $("#pg9SongDisplay").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);
	
	alert(mySong);
	alert(mySongContent);
    });
});

//Format My Song On Display Screen
$(function(){
    $("#fMySong").on("click", function(){
    var mySong = $("#pg9SongDisplay").text();
    var mySongContent = $("#pg9SongDisplay").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);

	mySongContent = mySong;
	var finalSong = mySong.replace(/:/g, '<p>');
	//$("#mySongCreated").append(soloPreview);
	$("#pg9SongDisplay").html('');
	$("#pg9SongDisplay").html(finalSong);

    });
});


//Format My Song On Display Screen
$(function(){
    $("#revContents").on("click", function(){
    var mySong = $("#mySongCreated").text();
    var mySongContent = $("#mySongCreated").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);

	alert(mySong);
	alert(mySongContent);

    });
});

/* ------- /Testing Buttons ---------*/

//Format My Song To On Display on Screen
function formatMyDisplaySolo(){
    var mySong = $("#pg9SongDisplay").text();
    var mySongContent = $("#pg9SongDisplay").html();

	mySongContent = mySong;
	var finalSong = mySong.replace(/:/g, '<p>');
	$("#pg9SongDisplay").html('');
	$("#pg9SongDisplay").html(finalSong);
};