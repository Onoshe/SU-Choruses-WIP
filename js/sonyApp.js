//var  hymnNo = document.getElementById("grabMe").innerHTML;
//document.getElementById("3").innerHTML= "Good";
//document.getElementById("displayHymn").innerHTML= "red"
function randIntFun(min, max){
    return Math.floor(Math.random(min) * Math.floor(max));
}

function hymnFun(){
var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al;
 
aa ="A little talk with Jesus makes it right, all right;" + "</p>"+
	"A little talk with Jesus makes it right, all right;" + "</p>"+
	"In trials of every kind, praise God, I always find" + "</p>"+
	"A little talk with Jesus makes it right, all right.";


ab ="All, all, all of my heart for Jesus," + "</p>"+
	"My wonderful Saviour." + "</p>"+
	"Just as it is, for ever it's" + "</p>"+
	"Yes, all of my life for Jesus." + "</p>";


ac = "All glory be to Jesus," + "</p>"+ 
	"The sinner's only Saviour," + "</p>"+
	"Whose precious blood for sin atones," + "<br>"+
	"And blots it out for ever." + "<br>"+
	"To know Him is to love Him," + "<br>"+
	"To trust Him is to prove Him," + "<br>"+
	"And those He saves, He ne'er forsakes," + "<br>"+
	"No, never, never, never.";

ad = "All power is given unto Me;" + "<br>"+ 
	"All power is given unto Me;" + "<br>"+ 
	"Go ye into all the world and preach the Gospel," + "<br>"+ 
	"And all, I am with you alway.";

ae = "All the way to Calvary, He went for me," + "<br>"+ 
	"He went for me, He went for me," + "<br>"+ 
	"All the way to Calvary, He went for me," + "<br>"+ 
	"And now He sets me free";

af = "'All the world for Jesus,' let the chorus ring;" + "<br>"+ 
	"'All the world for Jesus,' crown Him King;" + "<br>"+ 
	"'All the world for Jesus,' Jet the watchword be." + "<br>"+  
	"Forward go in Jesus' Name to victory";

ag = "All we like sheep have gone astray;" + "<br>"+ 
	"We have turned every one to his own way;" + "<br>"+ 
	"And the Lord hath laid on Him" + "<br>"+ 
	"The iniquity of us all.";

ah = "Run the race that is set before you," + "<br>"+ 
	"Lay aside every weight and sin;" + "<br>"+ 

	"Looking upward to Jesus Christ our Lord," + "<br>"+ 
	"Run as one who intends to win.";

ai = "Are you looking, looking, looking, unto Jesus," + "<br>"+ 
	"Looking every day?" + "<br>"+ 
	"Arf! you looking, looking, looking unto Jesus?" + "<br>"+ 
	"Tis the only happy way.";

aj = "As Moses lifted up the serpent in the wilderness," + "<br>"+ 
	"Even so must the Son of Man be lifted up;" + "<br>"+ 
	"That whosoever believeth, believeth in Him" + "<br>"+ 
	"Should not perish, should not perish," + "<br>"+ 
	"But have eternal life, but have etemallife.";

ak = "Behold, I stand, I stand at the door and knock;" + "<br>"+ 
	"Behold, I stand, I stand at the door and knock;" + "<br>"+ 
	"If any man hear My voice, and open the door, I will come in.";
	
	hList = [aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak];
	return	hList;
}

function hymnFunList(){
var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al; 
aa ="A little talk with Jesus makes it right, all right;";
ab ="All, all, all of my heart for Jesus,";
ac = "All glory be to Jesus,";
ad = "All power is given unto Me;";
ae = "All the way to Calvary, He went for me,";
af = "'All the world for Jesus,' let the chorus ring;";
ag = "All we like sheep have gone astray;";
ah = "Run the race that is set before you,";
ai = "Are you looking, looking, looking, unto Jesus,";
aj = "As Moses lifted up the serpent in the wilderness,";
ak = "Behold, I stand, I stand at the door and knock";
	hList = [aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak];
	return	hList;
}

//hymnFunList 2:
function hymnFun2(){
var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an,
	ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bb,
	bc, bd, be;

aa = `
<p>A little talk with Jesus makes it right, all right; </p>
<p>A little talk with Jesus makes it right, all right; </p>
<p>In trials of every kind, praise God, I always find </p>
<p>A little talk with Jesus makes it right, all right. </p>
`

ab =`
<p>All, all, all of my heart for Jesus </p>
<p>My wonderful Saviour. </p>
<p>Just as it is, for ever it's </p>
<p>Yes, all of my life for Jesus. </p>
`

ac = `
<p>All glory be to Jesus, </p>
<p>The sinner's only Saviour, </p>
<p>Whose precious blood for sin atones, </p>
<p>And blots it out for ever. </p>
<p>To know Him is to love Him, </p>
<p>To trust Him is to prove Him, </p>
<p>And those He saves, He ne'er forsakes, </p>
<p>No, never, never, never. </p>
`

ad = `
<p>All power is given unto Me; </p>
<p>All power is given unto Me; </p>
<p>Go ye into all the world and preach the Gospel, </p>
<p>And all, I am with you alway. </p>
`

ae = `
<p>All the way to Calvary, He went for me, </p>
<p>He went for me, He went for me, </p>
<p>All the way to Calvary, He went for me, </p>
<p>And now He sets me free </p>
`

af = `
<p>All the world for Jesus, 'let the chorus ring'; </p>
<p>All the world for Jesus, 'crown Him King'; </p>
<p>All the world for Jesus, 'Jet the watchword be.' </p> 
<p>Forward go in Jesus 'Name to victory' </p>
`

ag = `
<p>All we like sheep have gone astray; </p>
<p>We have turned every one to his own way; </p> 
<p>And the Lord hath laid on Him </p>
<p>The iniquity of us all. </p>
`

ah = `
<p>Run the race that is set before you, </p>
<p>Lay aside every weight and sin; </p>

<p>Looking upward to Jesus Christ our Lord, </p> 
<p>Run as one who intends to win. </p>
`

ai = `
<p>Are you looking, looking, looking, unto Jesus, </p>
<p>Looking every day? </p>
<p>Arf! you looking, looking, looking unto Jesus? </p>
<p>Tis the only happy way. </p>
`

aj = `
<p>As Moses lifted up the serpent in the wilderness, </p>
<p>Even so must the Son of Man be lifted up; </p>
<p>That whosoever believeth, believeth in Him </p>
<p>Should not perish, should not perish, </p> 
<p>But have eternal life, but have etemallife. </p>
`

ak = `
<p>Behold, I stand, I stand at the door and knock; </p>
<p>Behold, I stand, I stand at the door and knock; </p> 
<p>If any man hear My voice, and open the door, I will come in. </p>
`

al =`
<p>Be it known unto you, be it known unto you, that through </p>
<p>this Man Christ Jescs is preached unto you the forgiveness </p>
<p>of sins, the forgiveness of sins, that through this Man is </p>
<p>preached the forgiveness of sins. </p>
`

am =`
<p>Blessed, blessed, he who is forgiven, </p>
<p>All his sin covered o'er, naught that doth defile. </p>
<p>Blessed, blessed, sin no more imputed, </p>
<p>And within whose spirit there is found no guile. </p>
`

an =`
<p>Break Thou the Bread of Life, dear Lord, to me, </p>
<p>As Thou didst break the loaves beside the sea; </p>
<p>Beyond the sacred page I seek Thee, Lord; </p>
<p>My spirit longs for Thee, 0 living Word. </p>
`

ao = `
<p>Build on the Rock, the Rock that ever stands, </p> 
<p>Oh, build on the Rock, and not upon the sands; </p>
<p>You need not fear the storm, or the earthquake shock, </p>
<p>You're safe for evermore if you build on the Rock. </p>
`

ap = `<em>
<p>By and by we'll see the King, </p>
<p>By and by we'll see the King, </p>
<p>By and by we'll see the King, </p>
<p>And crown Him Lord of All. <em></p>
`

aq = `
<p>By grace are ye saved through faith; </p>
<p>By grace are ye saved through faith; </p>
<p>Not of works, not of works, </p>
<p>Lest any man should boast; </p>
<p>By grace are ye saved through faith. </p>
<p>For it is the gift of God; </p>
<p>For it is the gift of God; </p>
<p>Not of yourselves, not of yourselves, </p>
<p>Lest any man should boast: </p>
<p>For it is the gift of God. </p>
`

ar = `
<p>Christ one hath suffered, the Just for the unjust, </p>
<p>For our sms, for our sins; </p>
<p>That He might bring us, bring us to God, </p>
<p>That He might bring us, bring us to God. </p>
`

as = `
<p>Cleanse me from my sin, Lord, </p>
<p>Put Thy power within. Lord, </p>
<p>Take me as I am, Lord, </p>
<p>And make me all Thine own. </p>
<p>Keep me day by day, Lord, </p>
<p>Underneath Thy sway, Lord; </p>
<p>Make my heart Thy palace </p>
<p>And Thy royal throne. </p>
`

at = `
<p>Come and serve the Master, </p> 
<p>He alone is true; </p>
<p>He will pardon sinners, </p>
<p>Therefore pardon you. </p>
<p>He has promised power, </p>
<p>Power to all who ask, </p>
<p>Power to conquer Satan, </p>
<p>Power for every task. </p>
`

au = `
<p>Come, follow the King, come, follow the King, </p>
<p>And struggle, by noble endeavour, </p>
<p>To conquer the foe in the might of the Lord, </p>
<p>Whose kingdom endureth for ever. </p>
<p>Enlistment of others be eager to seek, </p>
<p>Stand shoulder to shoulder, the strong help the weak, </p>
<p>A word of good cheer to the fainthearted speak, </p>
<p>And follow, come, follow the King. </p>
`
 
av = `
<p>Come. let us reason, reason, reason, </p>
<p>Come, let us reason, thus saith the Lord; </p>
<p>Though your sins be as scarlet, scarlet, scarlet, </p>
<p>They shall be whiter, yes, whiter than snow. </p>
`

aw = `
<p>Come unto Me, all ye that labour and are heavy laden, </p>
<p>And I will give, will give you rest, </p>
<p>And I will give you rest. </p>
`

ax = `
<p>Count your blessings, name them one by one, </p>
<p>Count your blessings, see what God hath done; </p>
<p>Count your blessings, name them one by one, </p>
<p>And it will surprise you what the Lord hath done. </p>
`

ay = `
<p>Draw me nearer, nearer, blessed Lord, </p>
<p>To the cross where Thou hast died; </p>
<p>Draw me nearer, nearer, nearer, blessed Lord, </p>
<p>To Thy precious, bleeding side. </p>
`

az = `
<p>Draw your swords, use your swords, </p>
<p>For the battle is the Lord's; </p>
<p>Trust in His Almighty arm, </p>
<p>And draw your swords. </p>
<p>Victory! Victory! Christ will give us victory! </p>
<p>If we trust His mighty arm, we shall wave the victor's palm. </p>
`

ba = `
<p>Everybody should know, everybody should know; </p>
<p>I have such a wonderful Saviour, </p>
<p>That everybody should know. </p>
`

bb = `
<p>Except a man ·be born again, except a man be born again, </p>
<p>Except a man be born again he cannot see the kingdom, </p>
<p>The kingdom of God, he cannot See the kingdom. </p>
`

bc = `
<p>Follow, follow, I would follow Jesus, </p>
<p>Anywhere, everywhere, I would follow on; </p>
<p>Follow, follow, I would follow jesus, </p>
<p>Everywhere He leads me, I would follow on. </p>
`

bd = `
<p>He can break every fetter, </p>
<p>He can break every fetter, </p>
<p>He can break every fetter, </p>
<p>He can Set you free. </p>
`

be = `
<p>He did not come to judge the world, </p>
<p>He did not come to blame; </p>
<p>He did not only come to seek, </p>
<p>It was to save He came; </p>

<p><em>And when we call Him Saviour,<em> </p>
<p><em>And when we call Him Saviour,<em> </p>
<p><em>And when We call Him Saviour,<em> </p>
<p><em>Then we call Him by His Name.<em></p>
`

hList = [aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an,
		ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bb,
		bc, bd, be];
return	hList;
}


function hymnFunList2(){
var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an,
	ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bb,
	bc, bd, be;
 
aa ="A little talk with Jesus makes it right, all right;";
ab ="All, all, all of my heart for Jesus,";
ac = "All glory be to Jesus,";
ad = "All power is given unto Me;";
ae = "All the way to Calvary, He went for me,";
af = "'All the world for Jesus,' let the chorus ring;";
ag = "All we like sheep have gone astray;";
ah = "Run the race that is set before you,";
ai = "Are you looking, looking, looking, unto Jesus,";
aj = "As Moses lifted up the serpent in the wilderness,";
ak = "Behold, I stand, I stand at the door and knock";
al = "Be it known unto you, be it known unto you, that through";
am = "Blessed, blessed, he who is forgiven";
an = "Break Thou the Bread of Life, dear Lord, to me";
ao = "Build on the Rock, the Rock that ever stands";
ap = "By and by we'll see the King";
aq = "By grace are ye saved through faith";
ar = "Christ one hath suffered, the Just for the unjust";
as = "Cleanse me from my sin, Lord";
at = "Come and serve the Master";
au = "Come, follow the King, come, follow the King";
av = "Come. let us reason, reason, reason";
aw = "Come unto Me, all ye that labour and are heavy laden";
ax = "Count your blessings, name them one by one";
ay = "Draw me nearer, nearer, blessed Lord";
az = "Draw your swords, use your swords";
ba = "Everybody should know, everybody should know";
bb = "Except a man ·be born again, except a man be born again";
bc = "Follow, follow, I would follow Jesus";
bd = "He can break every fetter";
be = "He did not come to judge the world";

	
hList = [aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an,
		ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bb,
		bc, bd, be];
return	hList;
}



function pHymnIndex(num){
	var myNo =  hymnFun2();
	var selNum = hymnFunList2();

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
	//document.getElementById("3").innerHTML;
}

function pHymnIndex2(num){
	var myNo =  hymnFun2();
	var selNum = hymnFunList2();

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
	//document.getElementById("3").innerHTML;
	location.replace("#page3")
}

/*
function populateHymnIndex(){
 var selNum = hymnFunList();
document.getElementById("1").innerHTML= selNum[0];
document.getElementById("2").innerHTML= selNum[1];
document.getElementById("3").innerHTML= selNum[2];
document.getElementById("4").innerHTML= selNum[3];
document.getElementById("5").innerHTML= selNum[4];
document.getElementById("6").innerHTML= selNum[5];
}
*/
//Function populate Index with Songs

function populateHymnIndexFun(){
var alist = document.getElementById("hymnIndices");

var arrayT = hymnFunList2();
for (var i=0; i<arrayT.length; i++) {
var crtList = document.createElement("li");
var createElmt = document.createElement("a");
createElmt.textContent = "No."+i+" "+arrayT[i];
createElmt.setAttribute("class", "ui-btn");
createElmt.setAttribute("class", "ui-icon-bullets");
createElmt.setAttribute("id", +i);
createElmt.setAttribute("onclick", "pHymnIndex(this.id);" + onclick);
createElmt.href = "#page3";
crtList.appendChild(createElmt);
alist.appendChild(crtList);
//alist.insertAdjacentHTML("beforeend", "<br>");
} }


function sheffleSong(){
	var selNum = hymnFunList2();
	var hrandom = randIntFun(0, selNum.length);
	var myNo =  hymnFun2();
	document.getElementById("hymnNoIndex").innerHTML= hrandom;
	document.getElementById("displayHymn").innerHTML= myNo[hrandom];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + hrandom;
	document.getElementById("suSongTitle").innerHTML= selNum[hrandom];
	
}

function goToPage2(){
	location.replace("#page2");
}

function go2Prev(){
	history.back();
}
/*
function showSearch(){
document.getElementById("songNoSearchDiv").style.display === "none";
}
*/

function add2FavouriteFun2(){
	var favSongsTitleList =[];

	document.getElementById("displayHymn").innerHTML= myNo[hrandom];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + hrandom;
	var currentSongTitle = document.getElementById("suSongTitle").innerHTML;
}

function showMyFavs(){
		//Clear all the exisitng list
		$('#favouriteSongsListHead').empty();

		//get runs object
		var myFavs = getmyFavsObject();
		//var myFavs2= ["hello", "Good", "Tested", "Nice"]

		//Check if empty
		if(myFavs !="" && myFavs != null){
			for(var i = 0; i < myFavs.length; i++){
		$('#favouriteSongsListHead').append('<li class="ui-btn favListContainer" id="favListContainer2">'+myFavs[i]["title"]
		+'<a class="favListIcons ui-icon-eye ui-btn-icon-left favIcon" id="'+myFavs[i]["songID"]
		+'" onclick=pHymnIndex2(this.id)></a><a href="#" id="deleteLink" data-title="'+myFavs[i]["title"]
		+'" class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li>'); }
		}
		countFavs();
}

function addFav(){
	//Get Form Values
	var title = $('#suSongTitle').text();
	var solo = $('#displayHymn').text();
	var songID = $('#hymnNoIndex').text();
	var titleID = "No."+songID+" "+title;

	//Create 'myFav' object
	var myFav = {
		title: titleID,
		solo: solo,
		songID: songID};

	var myFavs = getmyFavsObject();

	// Add run to runs array
	myFavs.push(myFav);

	alert('Song Added Added');

	//Set stringgified object to localStorage
	localStorage.setItem('myFavs', JSON.stringify(myFavs));

	//Redirect
	//window.location.href="#";
	return false;
}

//Delete All Favourites
function clearAllFavFun(){
	//var testPoint = document.getElementById("clearAllFav");
	var clearFavs = document.getElementById("noFavLabel");
	if (confirm('Do you want to clear all Favourites?')){
		localStorage.removeItem('myFavs');
		clearFavs.innerHTML = "You Have No Favourites";
		showMyFavs();
	}
	else {
	//	var myFavs = getmyFavsObject();
	//	alert($('#favCounts1').html =myFavs.length);}
	countFavs();}
}

//Get the runs object
function getmyFavsObject(){
	//Set runs array
	var myFavs= new Array();
	//Get current runs from localStorage
	var myCurrentFavs = localStorage.getItem('myFavs');

	//Check localStorage
	if(myCurrentFavs != null){
		var myFavs = JSON.parse(myCurrentFavs);
	}
	//Return runs object
	return myFavs;
}

function countFavs(){
	var myFavs = getmyFavsObject().length;
	document.getElementById("homeFavCount").innerHTML = myFavs;
}

/*Movintboo Text
// Wrap every letter in a span 
var textWrapper = document.querySelector('.bottomA'); 
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); 
anime.timeline({loop: true}) 
.add({ 
	targets: '.ml2 .letter', 
	scale: [4,1], 
	opacity: [0,1], translateZ: 0, 
	easing: "easeOutExpo", 
	duration: 950, 
	delay: (el, i) => 70*i 
	}).add({ 
		targets: '.ml2', 
		opacity: 0, 
		duration: 1000, 
		easing: "easeOutExpo", 
		delay: 1000 
	});
*/
function fadingVerses(){setInterval(function(){
	$("#dailyPass").hide();
    $("#dailyPass").html(randomBibleVerse()); //Set Bible verse in tis ID
    $("#dailyPass").fadeIn(2000);
    $("#dailyPass").delay(5000);
    $("#dailyPass").fadeOut(2000);
    }, 9100);
};

//Note that randomBibleVerses Function works with randIntFun Function
function randIntFun(min, max){
    return Math.floor(Math.random(min) * Math.floor(max)); }
function randomBibleVerse(){
    let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
    aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az;

a = ` “Your word is a lamp to my feet and a light for my path.” – Psalm 119:105 `
b = ` “Trust in the LORD with all your heart and lean not on your own understanding.” – Proverbs 3:5 `
c = ` “Pray without ceasing.” – 1 Thess. 5:17`
d = ` “Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!” – 2 Corinthians 5:17`
e = ` “Be on your guard; stand firm in the faith; be courageous; be strong.” - 1 Corinthians 16:13 `
f = `  “And whatever you do, do it heartily, as to the Lord and not to men.” - Colossians 3:23 `
g = `  “For where your treasure is, there will your heart be also.” – Luke 12:34 `
h = ` “I can do all things through Christ who strengthens me.” – Philippians 4:13 `
i = ` “My God shall supply all your need according to his riches in glory by Christ Jesus. - Philippians 4:19 `
j = ` “For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.” – Jeremiah 29:11 `
k = ` “You keep him in perfect peace whose mind is stayed on you, because he trusts in you.” –Isaiah 26:3`
l = ` “If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.”- James 1:5 `
m = ` “Oh that men would praise the LORD for his goodness, and for his wonderful works to the children of men!”- Psalm 107:8 ` 
n = ` “For he satisfies the thirsty and fills the hungry with good things.” – Psalm 107:9 `
o = ` “ Do not be deceived: God cannot be mocked. A man reaps what he sows.” – Galatians 6:7 `
p = ` “The LORD is my shepherd; I shall not want.” – Psalm 23:1 `
q = ` “Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.” – Psalm 23:6 `
r = ` “And we know that all things work together for good to them that love God, to them who are the called according to his purpose.” – Romans 8:28 ` 
s = ` “What shall we then say to these things? If God be for us, who can be against us?” – Romans 8:31 `
t = ` “In every thing give thanks: for this is the will of God in Christ Jesus concerning you.” - 1Thessalonians 5:18 `
u = ` “For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.” – 2 Timothy 1:7 `
v = ` “Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.” – John 14:6 `
w = ` “For all have sinned and fall short of the glory of God.” – Romans 3:23 `
x = `  “For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.” – Ephesians 2:8 `
y = ` “I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.” – Psalm 139:14 `
z = ` “Love the LORD your God with all your heart and with all your soul and with all your strength.” – Deuteronomy 6:5 `
aa = ` “Love your neighbor as yourself.”- Matthew 22:39 `
ab = ` “Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.”- Philippians 4:6 `
ac = ` “And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.” – Philippians 4:7 `
ad = ` “Every word of God proves true; he is a shield to those who take refuge in him.” - Proverbs 30:5 `
ae = `  “So whether you eat or drink or whatever you do, do it all for the glory of God.”- 1 Corinthians 10:31 `
af = ` “In the beginning, God created the heavens and the earth.”- Genesis 1:1`
ag = ` “The heavens declare the glory of God; the skies proclaim the work of his hands.”- Psalm 19:1 `
ah = ` “The LORD knows the way of the righteous, but the way of the wicked will perish.”- Psalm 1:6 `
ai = ` “…Thus says the LORD… Fear not, for I have redeemed you; I have called you by name, you are mine.” – Isaiah 43:1 `
aj = ` “I, I am the LORD, and besides me there is no savior.” – Isaiah 43:11 `
ak = `  “You are the light of the world. A city set on a hill cannot be hidden.” - Matthew 5:14 `
al = ` “Let your light shine before men, that they may see your good deeds and praise your Father in heaven.”- Matthew 5:16 `
am = ` “Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.” – Matthew 6:33 `
an = ` “They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.” - Isaiah 40:31 `
ao = ` “Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.” – John 14:27 `
ap = `“Commit your way to the LORD; trust in him and he will do this: He will make your righteous reward shine like the dawn.” – Psalm 37:4 `
aq = ` “Ask, and you will receive, that your joy may be full.” – John 16:24b `
ar = ` “Let the word of Christ dwell in you richly in all wisdom…” – Colossians 3:16 `
as = ` “Jesus Christ is the same yesterday and today and forever.” – Hebrews 13:8 `
at = ` “For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.” – John 3:16 `
au = ` “Beloved, let us love one another, for love is of God; and everyone who loves is born of God and knows God.”- 1 John 4:7 `
av = `  “Let us think of ways to motivate one another to acts of love and good works.” – Hebrews 10:24 `
aw = ` “Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable – if anything is excellent or praiseworthy – think about such things.” – Philippians 4:8 `
ax = ` “If they obey and serve him, They will spend the rest of their days in prosperity, and their years in contentment.” – Job 36:11 `
ay = ` “Forget the former things; do not dwell on the past. See, I am doing a new thing! - Isaiah43:18-19a `
az = `“Let everything that has breath praise the LORD. Praise the LORD.” – Psalm 150:6 `

verseList = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
    aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az];
    return (verseList[randIntFun(0, (verseList.length))])
};