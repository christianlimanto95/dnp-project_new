</div>
<script>
    var css = document.createElement("link");
    css.rel = 'stylesheet';
    css.href = "<?php echo base_url("assets/css/" . $page_name . ".css?v=11"); ?>";
    css.type = 'text/css';
    document.head.appendChild(css);
</script>
<script src="<?php echo base_url("assets/js/common/jquery_velocity.js"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/common/default.js?v=6"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/" . $page_name . ".js?v=5"); ?>" defer></script>
<?php echo $additional_js; ?>
</body>
</html>