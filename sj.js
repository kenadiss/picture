<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script type="text/javascript">
    //<!CDATA[
    var pic = [];
    pic[0] = "https://cdn.jsdmirror.com/gh/kenadiss/picture@main/ht.png";
    pic[1] = "https://cdn.jsdmirror.com/gh/kenadiss/picture@main/double.png";
    pic[2] = "https://www.omegaxyz.com/wp-content/uploads/2017/06/htmlandcss.jpg";
    pic[3] = "https://www.omegaxyz.com/wp-content/uploads/2018/07/tbp.jpg";

    var randomBgIndex = Math.round( Math.random() * 3 );

    //输出随机的背景图
    //document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
    document.write("<img src=" + pic[randomBgIndex] + " width='400'>")
    //]]>
</script>
</body>
</html>