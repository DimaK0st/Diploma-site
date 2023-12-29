<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload and Display</title>
</head>
<body>
<h2>File Upload and Display</h2>

<form action="{{route('test2')}}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file" accept=".pdf">
    Пароль: <input type="password" name="password">
    <button type="submit">Upload</button>
</form>

</body>
</html>
