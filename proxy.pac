//pacfile for 82.56.47.154 from 9986_9762:1_2526
// Cust: CRIF SPA
// Pol:  DEFAULT 9986 9762
// Ntw:  --
var atyps = new Array("authservice.", "formauth.");

function FindProxyForURL(url, host)
{
   alert(url);
   if(url.toLowerCase() == 'https://www.oracle.com/java/technologies/downloads/')
   {
	alert('gino');
	return('127.0.0.1');
   }
   var proxy_addresses;
   var hosted;

   /* Convert the host parameter to lowercase
      to facilitate case insensitive matching.
   */
   host = host.toLowerCase();

   proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    if ('' == 'Network_4995167')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_5089370')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5141142')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5306950')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5306951')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5306952')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5306955')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5462786')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_5565894')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY skblfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY skblfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY skblfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
    }
    if ('' == 'Network_7318026')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041192')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041193')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041194')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY 10.254.114.71:8080; PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY 10.254.114.71:8080; PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY 10.254.114.71:8080; PROXY itcsfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041195')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041196')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY plkrfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-wawa.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY plkrfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-wawa.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY plkrfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-wawa.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041197')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY aedufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-dxba.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY aedufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-dxba.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY aedufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-dxba.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041198')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041199')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041200')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041201')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041202')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY itbofpprxint.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041203')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY plskfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY plskfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY plskfpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-e.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041204')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041205')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041206')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041207')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041208')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY itmifpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY itmifpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY itmifpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-mila.blackspider.com:8006';
        }
    }
    if ('' == 'Network_9041209')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041210')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041211')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041212')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041213')
    {
        proxy_addresses = 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
    }
    if ('' == 'Network_9041214')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY inpufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-c.blackspider.com:8006';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY inpufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-c.blackspider.com:8006';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY inpufpprx.ext.crifnet.com:8080; PROXY hybrid-web.cluster-c.blackspider.com:8006';
        }
    }

   hosted = (proxy_addresses == 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006');

   /* Don't proxy local hostnames */
   if (isPlainHostName(host))
   {
       return 'DIRECT';
   }

   /* always proxy on normal service address/port for the login host */
   if (shExpMatch(host, '*proxy-login.blackspider.com'))
   {
       // Examine and possibly replace the first proxy setting generated above.
       prx_sect = proxy_addresses.split(';')[0];    // get 1st setting
       if (!shExpMatch(prx_sect, 'PROXY *')) return proxy_addresses; // Not a proxy specifier, so don't change anything
       // Verify that the proxy specifier is in the hosted domain by checking last 2 hostname components
       std_host = 'ipv4.82.56.47.154.hybrid-web.global.blackspider.com';
       idx = std_host.search('\.[^.]+\.[^.]+$');
       if (idx < 0) return proxy_addresses; // Not enough hostname components to check whether it is in hosted domain, so we should not change it
       std_domain = std_host.substring(idx);
       len_std_domain = std_domain.length;
       prx_spec = prx_sect.split(' ',2)[1];  // discard 'PROXY ' part keeping host:port
       prx = prx_spec.split(':')[0];     // split hostname from port
       if (prx.substring(prx.length - len_std_domain) != std_domain) return proxy_addresses;    // Not in hosted domain, so we should not change it
       for (i in atyps)
       {
           // strip away auth-type prefix, if present, from hostname in order to use standard service
           atyp = atyps[i];
           if (prx.substring(0, atyp.length) == atyp) return 'PROXY ' + prx_spec.substring(atyp.length);
       }
       // Not an auth-type hostname, so change port number to access the standard service
       return 'PROXY ' + prx + ':8081';
   }

   /* Don't proxy local domains */
   var domain_list;
   if ( hosted )
   {
       // Unfiltered destinations of type hybrid and both hybrid and explicit.
       domain_list = new Array("pam.cloud.du.ae",
"cribisteleserviceclub.it",
"cribis.pl",
"fastdecision.dnb.it",
"sgpcb-mgm.crif.com",
"crifgroup.com",
"crifnet.com",
"cribis.it",
"cribis.com",
"deltavista.ch",
"edistar.com",
"prechzu.sys",
"mercury.austin.hoovers.com",
"phppaid.hoovers.com",
"dbisna.com",
"php.hoovers.com",
"deltavista-online.ch",
"prodatvi.sys",
"deltavista.at",
"remote.gruppohera.it",
"deltavista-online.at",
"csc.com",
"siebel.gruppohera.it",
"prodchzu.sys",
"crifsprint.ru",
"ctxw.kmb.ru",
"crif-online.at",
"yourvoice.com",
"us.dnb.com",
"ubs.com",
"dc-vpn.bayancb.com",
"ra.uralsibbank.ru",
"vpn.cvpn-endpoint-04b1948f97f146297.prod.clientvpn.ap-east-1.amazonaws.com",
"vdi-dev.awsg.at",
"ssl.kbc.ie",
"extranet.sky.it",
"ester01c.crvolterra.it",
"demo.aml-guard.com",
"vpn.cvpn-endpoint-0ed49a1d000dac8b9.prod.clientvpn.eu-west-2.amazonaws.com",
"webinterface.intesasanpaolo.com",
"vpn.cvpn-endpoint-0380214c528f880c1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"demo.teledata.ch",
"cb-server-011.certego.net",
"vpn.cvpn-endpoint-070138b3478563eb1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"fedgov.dnb.com",
"vpn.cvpn-endpoint-07afe1999bf5fd2f3.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vdi.deltavista.pl",
"vpn.cvpn-endpoint-09e04e6b476c98289.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0fe4f37acc0a55430.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-004ce16c87e1b3cc7.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-04f3092c175fdda75.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a891bfc9088af9f5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07577c5e22c40e39f.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0315c66332995c5f5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0cfdc65064cccf44b.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-07f2ff523ca5718ec.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0977199385175e299.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-04f8e3c9315b11976.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0776c5482b1f77488.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0020644eea7506703.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0fcd59e741e0cdfc4.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ff19cdbcd3ecefeb.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-9785007e-7689-4c01-9946-6f37125b9a80-01be14d49faa.vpn.azure.com",
"vpn.cvpn-endpoint-0d3af884736b0db92.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-0242f1f1501274bf3.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07e74e5a6c6a27781.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0baab8bed738a5d54.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f6cc8af946719b5a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05a466d1004d38d82.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a77613031e6da073.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-017bdb21d95e99819.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-02032b4388bf19722.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-029647bf759378e6a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0a02383e4bb800afb.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bd7042f59997d414.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-01357d2de651f78d8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d64502e8dc23db09.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-012d2416f065d0df5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-06e88c2e8959e8118.prod.clientvpn.eu-central-1.amazonaws.com",
"switch01.cloud.farmvision.it",
"mailcontrol.com",
"voxcontact.com",
"switch01.voxcontact.com",
"authorization.api.unicreditbank.cz",
"cvpn-endpoint-02f3834d2599a6bfc.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-45f30069-34a8-4202-a341-14d6c3f53452-d08fcb136346.vpn.azure.com",
"ovpn.popso.it",
"gateway.edison.it",
"vpn.cvpn-endpoint-0a0a8eff26b920345.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-06f87270a74e4fcd1.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02f3834d2599a6bfc.prod.clientvpn.eu-central-1.amazonaws.com",
"dashboard.eventengine.run",
"vpn.cvpn-endpoint-04e82ea822a2491b8.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-08e5065902d2f22e7.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-04077bf89b94c91c7.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00f59ad15eaf012f4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-068b878aad814cbe4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-011dcd5a9b5ab8286.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c1c51f67dfd5244d.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0ad0ce29d4bcd3657.prod.clientvpn.eu-central-1.amazonaws.com",
"es.uat.crifesg.com",
"vpn.cvpn-endpoint-0883cb0d115056783.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f258a3a6dcb27e1a.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-03985445c3153db9a.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0318b9fae8e1f8ad8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0e3419092df7f19e1.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d08d91c7d9d7e019.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07caeb113c5083b2c.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-0fabe476a512299d4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-083e0a31e69c74b99.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0a866e44f75503d8a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02b19d6788cd27a9c.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0a8e37a7abefc0e3c.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0cd4f70496530db7e.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0b0d200ab741be4a6.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-043b3939bdc7927c1.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-06bf0c840aef2b161.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f2b4f06bf066a06e.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-016cf40ba31d068e9.prod.clientvpn.ap-south-1.amazonaws.com",
"store-forensic.prd01.eu-central-1.dup.forcepoint.io",
"c1c2sj3lm55h1g.credentials.iot.eu-central-1.amazonaws.com",
"tenants-storage-prd01-eu-central-1-production-s3.s3.eu-central-1.amazonaws.com",
"a8wj55vrq7x0p-ats.iot.eu-central-1.amazonaws.com",
"register-device.prd01.eu-central-1.dup.forcepoint.io",
"azuregateway-1ce20069-175d-43ae-a2c4-66a07f71a74b-a762a577b141.vpn.azure.com",
"vpns-atl.crifselect.com",
"vpns-den.crifselect.com",
"vpn.cvpn-endpoint-0bcb11883270b04f5.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0739404121fdfdac5.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-030e4be8f773c3af6.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0057aff2c8a017cbc.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05b8ac949ba43c183.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0474a5006ba7a486f.prod.clientvpn.eu-west-1.amazonaws.com",
"azuregateway-64190069-545f-45c9-bd20-29f0e9004d01-d3fea08b15c8.vpn.azure.com",
"azuregateway-b7cd0069-f8d8-4428-975e-7f58654bf7c2-1c57e16f2187.vpn.azure.com",
"cloudinfra-gw.portal.checkpoint.com",
"api-client-cloudia.portal.checkpoint.com",
"cp-tenants-logs-prd.s3.eu-central-1.amazonaws.com",
"cgc-client-settings.s3.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0614b1052e597d5e8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c0b4319006230c8a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0369e485edc40bafa.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.strands.com",
"vpn.cvpn-endpoint-0e9b433cca19c48c1.prod.clientvpn.ap-south-1.amazonaws.com",
"support.depag.eu",
"vpn.cvpn-endpoint-04665384319b9e350.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0c13c869f284a9914.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d4fd2323cb1fdfc5.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-02dc0253336382b40.prod.clientvpn.us-east-1.amazonaws.com",
"vpn.cvpn-endpoint-02e052a8bc88fb93d.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-059720240ccee3365.prod.clientvpn.us-east-1.amazonaws.com",
"wan.ghd4ce42d2f2kfr0c4huneq83.vpn.azure.com",
"hub0.ghd4ce42d2f2kfr0c4huneq83.vpn.azure.com",
"certum.pl",
"nccert.pl",
"unizeto.pl",
"cloudsign.webnotarius.pl",
"wan.ssea7aev5ixe1wwtr2gubljed.vpn.azure.com",
"vpn.cvpn-endpoint-0c2c8374eaee6b009.prod.clientvpn.us-east-1.amazonaws.com",
"oitroot-op1-eu-central-1-screenshots.s3.amazonaws.com",
"api.ingest.eu-central-1.op1.op.analyze.proofpoint.com",
"jira.strands.com",
"azuregateway-fd6a006a-dd68-425e-80b3-599cf71ff50a-f414d30ec392.vpn.azure.com",
"asazure.windows.net",
"applicationinsights.azure.com",
"azconfig.io",
"aad.azure.com",
"api.aadrm.com",
"aadconnecthealth.azure.com",
"ad.azure.com",
"api.loganalytics.io",
"cosmos.azure.com",
"dev.azure.com",
"media.azure.net",
"sphere.azure.net",
"iga.azure.com",
"informationprotection.azure.com",
"servicebus.azure.net",
"logic.azure.com",
"monitor.azure.com",
"identitygovernance.azure.com",
"mspim.azure.com",
"shell.azure.com",
"batch.azure.com",
"search.azure.com",
"quantum.azure.com",
"datalake.azure.net",
"azure.status.microsoft",
"digitaltwins.azure.net",
"bastion.azure.com",
"purview.azure.com",
"storage.azure.com",
"kusto.windows.net",
"elm.iga.azure.com",
"dev.azuresynapse.net",
"marketplacedataprovider.azure.com",
"gallery.azure.com",
"appservice.azure.com",
"network.azure.com",
"servicebus.windows.net",
"functions.azure.com",
"rest.media.azure.net",
"changeanalysis.azure.com",
"eventhubs.azure.net",
"cognitiveservices.azure.com",
"config.office.com",
"catalogapi.azure.com",
"storage.azure.net",
"marketplaceemail.azure.com",
"database.windows.net",
"vault.azure.net",
"help.kusto.windows.net",
"vpn.cvpn-endpoint-097e83c51473acc9c.prod.clientvpn.eu-central-1.amazonaws.com",
"glscan.com",
"vpn.cvpn-endpoint-07b47ef51ffc919cc.prod.clientvpn.eu-south-1.amazonaws.com",
"www.antares.subito.de",
"antares.subito.de",
"vpn.cvpn-endpoint-045dab9fd67e9343c.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-07c989a8c3632a7b2.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-01a263134cc002c82.prod.clientvpn.ap-southeast-1.amazonaws.com",
"d32a6ru7mhaq0c.cloudfront.net",
"ocsp.digicert.com",
"dwv281inkfqg3.cloudfront.net",
"zdxcloud.net",
"crl4.digicert.com",
"zscaler.com",
"d3l44rcogcb7iv.cloudfront.net",
"clients4.google.com",
"crl3.digicert.com",
"zscaler.net",
"vpn.cvpn-endpoint-098467e39b54f08c2.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-041ca45212f3a6574.prod.clientvpn.eu-central-1.amazonaws.com",
"web-scipafi-coll.mef.gov.it",
"vpn.cvpn-endpoint-00263e671d46ed50e.prod.clientvpn.ap-southeast-1.amazonaws.com",
"azuregateway-b4980069-51ce-467e-b542-5f3576c0f895-5e755818c90b.vpn.azure.com",
"azuregateway-c9bc0069-5518-448a-80c6-46340ae718ee-e3facc54f9a7.vpn.azure.com",
"web.azuresynapse.net",
"vpn.cvpn-endpoint-0033a2402bb71aeca.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-09f19dbf9e2608515.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0e3c03b265bc37001.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-66c30069-d6b0-4b23-94c5-ba4679838546-a40ff699a7bc.vpn.azure.com",
"cloudando.com",
"vpn.cvpn-endpoint-0482c395f6cd735fb.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn-cp.innolva.it",
"vpn-cp.revaluta.it",
"yum.oracle.com",
"dl-cdn.alpinelinux.org",
"packages.vmware.com",
"vpn.cvpn-endpoint-0b8b5d3218b0a714d.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0be21e2c3d84999fe.prod.clientvpn.eu-south-1.amazonaws.com",
"deltavista.com",
"deltavista-online.de",
"deltavista-online.com",
"deltavista.de",
"vpn.cvpn-endpoint-0e6361870a857e0c6.prod.clientvpn.eu-central-1.amazonaws.com",
"nuovatorneriacnc.com",
"bludental.it",
"officinadigitaleimola.it",
"essepistampaggiomaterieplastiche.it",
"grupposbordoni.com",
"busnelli.eu",
"client-upload.villapro.eu",
"seienergia.it",
"crifbuergel.de",
"casacaldarelli.it",
"fnovi.it",
"filse.it",
"spatial.io",
"alamedicalspa.com",
"fruitsland.it",
"unitec-group.com",
"crinspection.it",
"gicmoda.it",
"asefibrokers.com",
"regnoverde.eu",
"todis.it",
"corip.it",
"publicity.businessportal.gr",
"strands.com",
"something.cvpn-endpoint-0fd5ffb69ef7a9153.prod.clientvpn.us-east-1.amazonaws.com",
"core.windows.net",
"encryption.crif.jo",
"api.ipify.org",
"aka.ms",
"niklmd-prod-remediation-iothub-dps.azure-devices-provisioning.net",
"apigtwb2c.us.dell.com",
"ocsp.entrust.net",
"sacommercial.apis.dell.com",
"azure-devices.net",
"crl.entrust.net",
"saservices.dell.com",
"hb.apis.dell.com",
"aia.entrust.net",
"dl.dell.com",
"www.digicert.com",
"agent-api.sa.insights.dell.com",
"niklmd-prod-remediation-iothub.azure-devices.net",
"remediation.dell.com",
"www.entrust.net",
"doxxms-prod-remediation-iothub-dps.azure-devices-provisioning.net",
"downloads.dell.com",
"doxxms-prod-remediation-iothub.azure-devices.net",
"api.agent.dcca.dell.com",
"content.dellsupportcenter.com",
"sentinelone.net",
"vpn.cvpn-endpoint-07290bb50f73c32d8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0cb14b24b28f2a79c.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07568f8a76f17267a.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0da947ecf15e9236e.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ac5e99eef0f38870.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-073445019e7989b95.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00347092491ce75af.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-044273721dc5fe072.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0deadc3af340b0e32.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02426d5d4892a32d2.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0b14d22e93eeb7e5b.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0c6d9d38821add6b8.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-056bd6eab073f91a2.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-030a19b5efbf932e8.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-092dd1786254a82dc.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bbd7787fca9b6ef4.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bb97d564d4e17485.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-075a1cea827cdffd4.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0c3f74b61aaaab3c0.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0bc106f3c803c3d8f.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-05064469aae687c47.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0ffa09a7b1fae11b7.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-017e3350a84ec737d.prod.clientvpn.ap-south-1.amazonaws.com",
"nra.unicredit.eu",
"vpn.cvpn-endpoint-07b57160e04eb7624.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0fedbc00dfd122ea1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0397a73170bd5d2b2.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d14c813cf5d015f1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0ef236467b491291d.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05ec7cc86edf11212.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-06ce50c7937a1fc56.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-03d36d6a1cac29327.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0c49e106113137809.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-0834a8192b82b0ead.prod.clientvpn.ap-southeast-1.amazonaws.com",
"personio.de",
"vpn.cvpn-endpoint-0c7393e6eed3ad40b.prod.clientvpn.eu-central-1.amazonaws.com",
"anfvpn.pcb.vn",
"vpn.cvpn-endpoint-0fbdd8616d02f4028.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c331d1a3b0dc3631.prod.clientvpn.eu-central-1.amazonaws.com",
"revaluta.my3cx.it",
"crifaustria.atlassian.net",
"vpn.cvpn-endpoint-0a249cf7de0c5d851.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d848ae5620b48339.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00334fd1b3c09b8b6.prod.clientvpn.ap-southeast-1.amazonaws.com",
"b4o6ags.hosted.endpointprotector.com",
"ramspa.it",
"vpn.pcb.vn",
"foxberg.pl",
"dlugi.info",
"vpn.cvpn-endpoint-043b19d4b26686ec9.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-034689db5d1fd4d9a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ca90643958fbe81c.prod.clientvpn.eu-central-1.amazonaws.com",
"citrix.assicom.com",
"citrix.innolva.it",
"vpn.cvpn-endpoint-0edfefa6e6972a544.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-061a209a4b6914637.prod.clientvpn.eu-central-1.amazonaws.com",
"aslavellino.it",
"vpn.cvpn-endpoint-0c79362000ab4701e.prod.clientvpn.eu-central-1.amazonaws.com",
"exit.crifnet.com",
"office.net",
"microsoftonline.com",
"msftconnecttest.com",
"office.com",
"aspct.it",
"asrem.molise.it",
"grathctrxprdcws.cloud.com",
"nssvc.net",
"vpn.cvpn-endpoint-0d6114014f3d8995e.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a594aa4e0c2b7b0e.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ab4a9bfb1ed4eca0.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-026597bc0a74fed42.prod.clientvpn.ap-southeast-3.amazonaws.com",
"vpn.cvpn-endpoint-02e1b203d458b22c7.prod.clientvpn.ap-southeast-3.amazonaws.com",
"vpn.cvpn-endpoint-0d7f121d7a0e41983.prod.clientvpn.ap-south-1.amazonaws.com",
"cvpn-endpoint-07ae3a63369cc882a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-09e22cfa476d9ead9.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-03fe251f4176d8790.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-017fe121d4a3c2463.prod.clientvpn.eu-central-1.amazonaws.com",
"lavoroperte.politicheattivecalabria.it",
"regione.calabria.it",
"vpn.cvpn-endpoint-0e1f169d516ace8f3.prod.clientvpn.eu-central-1.amazonaws.com",
"login.live.com",
"login.microsoftonline.com",
"crifgroup.my3cx.it",
"vpngateway.bapr.it",
"amazonaws.com",
"vpn.azure.com",
"api.vplus.uat.mercedes-pay.io",
"jmeter-plugins.org",
"azuregateway-8f100069-915c-4b19-a3b6-7272772e97b2-2fa5dd2b4ad5.vpn.azure.com",
"revaluta-limitless-production-host.azurewebsites.net",
"fintechrepository.rbihub.in",
"cms.revaluta.it");
   }
   else
   {
       // Unfiltered destinations of type explicit and both hybrid and explicit.
       domain_list = new Array("pam.cloud.du.ae",
"cribisteleserviceclub.it",
"cribis.pl",
"fastdecision.dnb.it",
"sgpcb-mgm.crif.com",
"crifgroup.com",
"crifnet.com",
"cribis.it",
"cribis.com",
"deltavista.ch",
"edistar.com",
"prechzu.sys",
"mercury.austin.hoovers.com",
"phppaid.hoovers.com",
"dbisna.com",
"php.hoovers.com",
"deltavista-online.ch",
"prodatvi.sys",
"deltavista.at",
"remote.gruppohera.it",
"deltavista-online.at",
"csc.com",
"siebel.gruppohera.it",
"prodchzu.sys",
"crifsprint.ru",
"ctxw.kmb.ru",
"crif-online.at",
"yourvoice.com",
"us.dnb.com",
"ubs.com",
"dc-vpn.bayancb.com",
"ra.uralsibbank.ru",
"vpn.cvpn-endpoint-04b1948f97f146297.prod.clientvpn.ap-east-1.amazonaws.com",
"vdi-dev.awsg.at",
"ssl.kbc.ie",
"extranet.sky.it",
"ester01c.crvolterra.it",
"demo.aml-guard.com",
"vpn.cvpn-endpoint-0ed49a1d000dac8b9.prod.clientvpn.eu-west-2.amazonaws.com",
"webinterface.intesasanpaolo.com",
"vpn.cvpn-endpoint-0380214c528f880c1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"demo.teledata.ch",
"cb-server-011.certego.net",
"vpn.cvpn-endpoint-070138b3478563eb1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"fedgov.dnb.com",
"vpn.cvpn-endpoint-07afe1999bf5fd2f3.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vdi.deltavista.pl",
"vpn.cvpn-endpoint-09e04e6b476c98289.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0fe4f37acc0a55430.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-004ce16c87e1b3cc7.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-04f3092c175fdda75.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a891bfc9088af9f5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07577c5e22c40e39f.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0315c66332995c5f5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0cfdc65064cccf44b.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-07f2ff523ca5718ec.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0977199385175e299.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-04f8e3c9315b11976.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0776c5482b1f77488.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0020644eea7506703.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0fcd59e741e0cdfc4.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ff19cdbcd3ecefeb.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-9785007e-7689-4c01-9946-6f37125b9a80-01be14d49faa.vpn.azure.com",
"vpn.cvpn-endpoint-0d3af884736b0db92.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-0242f1f1501274bf3.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07e74e5a6c6a27781.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0baab8bed738a5d54.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f6cc8af946719b5a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05a466d1004d38d82.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a77613031e6da073.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-017bdb21d95e99819.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-02032b4388bf19722.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-029647bf759378e6a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0a02383e4bb800afb.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bd7042f59997d414.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-01357d2de651f78d8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d64502e8dc23db09.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-012d2416f065d0df5.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-06e88c2e8959e8118.prod.clientvpn.eu-central-1.amazonaws.com",
"switch01.cloud.farmvision.it",
"mailcontrol.com",
"voxcontact.com",
"switch01.voxcontact.com",
"authorization.api.unicreditbank.cz",
"cvpn-endpoint-02f3834d2599a6bfc.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-45f30069-34a8-4202-a341-14d6c3f53452-d08fcb136346.vpn.azure.com",
"ovpn.popso.it",
"gateway.edison.it",
"vpn.cvpn-endpoint-0a0a8eff26b920345.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-06f87270a74e4fcd1.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02f3834d2599a6bfc.prod.clientvpn.eu-central-1.amazonaws.com",
"dashboard.eventengine.run",
"vpn.cvpn-endpoint-04e82ea822a2491b8.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-08e5065902d2f22e7.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-04077bf89b94c91c7.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00f59ad15eaf012f4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-068b878aad814cbe4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-011dcd5a9b5ab8286.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c1c51f67dfd5244d.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0ad0ce29d4bcd3657.prod.clientvpn.eu-central-1.amazonaws.com",
"es.uat.crifesg.com",
"vpn.cvpn-endpoint-0883cb0d115056783.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f258a3a6dcb27e1a.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-03985445c3153db9a.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0318b9fae8e1f8ad8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0e3419092df7f19e1.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d08d91c7d9d7e019.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07caeb113c5083b2c.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-0fabe476a512299d4.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-083e0a31e69c74b99.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0a866e44f75503d8a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02b19d6788cd27a9c.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0a8e37a7abefc0e3c.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0cd4f70496530db7e.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0b0d200ab741be4a6.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-043b3939bdc7927c1.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-06bf0c840aef2b161.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0f2b4f06bf066a06e.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-016cf40ba31d068e9.prod.clientvpn.ap-south-1.amazonaws.com",
"store-forensic.prd01.eu-central-1.dup.forcepoint.io",
"c1c2sj3lm55h1g.credentials.iot.eu-central-1.amazonaws.com",
"tenants-storage-prd01-eu-central-1-production-s3.s3.eu-central-1.amazonaws.com",
"a8wj55vrq7x0p-ats.iot.eu-central-1.amazonaws.com",
"register-device.prd01.eu-central-1.dup.forcepoint.io",
"azuregateway-1ce20069-175d-43ae-a2c4-66a07f71a74b-a762a577b141.vpn.azure.com",
"vpns-atl.crifselect.com",
"vpns-den.crifselect.com",
"vpn.cvpn-endpoint-0bcb11883270b04f5.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0739404121fdfdac5.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-030e4be8f773c3af6.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0057aff2c8a017cbc.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05b8ac949ba43c183.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0474a5006ba7a486f.prod.clientvpn.eu-west-1.amazonaws.com",
"azuregateway-64190069-545f-45c9-bd20-29f0e9004d01-d3fea08b15c8.vpn.azure.com",
"azuregateway-b7cd0069-f8d8-4428-975e-7f58654bf7c2-1c57e16f2187.vpn.azure.com",
"cloudinfra-gw.portal.checkpoint.com",
"api-client-cloudia.portal.checkpoint.com",
"cp-tenants-logs-prd.s3.eu-central-1.amazonaws.com",
"cgc-client-settings.s3.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0614b1052e597d5e8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c0b4319006230c8a.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0369e485edc40bafa.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.strands.com",
"vpn.cvpn-endpoint-0e9b433cca19c48c1.prod.clientvpn.ap-south-1.amazonaws.com",
"support.depag.eu",
"vpn.cvpn-endpoint-04665384319b9e350.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0c13c869f284a9914.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d4fd2323cb1fdfc5.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-02dc0253336382b40.prod.clientvpn.us-east-1.amazonaws.com",
"vpn.cvpn-endpoint-02e052a8bc88fb93d.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-059720240ccee3365.prod.clientvpn.us-east-1.amazonaws.com",
"wan.ghd4ce42d2f2kfr0c4huneq83.vpn.azure.com",
"hub0.ghd4ce42d2f2kfr0c4huneq83.vpn.azure.com",
"certum.pl",
"nccert.pl",
"unizeto.pl",
"cloudsign.webnotarius.pl",
"wan.ssea7aev5ixe1wwtr2gubljed.vpn.azure.com",
"vpn.cvpn-endpoint-0c2c8374eaee6b009.prod.clientvpn.us-east-1.amazonaws.com",
"oitroot-op1-eu-central-1-screenshots.s3.amazonaws.com",
"api.ingest.eu-central-1.op1.op.analyze.proofpoint.com",
"jira.strands.com",
"azuregateway-fd6a006a-dd68-425e-80b3-599cf71ff50a-f414d30ec392.vpn.azure.com",
"asazure.windows.net",
"applicationinsights.azure.com",
"azconfig.io",
"aad.azure.com",
"api.aadrm.com",
"aadconnecthealth.azure.com",
"ad.azure.com",
"api.loganalytics.io",
"cosmos.azure.com",
"dev.azure.com",
"media.azure.net",
"sphere.azure.net",
"iga.azure.com",
"informationprotection.azure.com",
"servicebus.azure.net",
"logic.azure.com",
"monitor.azure.com",
"identitygovernance.azure.com",
"mspim.azure.com",
"shell.azure.com",
"batch.azure.com",
"search.azure.com",
"quantum.azure.com",
"datalake.azure.net",
"azure.status.microsoft",
"digitaltwins.azure.net",
"bastion.azure.com",
"purview.azure.com",
"storage.azure.com",
"kusto.windows.net",
"elm.iga.azure.com",
"dev.azuresynapse.net",
"marketplacedataprovider.azure.com",
"gallery.azure.com",
"appservice.azure.com",
"network.azure.com",
"servicebus.windows.net",
"functions.azure.com",
"rest.media.azure.net",
"changeanalysis.azure.com",
"eventhubs.azure.net",
"cognitiveservices.azure.com",
"config.office.com",
"catalogapi.azure.com",
"storage.azure.net",
"marketplaceemail.azure.com",
"database.windows.net",
"vault.azure.net",
"help.kusto.windows.net",
"vpn.cvpn-endpoint-097e83c51473acc9c.prod.clientvpn.eu-central-1.amazonaws.com",
"glscan.com",
"vpn.cvpn-endpoint-07b47ef51ffc919cc.prod.clientvpn.eu-south-1.amazonaws.com",
"www.antares.subito.de",
"antares.subito.de",
"vpn.cvpn-endpoint-045dab9fd67e9343c.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-07c989a8c3632a7b2.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-01a263134cc002c82.prod.clientvpn.ap-southeast-1.amazonaws.com",
"d32a6ru7mhaq0c.cloudfront.net",
"ocsp.digicert.com",
"dwv281inkfqg3.cloudfront.net",
"zdxcloud.net",
"zscaler.com",
"d3l44rcogcb7iv.cloudfront.net",
"clients4.google.com",
"crl3.digicert.com",
"zscaler.net",
"vpn.cvpn-endpoint-098467e39b54f08c2.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-041ca45212f3a6574.prod.clientvpn.eu-central-1.amazonaws.com",
"web-scipafi-coll.mef.gov.it",
"vpn.cvpn-endpoint-00263e671d46ed50e.prod.clientvpn.ap-southeast-1.amazonaws.com",
"azuregateway-b4980069-51ce-467e-b542-5f3576c0f895-5e755818c90b.vpn.azure.com",
"azuregateway-c9bc0069-5518-448a-80c6-46340ae718ee-e3facc54f9a7.vpn.azure.com",
"web.azuresynapse.net",
"vpn.cvpn-endpoint-0033a2402bb71aeca.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-09f19dbf9e2608515.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0e3c03b265bc37001.prod.clientvpn.eu-central-1.amazonaws.com",
"azuregateway-66c30069-d6b0-4b23-94c5-ba4679838546-a40ff699a7bc.vpn.azure.com",
"cloudando.com",
"vpn.cvpn-endpoint-0482c395f6cd735fb.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn-cp.innolva.it",
"vpn-cp.revaluta.it",
"yum.oracle.com",
"dl-cdn.alpinelinux.org",
"packages.vmware.com",
"vpn.cvpn-endpoint-0b8b5d3218b0a714d.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0be21e2c3d84999fe.prod.clientvpn.eu-south-1.amazonaws.com",
"deltavista.com",
"deltavista-online.de",
"deltavista-online.com",
"deltavista.de",
"vpn.cvpn-endpoint-0e6361870a857e0c6.prod.clientvpn.eu-central-1.amazonaws.com",
"client-upload.villapro.eu",
"spatial.io",
"publicity.businessportal.gr",
"strands.com",
"ajmanded.ae",
"something.cvpn-endpoint-0fd5ffb69ef7a9153.prod.clientvpn.us-east-1.amazonaws.com",
"core.windows.net",
"encryption.crif.jo",
"api.ipify.org",
"aka.ms",
"niklmd-prod-remediation-iothub-dps.azure-devices-provisioning.net",
"apigtwb2c.us.dell.com",
"ocsp.entrust.net",
"sacommercial.apis.dell.com",
"azure-devices.net",
"crl.entrust.net",
"saservices.dell.com",
"hb.apis.dell.com",
"aia.entrust.net",
"dl.dell.com",
"www.digicert.com",
"agent-api.sa.insights.dell.com",
"niklmd-prod-remediation-iothub.azure-devices.net",
"remediation.dell.com",
"www.entrust.net",
"doxxms-prod-remediation-iothub-dps.azure-devices-provisioning.net",
"downloads.dell.com",
"doxxms-prod-remediation-iothub.azure-devices.net",
"api.agent.dcca.dell.com",
"content.dellsupportcenter.com",
"sentinelone.net",
"vpn.cvpn-endpoint-07290bb50f73c32d8.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0cb14b24b28f2a79c.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-07568f8a76f17267a.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0da947ecf15e9236e.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ac5e99eef0f38870.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-073445019e7989b95.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00347092491ce75af.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-044273721dc5fe072.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0deadc3af340b0e32.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-02426d5d4892a32d2.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0b14d22e93eeb7e5b.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0c6d9d38821add6b8.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-056bd6eab073f91a2.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-030a19b5efbf932e8.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-092dd1786254a82dc.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bbd7787fca9b6ef4.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0bb97d564d4e17485.prod.clientvpn.eu-west-2.amazonaws.com",
"vpn.cvpn-endpoint-075a1cea827cdffd4.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0c3f74b61aaaab3c0.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0bc106f3c803c3d8f.prod.clientvpn.me-south-1.amazonaws.com",
"vpn.cvpn-endpoint-05064469aae687c47.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-0ffa09a7b1fae11b7.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-017e3350a84ec737d.prod.clientvpn.ap-south-1.amazonaws.com",
"nra.unicredit.eu",
"vpn.cvpn-endpoint-07b57160e04eb7624.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0fedbc00dfd122ea1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0397a73170bd5d2b2.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d14c813cf5d015f1.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-0ef236467b491291d.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-05ec7cc86edf11212.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-06ce50c7937a1fc56.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-03d36d6a1cac29327.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0c49e106113137809.prod.clientvpn.ap-east-1.amazonaws.com",
"vpn.cvpn-endpoint-0834a8192b82b0ead.prod.clientvpn.ap-southeast-1.amazonaws.com",
"personio.de",
"vpn.cvpn-endpoint-0c7393e6eed3ad40b.prod.clientvpn.eu-central-1.amazonaws.com",
"anfvpn.pcb.vn",
"vpn.cvpn-endpoint-0fbdd8616d02f4028.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c331d1a3b0dc3631.prod.clientvpn.eu-central-1.amazonaws.com",
"revaluta.my3cx.it",
"crifaustria.atlassian.net",
"vpn.cvpn-endpoint-0a249cf7de0c5d851.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0d848ae5620b48339.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-00334fd1b3c09b8b6.prod.clientvpn.ap-southeast-1.amazonaws.com",
"b4o6ags.hosted.endpointprotector.com",
"vpn.pcb.vn",
"foxberg.pl",
"dlugi.info",
"vpn.cvpn-endpoint-043b19d4b26686ec9.prod.clientvpn.eu-west-1.amazonaws.com",
"vpn.cvpn-endpoint-034689db5d1fd4d9a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ca90643958fbe81c.prod.clientvpn.eu-central-1.amazonaws.com",
"citrix.assicom.com",
"citrix.innolva.it",
"vpn.cvpn-endpoint-0edfefa6e6972a544.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-061a209a4b6914637.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0c79362000ab4701e.prod.clientvpn.eu-central-1.amazonaws.com",
"exit.crifnet.com",
"office.net",
"microsoftonline.com",
"msftconnecttest.com",
"office.com",
"grathctrxprdcws.cloud.com",
"nssvc.net",
"vpn.cvpn-endpoint-0d6114014f3d8995e.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0a594aa4e0c2b7b0e.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-0ab4a9bfb1ed4eca0.prod.clientvpn.ap-south-1.amazonaws.com",
"vpn.cvpn-endpoint-026597bc0a74fed42.prod.clientvpn.ap-southeast-3.amazonaws.com",
"vpn.cvpn-endpoint-02e1b203d458b22c7.prod.clientvpn.ap-southeast-3.amazonaws.com",
"vpn.cvpn-endpoint-0d7f121d7a0e41983.prod.clientvpn.ap-south-1.amazonaws.com",
"cvpn-endpoint-07ae3a63369cc882a.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-09e22cfa476d9ead9.prod.clientvpn.eu-south-1.amazonaws.com",
"vpn.cvpn-endpoint-03fe251f4176d8790.prod.clientvpn.ap-southeast-1.amazonaws.com",
"vpn.cvpn-endpoint-017fe121d4a3c2463.prod.clientvpn.eu-central-1.amazonaws.com",
"vpn.cvpn-endpoint-0e1f169d516ace8f3.prod.clientvpn.eu-central-1.amazonaws.com",
"login.live.com",
"login.microsoftonline.com",
"crifgroup.my3cx.it",
"vpngateway.bapr.it",
"amazonaws.com",
"vpn.azure.com",
"api.vplus.uat.mercedes-pay.io",
"jmeter-plugins.org",
"azuregateway-8f100069-915c-4b19-a3b6-7272772e97b2-2fa5dd2b4ad5.vpn.azure.com",
"revaluta-limitless-production-host.azurewebsites.net",
"fintechrepository.rbihub.in",
"cms.revaluta.it");
   }
   for (d in domain_list)
   {
       if ( dnsDomainIs(host, "." + domain_list[d] ) || host == domain_list[d] )
       {
           return 'DIRECT';
       }
   }

   /* Don't proxy portal addresses */
   if ((host == 'www.mailcontrol.com') ||
dnsDomainIs(host, '.mailcontrol.com') ||
(host == 'home.hybrid.global.blackspider.com') ||
(host == 'home.hybrid.global.forcepoint.net') ||
(host == 'home.hybrid-web.global.forcepoint.net') ||
(host == 'webdefence.global.blackspider.com') ||
(host == 'hybrid-web.global.blackspider.com') ||
(host == 'download.global.blackspider.com') ||
(host == 'pac.webdefence.global.blackspider.com') ||
(host == 'pac.hybrid-web.global.blackspider.com') ||
(host == 'img.hybrid-web.websense.net') ||
(host == 'mobile.websense.net') ||
(host == 'mdm.websense.net') ||
(host == 'admin.websense.net') ||
(host == 'status.websense.net') ||
dnsDomainIs(host, '.forcepoint.net') ||
(host == 'epevents.blackspider.com') ||
(host == 'pki.forcepoint.io'))
   {
       return 'DIRECT';
   }

   /* Don't proxy Windows Update */
   if ((host == "download.microsoft.com") ||
(host == "ntservicepack.microsoft.com") ||
(host == "cdm.microsoft.com") ||
(host == "officecdn.microsoft.com.edgesuite.net") ||
(host == "wustat.windows.com") ||
(host == "windowsupdate.microsoft.com") ||
(dnsDomainIs(host, ".windowsupdate.microsoft.com")) ||
(host == "update.microsoft.com") ||
(dnsDomainIs(host, ".update.microsoft.com")) ||
(dnsDomainIs(host, ".windowsupdate.com")) ||
(host == "officecdn.microsoft.com") ||
(host == "sci2-1.am.microsoft.com") ||
(dnsDomainIs(host, ".mp.microsoft.com")) ||
(dnsDomainIs(host, ".dl.ws.microsoft.com")) ||
(dnsDomainIs(host, ".delivery.mp.microsoft.com")) ||
(host == "query1.finance.yahoo.com") ||
(host == "query2.finance.yahoo.com") ||
(dnsDomainIs(host, "emdl.ws.microsoft.com")) ||
(dnsDomainIs(host, "adl.windows.com")) ||
(host == "swcdn.apple.com") ||
(host == "updates-http.cdn-apple.com") ||
(host == "updates.cdn-apple.com"))
   {
       return 'DIRECT';
   }

    /* Don't proxy Office 365 */
    var domain_pattern_list = new Array("*.aadrm.com",
"*.aadrm.us",
"*.activity.windows.com",
"*.appex-rf.msn.com",
"*.aria.microsoft.com",
"*.assets-yammer.com",
"*.auth.microsoft.com",
"*.auth.microsoft.us",
"*.azure-apim.net",
"*.azurerms.com",
"*.cdn.office.net",
"*.cloud.microsoft",
"*.compliance.apps.mil",
"*.compliance.microsoft.com",
"*.compliance.microsoft.us",
"*.cortana.ai",
"*.dod.online.office365.us",
"*.dod.teams.microsoft.us",
"*.dps.mil",
"*.events.data.microsoft.com",
"*.flow.microsoft.com",
"*.gov.online.office365.us",
"*.gov.teams.microsoft.us",
"*.gov.us.microsoftonline.com",
"*.hip.live.com",
"*.informationprotection.azure.com",
"*.informationprotection.azure.us",
"*.keydelivery.mediaservices.windows.net",
"*.lync.com",
"*.mail.protection.outlook.com",
"*.manage.office365.us",
"*.microsoft.com",
"*.microsoftonline-p.com",
"*.microsoftonline.com",
"*.microsoftusercontent.com",
"*.msauth.net",
"*.msauthimages.net",
"*.msauthimages.us",
"*.msecnd.net",
"*.msftauth.net",
"*.msftauthimages.net",
"*.msftauthimages.us",
"*.msftidentity.com",
"*.msidentity.com",
"*.msocdn.com",
"*.mx.microsoft",
"*.od.apps.mil",
"*.office.com",
"*.office.delivery.microsoft.com",
"*.office.net",
"*.office365.com",
"*.office365.us",
"*.officeapps.live.com",
"*.onenote.com",
"*.online.dod.skypeforbusiness.us",
"*.online.office.com",
"*.onmicrosoft.com",
"*.osi.apps.mil",
"*.osi.office365.us",
"*.outlook.com",
"*.outlookmobile.com",
"*.portal.cloudappsecurity.com",
"*.powerapps.com",
"*.powerautomate.com",
"*.protection.apps.mil",
"*.protection.office.com",
"*.protection.office365.us",
"*.protection.outlook.com",
"*.scc.office365.us",
"*.search.production.apac.trafficmanager.net",
"*.search.production.emea.trafficmanager.net",
"*.search.production.us.trafficmanager.net",
"*.secure.skypeassets.com",
"*.security.apps.mil",
"*.security.microsoft.com",
"*.security.microsoft.us",
"*.sharepoint-mil.us",
"*.sharepoint.com",
"*.sharepoint.us",
"*.sharepointonline.com",
"*.skype.com",
"*.static.microsoft",
"*.streaming.mediaservices.windows.net",
"*.svc.ms",
"*.teams.microsoft.com",
"*.usercontent.microsoft",
"*.users.storage.live.com",
"*.virtualearth.net",
"*.wns.windows.com",
"*.yammer.com",
"*.yammerusercontent.com",
"*cdn.onenote.net",
"account.activedirectory.windowsazure.com",
"account.live.com",
"accounts.accesscontrol.windows.net",
"activation.sls.microsoft.com",
"activity.windows.com",
"adelivery.mp.microsoft.com",
"adl.windows.com",
"admin.exchange.apps.mil",
"admin.microsoft.com",
"admin.onedrive.com",
"admin.onedrive.us",
"adminwebservice.microsoftonline.com",
"ajax.aspnetcdn.com",
"aka.ms",
"amp.azure.net",
"api.passwordreset.microsoftonline.com",
"apis.live.net",
"appsforoffice.microsoft.com",
"assets.onestore.ms",
"attachments-dod.office365-net.us",
"attachments.office365-net.us",
"auth.gfx.ms",
"autodiscover-s-dod.office365.us",
"autodiscover-s.office365.us",
"autodiscover.*.mail.onmicrosoft.com",
"autodiscover.*.mail.onmicrosoft.us",
"autodiscover.*.onmicrosoft.com",
"autodiscover.*.onmicrosoft.us",
"autologon.microsoftazuread-sso.com",
"az741266.vo.msecnd.net",
"becws.microsoftonline.com",
"c.live.com",
"c1.microsoft.com",
"ccs.login.microsoftonline.com",
"cdn.odc.officeapps.live.com",
"cdn.uci.officeapps.live.com",
"clientconfig.microsoftonline-p.net",
"companymanager.microsoftonline.com",
"compass-ssl.microsoft.com",
"compliance.apps.mil",
"compliance.microsoft.com",
"compliance.microsoft.us",
"config.apps.mil",
"crl.microsoft.com",
"d.docs.live.net",
"dc.services.visualstudio.com",
"defender.microsoft.com",
"device.login.microsoftonline.com",
"dgps.support.microsoft.com",
"dl.delivery.mp.microsoft.com",
"docs.live.net",
"docs.microsoft.com",
"dod-graph.microsoft.us",
"dod-mtis.cortana.ai",
"dod.activity.windows.us",
"dod.loki.office365.us",
"dod.teams.microsoft.us",
"dodteamsapuiwebcontent.blob.core.usgovcloudapi.net",
"ecn.dev.virtualearth.net",
"emdl.ws.microsoft.com",
"endpoint1-proddodcecompsvc-dodc.streaming.media.usgovcloudapi.net",
"endpoint1-proddodeacompsvc-dode.streaming.media.usgovcloudapi.net",
"enterpriseregistration.windows.net",
"eus-www.sway-cdn.com",
"eus-www.sway-extensions.com",
"firstpartyapps.oaspapps.com",
"g.live.com",
"gcc-high.activity.windows.us",
"gcch-mtis.cortana.ai",
"gcchigh.loki.office365.us",
"go.microsoft.com",
"gov.teams.microsoft.us",
"graph.microsoft.com",
"graph.microsoft.us",
"graph.microsoftazure.us",
"graph.windows.net",
"informationprotection.hosting.portal.azure.net",
"insertmedia.bing.office.net",
"login-us.microsoftonline.com",
"login.live.com",
"login.microsoft.com",
"login.microsoftonline-p.com",
"login.microsoftonline.com",
"login.microsoftonline.us",
"login.windows-ppe.net",
"login.windows.net",
"logincert.microsoftonline.com",
"loginex.microsoftonline.com",
"lpcres.delve.office.com",
"manage.office365.us",
"mem.gfx.ms",
"mlccdn.blob.core.windows.net",
"mlccdnprod.azureedge.net",
"mrodevicemgr.officeapps.live.com",
"mscrl.microsoft.com",
"msdn.microsoft.com",
"msteamsstatics.blob.core.usgovcloudapi.net",
"nexus.microsoftonline-p.com",
"o15.officeredir.microsoft.com",
"ocos-office365-s2s.msedge.net",
"ocsa.officeapps.live.com",
"ocsp.msocsp.com",
"ocsredir.officeapps.live.com",
"ocws.officeapps.live.com",
"od.apps.mil",
"odc.officeapps.live.com",
"office.live.com",
"office15client.microsoft.com",
"officeapps.live.com",
"officecdn.microsoft.com",
"officeclient.microsoft.com",
"officehome.msocdn.us",
"officepreviewredir.microsoft.com",
"officeredir.microsoft.com",
"ols.officeapps.live.com",
"oneclient.sfx.ms",
"otelrules.azureedge.net",
"outlook-dod.office365.us",
"outlook.cloud.microsoft",
"outlook.office.com",
"outlook.office365.com",
"outlook.office365.us",
"partnerservices.getmicrosoftkey.com",
"passwordreset.microsoftonline.com",
"pf.events.data.microsoft.com",
"pf.pipe.aria.microsoft.com",
"policykeyservice.dc.ad.msft.net",
"portal.apps.mil",
"prod.do.dsp.mp.microsoft.com",
"prod.firstpartyapps.oaspapps.com.akadns.net",
"prod.msocdn.com",
"prod.msocdn.us",
"protection.office.com",
"provisioningapi.microsoftonline.com",
"purview.apps.mil",
"purview.microsoft.com",
"purview.microsoft.us",
"r.office.microsoft.com",
"reports.apps.mil",
"scc.office365.us",
"scc.protection.apps.mil",
"secure.aadcdn.microsoftonline-p.com",
"security.apps.mil",
"security.microsoft.com",
"security.microsoft.us",
"shellprod.msocdn.com",
"signup.live.com",
"smtp.office365.com",
"ssw.live.com",
"staffhub.ms",
"staffhubweb.azureedge.net",
"static.sharepointonline.com",
"statics.teams.microsoft.com",
"storage.live.com",
"support.microsoft.com",
"sway.com",
"tasks.office365.us",
"tb.events.data.microsoft.com",
"tb.pipe.aria.microsoft.com",
"teams.microsoft.com",
"teamsapuiwebcontent.blob.core.usgovcloudapi.net",
"technet.microsoft.com",
"telemetryservice.firstpartyapps.oaspapps.com",
"tsfe.trafficshaping.dsp.mp.microsoft.com",
"update.microsoft.com",
"webmail.apps.mil",
"webshell.dodsuite.office365.us",
"windowsupdate.com",
"wus-firstpartyapps.oaspapps.com",
"wus-www.sway-cdn.com",
"wus-www.sway-extensions.com",
"www.microsoft.com",
"www.microsoft365.com",
"www.office365.us",
"www.ohome.apps.mil",
"www.onedrive.com",
"www.outlook.com",
"www.sway.com");
    for (d in domain_pattern_list)
    {
        if (shExpMatch(host, domain_pattern_list[d]))
        {
            return 'DIRECT';
        }
    }

   /* Don't proxy redirects to SSO gateway */
   if (host == 'sts.crifnet.com')
   {
       return 'DIRECT';
   }

   /* Handle SSO redirector requests for roaming users */
   if (false)
   {
       return 'DIRECT';
   }

   /* Query page should always resolve to the proxy - even if it's treated as a local address */
   if (isResolvable(host) && !(shExpMatch(url, 'http://query.webdefence.global.blackspider.com/*')))
   {
       var hostIP = dnsResolve(host);

       /* Don't proxy non-routable addresses (RFC 3330) */
       if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '240.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '100.64.0.0', '255.192.0.0'))
       {
           return 'DIRECT';
       }

       /* Don't proxy local addresses */
       if (isInNet(hostIP, "151.9.82.163", "255.255.255.255") ||
isInNet(hostIP, "103.241.180.89", "255.255.255.255") ||
isInNet(hostIP, "129.33.93.148", "255.255.255.255") ||
isInNet(hostIP, "100.53.13.210", "255.255.255.255") ||
isInNet(hostIP, "103.19.90.98", "255.255.255.255") ||
isInNet(hostIP, "103.241.180.68", "255.255.255.255") ||
isInNet(hostIP, "174.129.210.194", "255.255.255.255") ||
isInNet(hostIP, "103.19.90.102", "255.255.255.255") ||
isInNet(hostIP, "100.254.251.1", "255.255.255.255") ||
isInNet(hostIP, "100.53.14.193", "255.255.255.255") ||
isInNet(hostIP, "100.3.80.239", "255.255.255.255") ||
isInNet(hostIP, "103.4.188.5", "255.255.255.255") ||
isInNet(hostIP, "194.110.202.2", "255.255.255.255") ||
isInNet(hostIP, "195.168.10.0", "255.255.255.0") ||
isInNet(hostIP, "195.78.200.205", "255.255.255.255") ||
isInNet(hostIP, "195.146.132.251", "255.255.255.255") ||
isInNet(hostIP, "194.185.163.35", "255.255.255.255") ||
isInNet(hostIP, "193.41.205.189", "255.255.255.255") ||
isInNet(hostIP, "193.193.172.110", "255.255.255.255") ||
isInNet(hostIP, "194.110.202.1", "255.255.255.255") ||
isInNet(hostIP, "195.7.19.12", "255.255.255.255") ||
isInNet(hostIP, "198.18.58.74", "255.255.255.255") ||
isInNet(hostIP, "188.138.72.150", "255.255.255.255") ||
isInNet(hostIP, "194.149.233.157", "255.255.255.255") ||
isInNet(hostIP, "195.229.45.164", "255.255.255.255") ||
isInNet(hostIP, "204.146.172.230", "255.255.255.255") ||
isInNet(hostIP, "193.222.92.118", "255.255.255.255") ||
isInNet(hostIP, "193.245.72.160", "255.255.255.255") ||
isInNet(hostIP, "195.10.198.151", "255.255.255.255") ||
isInNet(hostIP, "195.234.190.98", "255.255.255.255") ||
isInNet(hostIP, "193.227.215.137", "255.255.255.255") ||
isInNet(hostIP, "203.200.8.150", "255.255.255.255") ||
isInNet(hostIP, "195.49.191.194", "255.255.255.255") ||
isInNet(hostIP, "212.31.249.108", "255.255.255.255") ||
isInNet(hostIP, "213.213.73.0", "255.255.255.0") ||
isInNet(hostIP, "217.64.201.186", "255.255.255.255") ||
isInNet(hostIP, "62.108.230.41", "255.255.255.255") ||
isInNet(hostIP, "5.144.165.218", "255.255.255.255") ||
isInNet(hostIP, "212.69.101.58", "255.255.255.255") ||
isInNet(hostIP, "35.156.82.189", "255.255.255.255") ||
isInNet(hostIP, "66.179.38.129", "255.255.255.255") ||
isInNet(hostIP, "62.75.182.113", "255.255.255.255") ||
isInNet(hostIP, "207.25.253.0", "255.255.255.0") ||
isInNet(hostIP, "77.245.21.33", "255.255.255.255") ||
isInNet(hostIP, "46.28.16.113", "255.255.255.255") ||
isInNet(hostIP, "32.97.166.118", "255.255.255.255") ||
isInNet(hostIP, "217.220.191.95", "255.255.255.255") ||
isInNet(hostIP, "62.87.131.125", "255.255.255.255") ||
isInNet(hostIP, "213.81.171.180", "255.255.255.255") ||
isInNet(hostIP, "217.67.27.0", "255.255.255.0") ||
isInNet(hostIP, "213.174.164.34", "255.255.255.255") ||
isInNet(hostIP, "52.58.119.90", "255.255.255.255") ||
isInNet(hostIP, "213.253.194.21", "255.255.255.255") ||
isInNet(hostIP, "213.218.53.11", "255.255.255.255") ||
isInNet(hostIP, "81.118.66.174", "255.255.255.255") ||
isInNet(hostIP, "89.96.223.3", "255.255.255.255") ||
isInNet(hostIP, "80.95.101.64", "255.255.255.224") ||
isInNet(hostIP, "94.124.145.23", "255.255.255.255") ||
isInNet(hostIP, "87.241.50.199", "255.255.255.255") ||
isInNet(hostIP, "89.96.223.19", "255.255.255.255") ||
isInNet(hostIP, "91.224.72.6", "255.255.255.255") ||
isInNet(hostIP, "81.118.111.136", "255.255.255.255") ||
isInNet(hostIP, "91.118.103.252", "255.255.255.255") ||
isInNet(hostIP, "81.113.175.233", "255.255.255.255") ||
isInNet(hostIP, "80.95.101.32", "255.255.255.224") ||
isInNet(hostIP, "98.192.28.183", "255.255.255.255") ||
isInNet(hostIP, "89.96.174.89", "255.255.255.255") ||
isInNet(hostIP, "87.241.50.198", "255.255.255.255") ||
isInNet(hostIP, "212.7.64.0", "255.255.240.0") ||
isInNet(hostIP, "217.7.80.0", "255.255.240.0") ||
isInNet(hostIP, "78.5.223.194", "255.255.255.255") ||
isInNet(hostIP, "217.6.162.138", "255.255.255.255") ||
isInNet(hostIP, "211.25.61.238", "255.255.255.255") ||
isInNet(hostIP, "62.219.105.75", "255.255.255.255") ||
isInNet(hostIP, "54.194.162.13", "255.255.255.255") ||
isInNet(hostIP, "217.168.137.64", "255.255.255.240") ||
isInNet(hostIP, "54.37.237.96", "255.255.255.224") ||
isInNet(hostIP, "213.144.23.0", "255.255.255.192") ||
isInNet(hostIP, "37.228.161.128", "255.255.255.192") ||
isInNet(hostIP, "213.178.198.28", "255.255.255.255") ||
isInNet(hostIP, "213.178.198.26", "255.255.255.255") ||
isInNet(hostIP, "129.151.44.77", "255.255.255.255") ||
(hosted && (isInNet(hostIP, "20.216.31.102", "255.255.255.255"))))
       {
           return 'DIRECT';
       }
   }

   //Send All traffic from below IP's to on-premise proxy for solving websocket issues.

var egressIP = '82.56.47.154';

if (egressIP == '151.253.2.162')
{
	if(dnsDomainIs(host, 'canva.com') ||
dnsDomainIs(host, '.canva.com') ||
dnsDomainIs(host, 'grammarly.com') ||
dnsDomainIs(host, '.grammarly.com') ||
dnsDomainIs(host, 'spatial.io') ||
dnsDomainIs(host, '.spatial.io') ||
dnsDomainIs(host, 'miro.com') ||
dnsDomainIs(host, '.miro.com') ||
dnsDomainIs(host, 'figma.com') ||
dnsDomainIs(host, '.figma.com'))
	{
		return 'PROXY aedufpprx.ext.crifnet.com:8080';
	}
}
if (egressIP == '212.7.64.24')
{
	if(dnsDomainIs(host, 'canva.com') ||
dnsDomainIs(host, '.canva.com'))
	{
		return 'PROXY itbofpprxint.crifnet.com:8080';
	}
}
if (hosted)
{
	if (dnsDomainIs(host, 'edenred.cz'))
	{
		return 'PROXY hybrid-web.cluster-B.blackspider.com:8006';
	}
	if (dnsDomainIs(host, 'promozioniservizi.it'))
	{
		return 'PROXY hybrid-web.cluster-F.blackspider.com:8006';
	}
	if (dnsDomainIs(host, 'mimit.gov.it') ||
dnsDomainIs(host, 'mise.gov.it'))
	{
		return 'PROXY hybrid-web.cluster-F.blackspider.com:8006';
	}
}
   if (hosted)
   {
       if (url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'wss:')
       {
           var pats = new Array("");
           for (i in pats)
           {
               if (shExpMatch(host, pats[i].toLowerCase()))
               {
                   // non-SSL-terminate hosts must use the normal address/port
                   return 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8081';
               }
           }
       }
       if (url.substring(0, 5) == 'http:' || url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'wss:')
       {
           return 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8006';
       }
       if (url.substring(0, 4) == 'ftp:')
       {
           // ftp must use the normal address/port
           return 'PROXY ipv4.82.56.47.154.hybrid-web.global.blackspider.com:8081';
       }
   }
   else
   {
       if (url.substring(0, 5) == 'http:' || url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'ftp:')
       {
           return proxy_addresses;
       }
   }
   return 'DIRECT';
}
