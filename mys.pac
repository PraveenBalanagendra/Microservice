/* ---------------------------------------------------------- 	*/
/* Created and Modified by Integ-Nsec				*/
/* Version 3.1  						*/
/* Last Modified : 27 Apr 2017					*/
/* ---------------------------------------------------------- 	*/

function FindProxyForURL(url, host)
{
// variable strings to return
var proxyair = "PROXY indmysb01intpxy01.ad.infosys.com:80;PROXY indmysb01intpxy02.ad.infosys.com:80;PROXY 10.122.55.2:80;;PROXY 10.122.55.3:80;PROXY indchnshlb04intpxy02.ad.infosys.com:80";
var proxyvod = "PROXY indmysb01intpxy02.ad.infosys.com:80;PROXY indmysb01intpxy01.ad.infosys.com:80;PROXY 10.122.55.3:80;;PROXY 10.122.55.2:80;PROXY indchnshlb02intpxy01.ad.infosys.com:80";
var proxyvod05 = "PROXY indchnshlb04intpxy02.ad.infosys.com:80;PROXY indchnshlb02intpxy01.ad.infosys.com:80;PROXY 10.81.82.184:80;PROXY 10.81.82.132:80";
var proxyBlr = "PROXY indblrb06intpxy04.ad.infosys.com:80;PROXY 10.68.248.39:80;PROXY indblrb06intpxy01.ad.infosys.com:80;PROXY 10.68.248.98:80";
var proxy_no = "DIRECT";
url = url.toLowerCase();
host = host.toLowerCase();

/*Redirection to Local Proxy for Generic Internet URL access*/
	{
                if 	(    	dnsDomainIs(host, "launchpad.infosys.com")||
				dnsDomainIs(host, "login.microsoftonline.com")||
				dnsDomainIs(host, "enterpriseregistration.windows.net")
			)
                	return proxyair;

		else if	(	isPlainHostName(host)||
				dnsDomainIs(host, "ad.infosys.com")||
				dnsDomainIs(host, "is.infosys.com")||
				dnsDomainIs(host, "meetinfy.webex.com")||
				dnsDomainIs(host, "infosys.webex.com")||
				dnsDomainIs(host, "infylearning.webex.com")||
				dnsDomainIs(host, "iconnect.infosys.com")||
				dnsDomainIs(host, "iconnectodc.infosys.com")||
				dnsDomainIs(host, "usaplainfdrv01.infosys.com")||
				dnsDomainIs(host, "usaplainfdrv02.infosys.com")||
				dnsDomainIs(host, "blrkecinfdrv01.infosys.com")||
				dnsDomainIs(host, "blrkecinfdrv02.infosys.com")||
				dnsDomainIs(host, "infydrive.infosys.com")||
				dnsDomainIs(host, "apps.infosys.com")||
				dnsDomainIs(host, "evapps.infosys.com")||
				dnsDomainIs(host, "infyme.infosysapps.com")||
				dnsDomainIs(host, "ocsp.infosys.com")||
				dnsDomainIs(host, "ocp.infosys.com")||
				dnsDomainIs(host, "ocspmc.infosys.com")||
				dnsDomainIs(host, "akaash.infosys.com")||
				dnsDomainIs(host, "stsakaash.infosys.com")||
				dnsDomainIs(host, "localhost")||
				shExpMatch(url, "http://10.*.*.*")||
				shExpMatch(url, "https://10.*.*.*")||
				shExpMatch(url, "*172.21.*.*")||
				shExpMatch(url, "*172.22.*.*")||
				shExpMatch(url, "*172.23.*.*")||
				shExpMatch(url, "*172.24.*.*")||
				shExpMatch(url, "*172.25.*.*")||
				shExpMatch(url, "*172.26.*.*")||
				shExpMatch(url, "*172.31.*.*")||
				shExpMatch(url, "*127.0.0.1*")||
				shExpMatch(url, "*ipcccfin.infyucce.com*")||
				shExpMatch(url, "*.local*")||
				shExpMatch(url, "http://blrkecsdb*")||
				shExpMatch(url, "*ad.infosys.com/*")||
				shExpMatch(url, "*onestop.infosysapps.com*")||
				shExpMatch(url, "*infyme.infosysapps.com*")||
				shExpMatch(url, "http://blrkec*")||
				shExpMatch(url, "*ppc.infosys.com/*")||
				dnsDomainIs(host, "qagpublic.qginfy.infosys.com")||
				dnsDomainIs(host, "remote-idemo-ppc.infosys.com")||
				dnsDomainIs(host, "lync.com")||
				dnsDomainIs(host, "pipe.skype.com")||
				shExpMatch(url, "*192.168.*.*")
			)
			return "DIRECT";

		else if (	shExpMatch(url, "*meet.infosys.com*")||
				dnsDomainIs(host, "*meet.infosys.com*")||
				shExpMatch(url, "*dialin.infosys.com*")||
				shExpMatch(url, "*-int.infosys.com*")||
				shExpMatch(url, "*-int01.infosys.com*")||
				shExpMatch(url, "*-int02.infosys.com*")||
				shExpMatch(url, "*autodiscover.infosys.com*")||
				shExpMatch(url, "*-int03.infosys.com*")||
				shExpMatch(url, "*ls01wac.infosys.com*")||
				shExpMatch(url, "*ls03wac.infosys.com*")||
				shExpMatch(url, "*webvc.infosys.com*")||
				shExpMatch(url, "*lyncdiscoverinternal.infosys.com*")||
				shExpMatch(url, "https://*.ad.infosys.com*")||
				shExpMatch(url, "*vc.infosys.com*")
			)
			return proxy_no;

		else if (	shExpMatch(url, "*autodiscover.infosystechnologies.mail.onmicrosoft.com*")||
				shExpMatch(url, "*infosystechnologies.mail.onmicrosoft.com*")||
				shExpMatch(url, "*autodiscover-s.outlook.com*")||
				shExpMatch(url, "*outlook.office365.com*")||
				shExpMatch(url, "*lex.infosysapps.com*")||
				shExpMatch(url, "*cloud.druva.com*")||
				shExpMatch(url, "*employeehubtst.infosysapps.com*")||
				shExpMatch(url, "*attachment.outlook.office.net*")||
				shExpMatch(url, "*infosystechnologies.sharepoint.com*")||
				shExpMatch(url, "*infosystechnologies-myfiles.sharepoint.com*")||
				shExpMatch(url, "*infosystechnologies-files.sharepoint.com*")||
				shExpMatch(url, "*workbenchtst.infosysapps.com*")||
				shExpMatch(url, "*workbench.infosysapps.com*")||
				shExpMatch(url, "*infosystechnologies-my.sharepoint.com*")
			)
			return "DIRECT";

                else if (    dnsDomainIs(host, "google.com")||
			     dnsDomainIs(host, "google.co.in")||
			     dnsDomainIs(host, "bing.com")||
			     dnsDomainIs(host, "yahoo.com")||
			     dnsDomainIs(host, "yahoo.co.in")||
			     dnsDomainIs(host, "amazon.in")||
			     shExpMatch(url, "live")||
                             shExpMatch(url, "*flipkart*")
			)
	                return proxyair;

		else if (	shExpMatch(url, "*meet.infosys.com*")||
				dnsDomainIs(host, "*meet.infosys.com*")||
				shExpMatch(url, "*dialin.infosys.com*")||
				shExpMatch(url, "*-int.infosys.com*")||
				shExpMatch(url, "*-int01.infosys.com*")||
				shExpMatch(url, "*-int02.infosys.com*")||
				shExpMatch(url, "*autodiscover.infosys.com*")||
				shExpMatch(url, "*-int03.infosys.com*")||
				shExpMatch(url, "*ls01wac.infosys.com*")||
				shExpMatch(url, "*ls03wac.infosys.com*")||
				shExpMatch(url, "*webvc.infosys.com*")||
				shExpMatch(url, "*lyncdiscoverinternal.infosys.com*")||
				shExpMatch(url, "https://*.ad.infosys.com*")||
				shExpMatch(url, "*vc.infosys.com*")
			)
			return proxy_no;

		else if (	shExpMatch(url, "*microsoft*")||
				shExpMatch(url, "*bank*")||
				shExpMatch(url, "*support*")||
				shExpMatch(url, "*connect*")||
				shExpMatch(url, "*webex*")||
				shExpMatch(url, "*gateway*")||
				shExpMatch(url, "*payment*")||
				shExpMatch(url, "*service*")||
				shExpMatch(url, "*video*")||
				shExpMatch(url, "*mail*")||
				shExpMatch(url, "*ytimg*")||
				shExpMatch(url, "*meet*")||
				shExpMatch(url, "*amazon*")||
				shExpMatch(url, "*azure*")||
				shExpMatch(url, "*money*")||
				shExpMatch(url, "*share*")||
				shExpMatch(url, "*download*")||
				shExpMatch(url, "*cric*")
			)
			return proxyvod;

		else if (	shExpMatch(url, "*https://*")||
				shExpMatch(url, "*facebook*")||
				shExpMatch(url, "*twitter*")||
				shExpMatch(url, "*weibo*")||
				shExpMatch(url, "*mail*")||
				shExpMatch(url, "*blog*")||
				shExpMatch(url, "*youtube*")||
				shExpMatch(url, "*linked*")||
				shExpMatch(url, "*infosys*")||
				shExpMatch(url, "*fbcdn*")||
				shExpMatch(url, "*times*")||
				shExpMatch(url, "*news*")||
				shExpMatch(url, "*yammer*")||
				shExpMatch(url, "*apple*")||
				shExpMatch(url, "*oracle*")||
				shExpMatch(url, "*proxy*")||
				shExpMatch(url, "*ndtv*")||
				shExpMatch(url, "*yammer*")||
				shExpMatch(url, "*cric*")
			)
			return proxyvod05;

		else  
	
			return proxyair;
	}
}
