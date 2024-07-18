<?php
$request->validate([
    'hakkimda' => 'required|string',
    'resim' => 'required|image|mimes:jpeg,png,gif',
    'cv' => 'required|mimes:pdf|max:2048',
]);

$imagePath = $request->file('resim')->store('public/images');
$cvPath = $request->file('cv')->store('public/cv');

// Daha sonra veritabanına kaydetme veya başka işlemler yapabilirsiniz.

return response()->json(['message' => 'Dosyalar başarıyla kaydedildi.']);

