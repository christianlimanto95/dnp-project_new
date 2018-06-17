<!DOCTYPE html>
<html>
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script>
	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		var script = document.createElement("script");
		script.src = "https://www.googletagmanager.com/gtag/js?id=UA-110331342-1";
		script.setAttribute("async", "");
		document.head.appendChild(script);
	
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-110331342-1');
	}
	</script>

	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

	<meta name="p:domain_verify" content="d363f6ddf00e44c98209ee4f71f2e076"/>
	<meta name="google-site-verification" content="ELxyHaaNmoCfbPEP9555kd88agmXfAFAdDodjbYyUVk" />
	<meta name="robots" content="index,follow" />
	<meta name="description" content="Web designer and developer for business website, e-commerce, and web application. We craft websites with premium experiences" />
	<link rel="canonical" href="<?php echo $canonical_href; ?>" />
 	<title><?php echo $title; ?></title>
	<style>
		@font-face {
			font-family: century-gothic;
			src: url(<?php echo base_url("assets/fonts/GOTHIC_0.TTF"); ?>);
		}

		@font-face {
			font-family: century-gothic-bold;
			src: url(<?php echo base_url("assets/fonts/GOTHICB_0.TTF"); ?>);
		}

		@font-face {
			font-family: century-gothic-bold-italic;
			src: url(<?php echo base_url("assets/fonts/GOTHICBI_0.TTF"); ?>);
		}

		@font-face {
			font-family: century-gothic-italic;
			src: url(<?php echo base_url("assets/fonts/GOTHICI_0.TTF"); ?>);
		}

		@font-face {
			font-family: textmeone;
			src: url(<?php echo base_url("assets/fonts/TextMeOne-Regular.ttf"); ?>);
		}
	</style>
	<link rel="shortcut icon" href="<?php echo base_url("assets/icons/elevate.png"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/common/default.css?v=7"); ?>" />
	<?php echo $additional_css; ?>
</head>
<body>
<a href="<?php echo base_url(); ?>" class="logo" style="background-image: url(<?php echo base_url("assets/icons/logo_white.png"); ?>);"></a>
<a class="header-menu header-menu-about" href="#">ABOUT</a>
<a class="header-menu header-menu-contact" href="#">CONTACT</a>
<script>
var isMobile = false, isTablet = false;
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if (vw < 1025) {
	isMobile = true;
	if (vw >= 768) {
		isTablet = true;
	}
}

var lastScrollTop = 0;
</script>
<div class="container" tabindex="1">