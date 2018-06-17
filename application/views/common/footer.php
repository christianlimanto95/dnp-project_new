</div>
<script>
    var css = document.createElement("link");
    css.rel = 'stylesheet';
    css.href = "<?php echo base_url("assets/css/" . $page_name . ".css?v=12"); ?>";
    css.type = 'text/css';
    document.head.appendChild(css);

    [].forEach.call(document.querySelectorAll("[data-src]"), function(element) {
        var image = new Image();
        
		if (element.tagName != "IMG") {
			image.onload = function() {
                element.style.backgroundImage = "url('" + image.src + "')";
                if (element.classList)
                    element.classList.add("hide-wrapper");
                else
                    element.className += ' ' + "hide-wrapper";
            };
            image.src = element.getAttribute("data-src");
		} else {
			image.onload = function() {
                var parent = element.parentNode;
                if (parent.classList)
                    parent.classList.add("hide-wrapper");
                else
                    parent.className += ' ' + "hide-wrapper";
            };
            image.src = element.getAttribute("src");
		}
    });
</script>
<script src="<?php echo base_url("assets/js/common/jquery_velocity.js"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/common/default.js?v=7"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/" . $page_name . ".js?v=6"); ?>" defer></script>
<?php echo $additional_js; ?>
</body>
</html>