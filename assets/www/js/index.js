var deviceReady = false;
var initCalled = false ;
var initialized = false;
alert("hello");
function onBodyLoad()
{
	if(typeof window.device === 'undefined')
	{
		document.addEventListener("deviceready", onDeviceReady, false);
	}
	else
	{
		onDeviceReady();
	}
},

function onDeviceReady()
{
	deviceReady = true ;
	if(initCalled === true)
		initializeCP();
},

function initializeCP()
{
	if(initialized)
		return;
	initCalled = true ;
	if(cp.pg && deviceReady === false)
		return;

	function cpInit()
	{
		document.body.innerHTML = " <div class='cpMainContainer' id='cpDocument' style='left: 0px; top:0px;' >	<div id='main_container' style='top:0px;position:absolute;width:100%;height:100%;'>	<div id='projectBorder' style='top:0px;left:0px;width:100%;height:100%;position:absolute;display:block'></div>	<div class='shadow' id='project_container' style='left: 0px; top:0px;width:100%;height:100%;position:absolute;overflow:hidden;' >	<div id='project' class='cp-movie' style='width:100% ;height:100%;overflow:hidden;'>		<div id='project_main' class='cp-timeline cp-main'>			<div id='div_Slide' onclick='cp.handleClick(event)' style='top:0px; width:100% ;height:100% ;position:absolute;-webkit-tap-highlight-color: rgba(0,0,0,0);'></div>			<canvas id='slide_transition_canvas'></canvas>		</div>		<div id='autoplayDiv' style='display:block;text-align:center;position:absolute;left:0px;top:0px;'>			<img id='autoplayImage' src='' style='position:absolute;display:block;vertical-align:middle;'/>			<div id='playImage' tabindex='9999' role='button' aria-label='play' onkeydown='cp.CPPlayButtonHandle(event)' onClick='cp.movie.play()' style='position:absolute;display:block;vertical-align:middle;'></div>		</div>	</div>	<div id='toc' style='left:0px;position:absolute;-webkit-tap-highlight-color: rgba(0,0,0,0);'>	</div>	<div id='playbar' style='bottom:0px; position:fixed'>	</div>	<div id='cc' style='left:0px; position:fixed;visibility:hidden;pointer-events:none;' onclick='cp.handleCCClick(event)'>		<div id='ccText' style='left:0px;float:left;position:absolute;width:100%;height:100%;'>		<p style='margin-left:8px;margin-right:8px;margin-top:2px;'>		</p>		</div>		<div id='ccClose' style='background-image:url(./htmlimages/ccClose.png);right:10px; position:absolute;cursor:pointer;width:13px;height:11px;' onclick='cp.showHideCC()'>		</div>	</div>	<div id='gestureIcon' class='gestureIcon'>	</div>	<div id='gestureHint' class='gestureHintDiv'>		<div id='gImage' class='gesturesHint'></div>	</div>	<div id='pwdv' style='display:block;text-align:center;position:absolute;width:100%;height:100%;left:0px;top:0px'></div>	<div id='exdv' style='display:block;text-align:center;position:absolute;width:100%;height:100%;left:0px;top:0px'></div>	</div>	</div></div><div id='blockUserInteraction' class='blocker' style='width:100%;height:100%;'>	<table style='width:100%;height:100%;text-align:center;vertical-align:middle' id='loading' class='loadingBackground'>		<tr style='width:100%;height:100%;text-align:center;vertical-align:middle'>			<td style='width:100%;height:100%;text-align:center;vertical-align:middle'>				<image id='preloaderImage'></image>				<div id='loadingString' class='loadingString'>Loading...</div>			</td>		</tr>	</table></div> <div id='initialLoading'></div>";
		cp.DoCPInit();
		var lCpExit = window["DoCPExit"];
		window["DoCPExit"] = function()
		{
			if(cp.UnloadActivties)
				cp.UnloadActivties();
			lCpExit();
		};
	}

	cpInit();
	initialized = true;
}
