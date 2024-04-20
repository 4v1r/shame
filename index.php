<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hall of shame</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>hi</h1>
    </header>
    <main id="masonry-grid">
        <?php
        $dir = "assets/images/";
        $images = glob($dir . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);
        foreach ($images as $image) {
            echo '<div class="card"><img src="' . $image . '" /></div>';
        }
        ?>
    </main>
</body>
</html>
